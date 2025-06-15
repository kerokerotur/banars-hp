# バックエンドデプロイ

## 概要

バックエンドはCloudflare Workers + D1データベースを使用したサーバーレスアーキテクチャです。

## デプロイ環境

### 本番環境
- **プラットフォーム**: Cloudflare Workers
- **データベース**: D1 (SQLite)
- **設定ファイル**: `server/wrangler.json`

### 開発環境
- **ローカル開発**: Wrangler Dev Server
- **ローカルDB**: D1 Local Database

## デプロイ手順

### 1. 事前準備
```bash
cd server

# 依存関係インストール
pnpm install

# 型チェック
pnpm run typecheck

# 設定確認
cat wrangler.json
```

### 2. データベース設定

#### D1データベース作成
```bash
# 新規データベース作成
wrangler d1 create banars-db

# wrangler.jsonに設定追加
# database_id を設定
```

#### マイグレーション実行
```bash
# 本番環境マイグレーション
pnpm run mg-deploy-remote

# 確認
wrangler d1 query banars-db --command="SELECT * FROM players LIMIT 5;"
```

### 3. Workers デプロイ
```bash
# 本番デプロイ
pnpm run server-deploy

# または
wrangler deploy
```

## 設定ファイル

### wrangler.json
```json
{
  "name": "banars-api",
  "main": "src/index.ts",
  "compatibility_date": "2024-01-01",
  "node_compat": true,
  
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "banars-db",
      "database_id": "[YOUR_DATABASE_ID]"
    }
  ],
  
  "vars": {
    "ENVIRONMENT": "production"
  },
  
  "secrets": [
    "API_SECRET_KEY"
  ]
}
```

### 環境変数・シークレット
```bash
# シークレット設定
wrangler secret put API_SECRET_KEY

# 環境変数確認
wrangler secret list
```

## API エンドポイント

### 公開エンドポイント
- `GET /api/players` - 選手一覧取得
- `GET /api/players/:id` - 選手詳細取得
- `GET /api/game-results` - 試合結果取得

### 管理用エンドポイント
- `POST /api/players` - 選手追加
- `PUT /api/players/:id` - 選手更新
- `DELETE /api/players/:id` - 選手削除

## データベース管理

### マイグレーション管理
```bash
# 新しいマイグレーション作成
# server/migrations/XXXX_description.sql

# ローカル適用
pnpm run mg-deploy-local

# 本番適用
pnpm run mg-deploy-remote
```

### データベース操作
```bash
# データ確認
wrangler d1 query banars-db --command="SELECT * FROM players;"

# データ投入
wrangler d1 query banars-db --file=migrations/data.sql

# バックアップ
wrangler d1 export banars-db --output=backup.sql
```

## 監視・ログ

### Cloudflare Dashboard
- Workers Analytics
- Real-time Logs
- Error Tracking
- Performance Metrics

### ログ確認
```bash
# リアルタイムログ
wrangler tail

# 特定時間のログ
wrangler tail --since=1h
```

## パフォーマンス最適化

### レスポンス最適化
```typescript
// キャッシュ設定
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const response = await handleRequest(request, env);
    
    // キャッシュヘッダー設定
    response.headers.set('Cache-Control', 'public, max-age=3600');
    
    return response;
  }
};
```

### クエリ最適化
```typescript
// 効率的なクエリ
const stmt = env.DB.prepare(`
  SELECT id, name, position 
  FROM players 
  WHERE active = 1 
  ORDER BY number ASC
`);
```

## セキュリティ設定

### CORS設定
```typescript
// CORS ヘッダー
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://banars.jp',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};
```

### レート制限
```typescript
// レート制限実装
const rateLimiter = new RateLimiter(env.KV);
await rateLimiter.check(clientIP);
```

## デプロイ検証

### 動作確認
```bash
# API疎通確認
curl https://banars-api.workers.dev/api/players

# レスポンス時間確認
curl -w "@curl-format.txt" https://banars-api.workers.dev/api/players
```

### 負荷テスト
```bash
# 簡易負荷テスト
ab -n 100 -c 10 https://banars-api.workers.dev/api/players
```

## CI/CD Pipeline

### GitHub Actions
```yaml
# .github/workflows/deploy-server.yml
name: Deploy Server
on:
  push:
    branches: [main]
    paths: [server/**]

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
      
      - name: Run TypeScript check
        run: cd server && pnpm run typecheck
        
      - name: Deploy to Cloudflare Workers
        run: cd server && pnpm run server-deploy
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```

## トラブルシューティング

### デプロイエラー
```bash
# 詳細なエラー情報
wrangler deploy --verbose

# 設定確認
wrangler whoami
wrangler config list
```

### データベース接続エラー
```bash
# D1接続確認
wrangler d1 info banars-db

# バインディング確認
wrangler d1 query banars-db --command="SELECT 1;"
```

### パフォーマンス問題
```bash
# Workers Analytics確認
# Cloudflare Dashboard > Workers > Analytics

# ログ分析
wrangler tail --format=pretty
```

## ロールバック手順

### 緊急時の対応
```bash
# 前のバージョンに戻す
wrangler rollback

# または特定のバージョンにロールバック
wrangler rollback --version-id=[VERSION_ID]
```

## 関連ドキュメント

- [フロントエンドデプロイ](./frontend.md)
- [データベース設計](../architecture/database.md)
- [トラブルシューティング](../development/troubleshooting.md)