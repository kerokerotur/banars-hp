#!/usr/bin/env node

/**
 * サーバーが起動するまで待機するスクリプト
 */

const http = require('http');

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:8787';
const MAX_RETRIES = 30;
const RETRY_INTERVAL = 2000; // 2秒

function checkServer() {
  return new Promise((resolve) => {
    const url = new URL(SERVER_URL);
    const options = {
      hostname: url.hostname,
      port: url.port,
      path: '/',
      method: 'GET',
      timeout: 1000
    };

    const req = http.request(options, (res) => {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        console.log(`✅ サーバーが起動しました: ${SERVER_URL}`);
        resolve(true);
      } else {
        resolve(false);
      }
    });

    req.on('error', () => {
      resolve(false);
    });

    req.on('timeout', () => {
      req.destroy();
      resolve(false);
    });

    req.end();
  });
}

async function waitForServer() {
  console.log(`🕐 サーバーの起動を待機中: ${SERVER_URL}`);
  
  for (let i = 0; i < MAX_RETRIES; i++) {
    const isServerReady = await checkServer();
    
    if (isServerReady) {
      return true;
    }
    
    console.log(`⏳ 再試行 ${i + 1}/${MAX_RETRIES}...`);
    await new Promise(resolve => setTimeout(resolve, RETRY_INTERVAL));
  }
  
  console.error(`❌ サーバーの起動確認に失敗しました: ${SERVER_URL}`);
  console.error('サーバーが正常に起動しているか確認してください。');
  process.exit(1);
}

if (require.main === module) {
  waitForServer().then(() => {
    console.log('🚀 フロントエンドアプリケーションを起動できます');
    process.exit(0);
  });
}

module.exports = { waitForServer, checkServer };