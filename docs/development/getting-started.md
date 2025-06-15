# 開発環境構築

## 必要な環境

- **Node.js**: v18以上
- **pnpm**: v10.11.0以上
- **Git**: 最新版

## セットアップ手順

### 1. リポジトリクローン
```bash
git clone [repository-url]
cd homepage
```

### 2. 依存関係インストール
```bash
pnpm install
```

### 3. 環境変数設定
```bash
# server/.env.example をコピー
cp server/.env.example server/.env

# 必要な環境変数を設定
# CLOUDFLARE_API_TOKEN=
# CLOUDFLARE_ACCOUNT_ID=
```

### 4. データベース初期化
```bash
# D1データベース作成
cd server
pnpm run mg-create

# マイグレーション実行
pnpm run mg-deploy-local
```

## 開発サーバー起動

### 全体起動
```bash
pnpm run dev
```

### 個別起動
```bash
# サーバー
pnpm run dev:server

# クライアント
cd client && pnpm run dev

# 管理画面
cd inhouse && pnpm run dev
```

## ビルド確認

### 全体ビルド
```bash
pnpm run build
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

## 開発ツール

### TypeScript型チェック
```bash
pnpm run typecheck
```

### コード品質チェック
```bash
# ESLint
pnpm run lint

# Prettier
pnpm run format:check
```

### 修正適用
```bash
# ESLint修正
pnpm run lint:fix

# Prettier修正
pnpm run format
```

## エディタ設定

### VS Code推奨拡張機能
- TypeScript and JavaScript Language Features
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- React Router

### .vscode/settings.json
```json
{
  "typescript.preferences.includePackageJsonAutoImports": "on",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 関連ドキュメント

- [開発ワークフロー](./workflow.md)
- [コマンドリファレンス](./commands.md)
- [トラブルシューティング](./troubleshooting.md)