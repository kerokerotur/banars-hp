# コマンドリファレンス

## 開発コマンド

### 開発サーバー
```bash
# 全体起動（推奨）
pnpm run dev

# サーバーのみ
pnpm run dev:server

# フロントエンドのみ（server起動後）
pnpm run dev:frontend

# 個別起動
cd client && pnpm run dev
cd inhouse && pnpm run dev
cd server && pnpm run dev
```

## ビルドコマンド

### 全体ビルド
```bash
# 本番ビルド
pnpm run build

# 開発ビルド
pnpm run build:dev

# 本番最適化ビルド
pnpm run build:prod
```

### 個別ビルド
```bash
# 共通コンポーネント
cd common && pnpm run build

# クライアント
cd client && pnpm run build

# 管理画面
cd inhouse && pnpm run build
```

## 品質チェック

### 型チェック
```bash
# 全体
pnpm run typecheck

# 個別
cd [package] && pnpm run typecheck
```

### リント・フォーマット
```bash
# リント確認
pnpm run lint:check

# リント修正
pnpm run lint

# フォーマット確認
pnpm run format:check

# フォーマット適用
pnpm run format
```

## データベース操作

### マイグレーション
```bash
cd server

# ローカルマイグレーション
pnpm run mg-deploy-local

# 本番マイグレーション
pnpm run mg-deploy-remote

# データベース作成
pnpm run mg-create
```

### Cloudflare関連
```bash
cd server

# 型定義生成
pnpm run cf-typegen

# 設定確認
pnpm run check

# デプロイ
pnpm run server-deploy
```

## 本番運用

### デプロイ
```bash
# サーバーデプロイ
cd server && pnpm run server-deploy

# フロントエンドはCI/CDで自動デプロイ
```

### アプリケーション起動
```bash
# ビルド後の起動
pnpm run start
```

## ユーティリティ

### クリーンアップ
```bash
# 各パッケージ
cd [package] && pnpm run clean

# node_modules再インストール
rm -rf node_modules && pnpm install
```

### Turboキャッシュクリア
```bash
pnpm turbo clean
```

## 完了条件確認コマンド

新機能開発完了時に実行：

```bash
# 1. 型チェック
pnpm run typecheck

# 2. リント
pnpm run lint

# 3. ビルド確認（最重要）
pnpm run build

# 4. 個別ビルド確認
cd client && pnpm run build
cd ../inhouse && pnpm run build
```

## パッケージ別スクリプト

### common/
- `build`: TypeScriptコンパイル
- `dev`: Watch mode
- `typecheck`: 型チェックのみ

### client/ & inhouse/
- `build`: React Router + Viteビルド
- `dev`: 開発サーバー
- `typecheck`: 型チェック

### server/
- `dev`: Wrangler開発サーバー
- `server-deploy`: Cloudflareデプロイ
- `mg-*`: データベースマイグレーション

## 関連ドキュメント

- [開発ワークフロー](./workflow.md)
- [ビルドシステム](../build/build-system.md)
- [トラブルシューティング](./troubleshooting.md)