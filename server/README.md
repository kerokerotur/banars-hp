# D1 Database Setup and Local Development

## Creating a Table in D1
To create a table in your D1 database, follow these steps:

1. **Run the migration command**:
   ```bash
   pnpm run seedLocalD1
   ```
   This command applies the migrations defined in the `migrations/` folder to your local D1 database.

2. **Verify the table creation**:
   You can use the `wrangler d1` commands to inspect your database. For example:
   ```bash
   wrangler d1 execute DB --local --command "SELECT * FROM comments;"
   ```
   This will execute the SQL command and display the contents of the `comments` table.

## Running Worker and D1 Locally
To run your Worker and D1 database locally:

1. **Start the local development server**:
   ```bash
   pnpm run dev
   ```
   This command starts the Wrangler development server, which simulates the Cloudflare Workers environment locally.

2. **Access your Worker**:
   Open your browser and navigate to the URL provided by the Wrangler development server (usually `http://localhost:8787`).

3. **Interact with the D1 database**:
   Use the `wrangler d1` commands to interact with your local database. For example:
   ```bash
   wrangler d1 execute DB --local --command "SELECT * FROM comments;"
   ```

## Additional Resources
- [Cloudflare D1 Documentation](https://developers.cloudflare.com/d1/)


## マイグレーションファイル追加方法

- server配下で、以下コマンドを実行してSQLファイルを生成
  - 実行すると、{オートインクリメント}_{ファイル接尾字}.sqlというファイルがmigrations配下に作成される。例）0001_player.sql
```
npx wrangler d1 migrations create banars-hp {ファイル接尾字}
```

- まだリモートに適用されていないマイグレーションファイルを確認できる
```
npx wrangler d1 migrations list banars-hp
```

- 適用されていないマイグレーションファイルを適用する
```
npx wrangler d1 migrations apply banars-hp
```

- マイグレーション履歴確認
```
npx wrangler d1 execute banars-hp --command "SELECT * FROM d1_migrations;"
```

- 開発環境で起動
```
npx wrangler dev
```

