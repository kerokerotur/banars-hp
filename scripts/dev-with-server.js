#!/usr/bin/env node

/**
 * サーバーを自動起動してからフロントエンドを起動するスクリプト
 */

const { spawn } = require('child_process');
const { checkServer } = require('./wait-for-server.js');

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:8787';

async function startServerIfNeeded() {
  // サーバーが既に起動しているかチェック
  const isServerRunning = await checkServer();
  
  if (isServerRunning) {
    console.log(`✅ サーバーは既に起動しています: ${SERVER_URL}`);
    return null;
  }

  console.log('🚀 サーバーを起動中...');
  
  // サーバーを起動
  const serverProcess = spawn('pnpm', ['--filter=server', 'dev'], {
    stdio: 'pipe',
    cwd: process.cwd(),
    detached: true
  });

  serverProcess.stdout.on('data', (data) => {
    const output = data.toString();
    if (output.includes('Ready on')) {
      console.log('✅ サーバーが起動しました');
    }
  });

  serverProcess.stderr.on('data', (data) => {
    console.error(`サーバーエラー: ${data}`);
  });

  // サーバーの起動を待つ
  for (let i = 0; i < 30; i++) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const isReady = await checkServer();
    if (isReady) {
      console.log(`✅ サーバーが準備完了: ${SERVER_URL}`);
      return serverProcess;
    }
    console.log(`⏳ サーバー起動待機中 ${i + 1}/30...`);
  }

  console.error('❌ サーバーの起動に失敗しました');
  serverProcess.kill();
  process.exit(1);
}

async function startFrontend() {
  const args = process.argv.slice(2);
  const frontendCommand = args.length > 0 ? args : ['react-router', 'dev'];
  
  console.log(`🚀 フロントエンドを起動: ${frontendCommand.join(' ')}`);
  
  const frontendProcess = spawn(frontendCommand[0], frontendCommand.slice(1), {
    stdio: 'inherit',
    cwd: process.cwd()
  });

  return frontendProcess;
}

async function main() {
  try {
    // サーバーを起動（必要に応じて）
    const serverProcess = await startServerIfNeeded();
    
    // フロントエンドを起動
    const frontendProcess = await startFrontend();

    // シグナルハンドリング
    process.on('SIGINT', () => {
      console.log('\n🛑 アプリケーションを終了中...');
      
      if (frontendProcess) {
        frontendProcess.kill('SIGINT');
      }
      
      if (serverProcess) {
        serverProcess.kill('SIGINT');
      }
      
      process.exit(0);
    });

    // フロントエンドプロセスの終了を待つ
    frontendProcess.on('close', (code) => {
      console.log(`フロントエンドが終了しました (code: ${code})`);
      
      if (serverProcess) {
        console.log('🛑 サーバーを停止中...');
        serverProcess.kill('SIGINT');
      }
    });

  } catch (error) {
    console.error('❌ 起動エラー:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { startServerIfNeeded, startFrontend };