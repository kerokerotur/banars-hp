# CLAUDE.md

このファイルはClaude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

**重要**: 必ず日本語で回答してください。

## プロジェクト概要

バナーズ野球クラブの公式ホームページプロジェクトで、複数のアプリケーションから構成されるモノレポです：

- **client/**: 公開ホームページ (React Router v7 + Tailwind CSS)
- **inhouse/**: 内部管理画面 (React Router v7 + Tailwind CSS)  
- **server/**: 共通バックエンドAPI (Cloudflare Workers + D1データベース)
- **common/**: 共有UIコンポーネントとユーティリティ (workspaceパッケージ)

## コマンド

### 開発用
- `pnpm install` - 依存関係のインストール (ルートディレクトリから実行)
- `pnpm dev` - 開発サーバーの起動 (client/, inhouse/, server/のいずれかから実行)
- `pnpm typecheck` - TypeScript型チェックの実行 (client/とinhouse/で利用可能)

### ビルド・デプロイ用
- `pnpm build:dev` - 開発環境向けビルド (client/とinhouse/)
- `pnpm build:prod` - 本番環境向けビルド (client/とinhouse/)
- `pnpm start` - ビルド済みクライアントの起動 (client/とinhouse/)

### サーバー固有のコマンド
- `pnpm cf-typegen` - Cloudflare型定義の生成
- `pnpm check` - TypeScriptチェック + デプロイのドライラン
- `pnpm server-deploy` - Cloudflare Workersへのデプロイ
- `pnpm mg-create` - 新しいD1マイグレーションの作成
- `pnpm mg-deploy-local` - ローカルでのマイグレーション適用
- `pnpm mg-deploy-remote` - リモートでのマイグレーション適用

## アーキテクチャ

### フロントエンドアーキテクチャ
- clientとinhouseの両アプリは**React Router v7**をフレームワークモードで使用、SSRは無効(`ssr: false`)、プリレンダリングは有効
- **Tailwind CSS v4**でカスタム設定によるスタイリング
- アクセシブルなUIプリミティブには**Radix UI**コンポーネントを使用
- `@project/common`ワークスペースパッケージによる共有コンポーネント
- 厳密モード有効のTypeScript

### ルーティング構造
ルートは`app/routes.ts`でReact Router v7のルート設定を使用して定義：
- `routes/layout.tsx`でのレイアウトラッパー
- 機能ベースのルート組織化（例：`routes/game-results/`、`routes/contact/`）

### 共有コンポーネント
`common/`パッケージは、clientとinhouseの両アプリで`@project/common`としてインポート可能な共有UIコンポーネントとユーティリティを提供します。

### バックエンドアーキテクチャ
- サーバーレスAPIには**Cloudflare Workers**
- データ永続化には**D1データベース**（SQLite互換）
- データベースマイグレーションは`server/migrations/`に配置

### 環境設定
- 環境固有ビルドには`env-cmd`を使用
- 各フロントエンドアプリに個別の`.env`と`.env.prod`ファイル
- ビルドコマンドに環境選択を含む

## 開発ワークフロー

1. 適切なディレクトリ（client/, inhouse/, server/）からコマンドを実行
2. パッケージマネージャーは`pnpm`を使用（root package.jsonで設定済み）
3. 変更をコミットする前に`pnpm typecheck`を実行
4. データベース変更には`pnpm mg-create`でのマイグレーション作成と`mg-deploy-*`コマンドでのデプロイが必要

## デプロイ

フロントエンドアプリはGitHub Actionsでデプロイ：
- **Client**: "Deploy to Client Pages"ワークフロー → https://banars-base.com/
- **Inhouse**: "Deploy to Inhouse Pages"ワークフロー → https://inhouse.banars-base.com/

サーバーは`pnpm server-deploy`コマンドでCloudflare Workersにデプロイ。

## 開発時の注意事項

- すべてのコマンドはbashターミナルで実行
- ライブラリ追加時もbashターミナルで`pnpm`を使用
- 開発環境では`pnpm dev`でアプリケーションを起動