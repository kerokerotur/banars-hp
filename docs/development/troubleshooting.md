# トラブルシューティング

## よくある問題と解決方法

### TypeScriptエラー

#### 1. common配下のコンポーネントが見つからない
```
Cannot find module '@project/common/ui/button'
```

**解決方法:**
```bash
# common配下をビルド
cd common && pnpm run build

# 型チェック確認
pnpm run typecheck
```

#### 2. 型定義ファイルが見つからない
```
Could not find a declaration file for module
```

**解決方法:**
```bash
# 依存関係再インストール
pnpm install

# TypeScript設定確認
cat tsconfig.json
```

### ビルドエラー

#### 1. Viteビルド失敗
```
[vite]: Rollup failed to resolve import
```

**解決方法:**
```bash
# 依存関係の確認
pnpm run typecheck

# common配下のビルド確認
cd common && pnpm run build

# キャッシュクリア
rm -rf node_modules/.vite
```

#### 2. commonパッケージのビルドファイルが見えない
**原因:** VS Code設定で`build/`が除外されている

**解決方法:**
```json
// .vscode/settings.json
{
  "files.exclude": {
    // "**/build": true を無効化
  }
}
```

### 開発サーバーエラー

#### 1. ポート競合
```
Port 5173 is already in use
```

**解決方法:**
```bash
# プロセス確認・終了
lsof -ti:5173 | xargs kill -9

# または別ポート使用
pnpm run dev -- --port 5174
```

#### 2. HMR（Hot Module Replacement）が効かない
**解決方法:**
```bash
# 開発サーバー再起動
# Ctrl+C で停止後
pnpm run dev
```

### データベースエラー

#### 1. D1データベース接続エラー
```
D1_ERROR: Database not found
```

**解決方法:**
```bash
cd server

# データベース作成
pnpm run mg-create

# マイグレーション実行
pnpm run mg-deploy-local

# 設定確認
cat wrangler.json
```

#### 2. マイグレーション失敗
```
Migration failed: table already exists
```

**解決方法:**
```bash
# ローカルD1リセット
wrangler d1 execute [DB_NAME] --local --command="DROP TABLE IF EXISTS players;"

# マイグレーション再実行
pnpm run mg-deploy-local
```

### パッケージ管理エラー

#### 1. pnpm installエラー
```
ERR_PNPM_PEER_DEP_ISSUES
```

**解決方法:**
```bash
# 強制インストール
pnpm install --force

# または
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### 2. workspaceリンクエラー
```
Cannot resolve workspace protocol
```

**解決方法:**
```bash
# workspace設定確認
cat pnpm-workspace.yaml

# 依存関係再構築
pnpm install --frozen-lockfile=false
```

### デザインシステムエラー

#### 1. TailwindCSSクラスが適用されない
**原因:** TailwindCSS設定の問題

**解決方法:**
```bash
# TailwindCSS設定確認
cat tailwind.config.ts

# postcss.config.js確認
cat postcss.config.js

# 開発サーバー再起動
pnpm run dev
```

#### 2. CVA（Class Variance Authority）エラー
```
Cannot read properties of undefined (reading 'variants')
```

**解決方法:**
```typescript
// components.tsでの正しいimport
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
```

### パフォーマンス問題

#### 1. ビルドが遅い
**解決方法:**
```bash
# Turboキャッシュ活用
pnpm turbo build

# 並列ビルド確認
cat turbo.json
```

#### 2. 開発サーバーが重い
**解決方法:**
```bash
# 不要なファイル除外確認
cat .gitignore

# node_modules再構築
rm -rf node_modules && pnpm install
```

## デバッグ手順

### 1. 段階的確認
```bash
# 1. 依存関係確認
pnpm install

# 2. 型チェック
pnpm run typecheck

# 3. リント確認
pnpm run lint:check

# 4. ビルド確認
pnpm run build

# 5. 個別ビルド確認
cd client && pnpm run build
cd ../inhouse && pnpm run build
```

### 2. ログ確認
```bash
# Vite詳細ログ
DEBUG=vite:* pnpm run dev

# TypeScript詳細ログ
tsc --listFiles
```

### 3. 設定ファイル確認
- `package.json` - スクリプト・依存関係
- `tsconfig.json` - TypeScript設定
- `vite.config.ts` - Viteビルド設定
- `tailwind.config.ts` - TailwindCSS設定

## 緊急時の対処

### 全体リセット
```bash
# 1. 依存関係完全削除
rm -rf node_modules pnpm-lock.yaml
find . -name "node_modules" -type d -exec rm -rf {} +

# 2. ビルド成果物削除
rm -rf */build */dist */.react-router

# 3. 再インストール
pnpm install

# 4. 再ビルド
pnpm run build
```

## 関連ドキュメント

- [開発環境構築](./getting-started.md)
- [コマンドリファレンス](./commands.md)
- [ビルドシステム](../build/build-system.md)