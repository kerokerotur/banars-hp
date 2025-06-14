# Banars Homepage

このプロジェクトは、Banarsのホームページを構築するために作成されました。

## 概要

- **Stitch** を使用してホームページのデザインを生成しています。
- デザインを基にして **Vercel v0** を使用してReactコンポーネントを自動生成しています。
- Vercel v0ではデフォルトでNext.jsを使用する設定になっていますが、SSRは必要ないため、**React Router v7** を使用してMPA（Multi-Page Application）でSSG（Static Site Generation）を行うように根本的な実装を変更しています。
- パッケージマネージャーには **pnpm** を使用しています。

## 開発方法

### インストール

依存関係をインストールします:

```bash
pnpm install
```

### 開発サーバーの起動

開発サーバーを起動します:

```bash
pnpm dev
```

アプリケーションは `http://localhost:5173` で利用可能になります。

## ビルド

本番用ビルドを作成します:

```bash
pnpm build
```

## デプロイ

### Vercel
