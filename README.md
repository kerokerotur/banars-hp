# バナーズ野球クラブ ホームページ

## 概要

このリポジトリは、バナーズ野球クラブの公式ホームページを管理するためのものです。HPと、HPで公開するデータの作成用の管理画面を提供します。
HPと管理画面は共通のサーバーを使用します。

## ディレクトリ構成

- **client/**: HP
- **inhouse/**: 管理画面
- **server/**: HPと管理画面で共通で使用するサーバー

## アプリ起動手順

### HP

1. 必要な依存関係をインストールします：
   ```bash
   pnpm install
   ```
2. 開発サーバーを起動します：
   ```bash
   pnpm dev
   ```

### 管理画面

1. 必要な依存関係をインストールします：
   ```bash
   pnpm install
   ```
2. 開発サーバーを起動します：
   ```bash
   pnpm dev
   ```

## デプロイ手順

### HPのデプロイ

1. GitHubリポジトリの**Actions**タブに移動します。
2. **Deploy to Client Pages**という名前のワークフローを選択します。
3. **Run workflow**をクリックしてデプロイをトリガーします。
4. `https://banars-base.com/`で確認できます。

### 管理画面のデプロイ

1. GitHubリポジトリの**Actions**タブに移動します。
2. **Deploy to Inhouse Pages**という名前のワークフローを選択します。
3. **Run workflow**をクリックしてデプロイをトリガーします。
4. `https://inhouse.banars-base.com/`で確認できます。

## 注意事項

- すべてのコマンドはbashターミナルで実行してください。
- 必要なライブラリを追加する場合も、bashターミナルで`pnpm`を使用してください。
- 開発環境では、`pnpm dev`を使用してアプリケーションを起動してください。
