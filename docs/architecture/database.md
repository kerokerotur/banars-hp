# データベース設計

## D1データベース (SQLite)

Cloudflare D1データベースを使用して選手情報等を管理しています。

## テーブル設計

### players テーブル
選手情報を格納するメインテーブル

```sql
CREATE TABLE IF NOT EXISTS players (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  position TEXT,
  number INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## マイグレーション

### ファイル構成
```
server/migrations/
├── 0001_player.sql      # 選手テーブル作成
└── 0002_dml_player.sql  # 初期データ投入
```

### マイグレーション実行
```bash
# ローカル環境
pnpm run mg-deploy-local

# 本番環境
pnpm run mg-deploy-remote
```

## データアクセス

### 選手データ取得
`server/src/usecase/get-player.ts`で実装

```typescript
export async function getPlayer(env: Env, id: string) {
  const stmt = env.DB.prepare('SELECT * FROM players WHERE id = ?');
  const result = await stmt.bind(id).first();
  return result;
}
```

## 環境設定

### wrangler.json設定
```json
{
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "banars-db",
      "database_id": "[データベースID]"
    }
  ]
}
```

### 環境変数
- `CLOUDFLARE_*`: Cloudflare認証情報
- `WRANGLER_*`: Wrangler設定

## 関連ドキュメント

- [プロジェクト概要](./overview.md)
- [バックエンドデプロイ](../deployment/backend.md)
- [トラブルシューティング](../development/troubleshooting.md)