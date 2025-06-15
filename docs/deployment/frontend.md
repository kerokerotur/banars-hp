# フロントエンドデプロイ

## デプロイメント構成

### client/ - 公開ホームページ
- **デプロイ先**: Cloudflare Pages / Vercel / Netlify (想定)
- **ビルド方式**: React Router v7 + SSG (Static Site Generation)
- **成果物**: 静的HTML + assets

### inhouse/ - 内部管理画面
- **デプロイ先**: 内部環境 / Docker コンテナ
- **ビルド方式**: React Router v7 + SPA
- **成果物**: SPA アプリケーション

## ビルド手順

### 1. client/ のビルド
```bash
cd client

# 本番ビルド
pnpm run build

# 成果物確認
ls -la build/client/
```

### 2. inhouse/ のビルド
```bash
cd inhouse

# 本番ビルド  
pnpm run build

# 成果物確認
ls -la build/inhouse/
```

## 静的サイト生成 (SSG)

### client/ の SSG 設定
```typescript
// client/react-router.config.ts
import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,        // クライアントサイドレンダリング
  prerender: true    // 静的サイト生成有効
} satisfies Config;
```

### 生成されるページ
- `/` - トップページ
- `/players` - 選手一覧
- `/game-results` - 試合結果
- `/contact` - お問い合わせ

## 環境変数

### client/ 環境変数
```bash
# .env.production
VITE_API_URL=https://api.banars.jp
VITE_SITE_URL=https://banars.jp
```

### inhouse/ 環境変数
```bash
# .env.production
VITE_API_URL=https://api.banars.jp
VITE_APP_ENV=production
```

## デプロイ設定例

### Cloudflare Pages
```yaml
# wrangler.toml (client/)
name = "banars-homepage"
compatibility_date = "2024-01-01"

[env.production]
vars = { VITE_API_URL = "https://api.banars.jp" }

[[pages_builds]]
command = "pnpm run build"
destination = "build/client"
```

### Vercel
```json
// vercel.json (client/)
{
  "buildCommand": "pnpm run build",
  "outputDirectory": "build/client",
  "framework": "vite",
  "env": {
    "VITE_API_URL": "https://api.banars.jp"
  }
}
```

### Docker (inhouse/)
```dockerfile
# inhouse/Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

EXPOSE 3000
CMD ["pnpm", "run", "start"]
```

## CI/CD Pipeline

### GitHub Actions例
```yaml
# .github/workflows/deploy-client.yml
name: Deploy Client
on:
  push:
    branches: [main]
    paths: [client/**]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: pnpm/action-setup@v4
        with:
          version: 10
          
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: pnpm
          
      - run: pnpm install --frozen-lockfile
      
      # ビルド前確認
      - run: pnpm run typecheck
      - run: pnpm run lint:check
      
      # ビルド実行
      - run: pnpm run build
      
      # デプロイ (Cloudflare Pages例)
      - uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: banars-homepage
          directory: client/build/client
```

## パフォーマンス最適化

### ビルド最適化
```typescript
// client/vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-button', '@radix-ui/react-dialog']
        }
      }
    }
  }
});
```

### 画像最適化
```bash
# 画像圧縮・最適化
cd client/public
# WebP変換、サイズ最適化等
```

## 動作確認

### ローカル確認
```bash
# client/ プレビュー
cd client && pnpm run preview

# inhouse/ プレビュー  
cd inhouse && pnpm run preview
```

### 本番前確認
```bash
# 本番ビルドでの動作確認
pnpm run build:prod
pnpm run start
```

## 監視・ログ

### パフォーマンス監視
- Core Web Vitals
- Bundle Size Analysis
- Loading Performance

### エラー監視  
- JavaScript Error Tracking
- Network Error Monitoring
- User Experience Metrics

## ロールバック手順

### 緊急時の対応
```bash
# 前バージョンへのロールバック
git revert [commit-hash]
git push origin main

# または前のデプロイに切り戻し
# (デプロイプラットフォーム依存)
```

## セキュリティ考慮事項

### client/ (公開サイト)
- 機密情報の含有確認
- XSS対策の確認
- CSP (Content Security Policy) 設定

### inhouse/ (管理画面)
- 認証・認可の実装
- ネットワークアクセス制限
- 機密データの適切な取り扱い

## 関連ドキュメント

- [バックエンドデプロイ](./backend.md)
- [ビルドシステム](../build/build-system.md)
- [環境設定](../development/getting-started.md)