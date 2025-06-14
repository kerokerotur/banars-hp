# CLAUDE.md

このファイルはClaude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

**重要**: 必ず日本語で回答してください。

## プロジェクト概要

バナーズ野球クラブの公式ホームページプロジェクトで、複数のアプリケーションから構成されるモノレポです：

- **client/**: 公開ホームページ (React Router v7 + Tailwind CSS)
- **inhouse/**: 内部管理画面 (React Router v7 + Tailwind CSS)
- **server/**: 共通バックエンドAPI (Cloudflare Workers + D1データベース)
- **common/**: 共有UIコンポーネントとユーティリティ (workspaceパッケージ)

## ディレクトリ構成

### 全体構造

```
homepage/
├── client/           # 公開サイト（React Router v7 + SSG）
├── inhouse/          # 内部管理画面（React Router v7）
├── common/           # 共有UIコンポーネント（@project/common）
├── server/           # バックエンドAPI（Cloudflare Workers + D1）
├── pnpm-workspace.yaml
└── package.json
```

### client/ - 公開ホームページ

```
client/
├── app/
│   ├── features/           # 機能別コンポーネント
│   │   ├── home/          # ホームページ（hero, about, news）
│   │   ├── players/       # 選手情報ページ
│   │   ├── game-results/  # 試合結果ページ
│   │   └── contact/       # お問い合わせフォーム
│   ├── layout/            # 共通レイアウト
│   │   ├── header.tsx     # ヘッダーナビゲーション
│   │   └── footer.tsx     # フッター
│   ├── ui/               # UIコンポーネント（Radix UI）
│   ├── hooks/            # カスタムフック（use-mobile, use-toast）
│   ├── lib/              # ユーティリティ関数
│   └── routes.ts         # ルート定義
├── routes/               # ページコンポーネント
│   ├── index.tsx         # トップページ（/）
│   ├── players/index.tsx # 選手一覧（/players）
│   ├── game-results/index.tsx # 試合結果（/game-results）
│   ├── contact/index.tsx # お問い合わせ（/contact）
│   └── layout.tsx        # 共通レイアウト
├── public/               # 静的ファイル（画像等）
├── react-router.config.ts # React Router設定（SSG有効）
└── vite.config.ts        # Vite設定
```

### inhouse/ - 内部管理画面

```
inhouse/
├── app/
│   ├── features/
│   │   ├── dashboard/     # ダッシュボード
│   │   ├── players/       # 選手管理
│   │   └── login-form.tsx # ログイン機能
│   ├── routes/
│   │   ├── layout/        # 管理画面レイアウト
│   │   │   ├── header.tsx # 管理画面ヘッダー
│   │   │   └── sidebar.tsx # サイドバーナビ
│   │   └── players/       # 選手管理ページ
│   └── ui/               # 最小限のUIコンポーネント
├── Dockerfile           # Docker設定
└── react-router.config.ts
```

### common/ - 共有コンポーネント

```
common/
├── ui/                   # 40+のUIコンポーネント
│   ├── button.tsx       # ボタンコンポーネント
│   ├── card.tsx         # カードコンポーネント
│   ├── form.tsx         # フォームコンポーネント
│   ├── input.tsx        # 入力フィールド
│   ├── table.tsx        # テーブルコンポーネント
│   └── ...              # その他Radix UIベースコンポーネント
└── lib/
    └── utils.ts          # cn()関数等のユーティリティ
```

### server/ - バックエンドAPI

```
server/
├── src/
│   ├── index.ts          # メインエントリポイント
│   ├── renderHtml.ts     # HTML生成関数
│   └── usecase/
│       └── get-player.ts # 選手データ取得ロジック
├── migrations/           # D1データベースマイグレーション
│   ├── 0001_player.sql  # 選手テーブル作成
│   └── 0002_dml_player.sql # 初期データ投入
└── wrangler.json         # Cloudflare Workers設定
```

### 重要な設定ファイル

- `pnpm-workspace.yaml`: モノレポ設定
- `client/react-router.config.ts`: SSG設定（`ssr: false`, `prerender: true`）
- `server/wrangler.json`: D1データベース設定
- 各パッケージの`tsconfig.json`: TypeScript設定

## データベース構造

### D1データベース（SQLite互換）

```sql
-- 選手テーブル
CREATE TABLE player (
    id INTEGER PRIMARY KEY NOT NULL,
    player_name TEXT NOT NULL,
    position TEXT NOT NULL,
    uniform_number INTEGER NOT NULL
);
```

### サンプルデータ

```sql
INSERT INTO player VALUES
(1, '田中太郎', '投手', 1),
(2, '佐藤花子', '捕手', 2),
(3, '山田次郎', '内野手', 3);
```

## APIエンドポイント

### server/ - Cloudflare Workers API

- `GET /` - ウェルカムページ（HTML）
- `GET /players` - 選手データ取得（JSON）

### レスポンス例

```json
// GET /players
[
  {
    "id": 1,
    "player_name": "田中太郎",
    "position": "投手",
    "uniform_number": 1
  }
]
```

## コマンド

### 開発用

- `pnpm install` - 依存関係のインストール (ルートディレクトリから実行)
- `pnpm dev` - 開発サーバーの起動 (client/, inhouse/, server/のいずれかから実行)
- `pnpm typecheck` - TypeScript型チェックの実行 (client/とinhouse/で利用可能)

### コード品質・フォーマット

- `pnpm format` - Prettierによる自動フォーマット (ルートから全体、または各パッケージから個別実行)
- `pnpm format:check` - フォーマットチェック (CIで使用)
- `pnpm lint` - ESLintによるコード修正
- `pnpm lint:check` - ESLintによるコードチェック (CIで使用)

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
- **重要**: `node_modules/`は必ずgitignoreに含め、コミットしない
- 依存関係の変更は`package.json`と`pnpm-lock.yaml`のみコミット
- **コミットメッセージ**: 日本語で記述する
- **すべてのメッセージ**: 日本語で統一する

## エディタ設定（VS Code）

### 自動フォーマット設定

- **保存時自動フォーマット**: `.vscode/settings.json`で設定済み
- **推奨拡張機能**: Prettier、ESLint、TypeScript拡張機能を`.vscode/extensions.json`で推奨
- **フォーマッタ**: Prettier（TypeScript/JavaScript/JSON）
- **リンタ**: ESLint（自動修正有効）

### 必須拡張機能

1. `esbenp.prettier-vscode` - Prettierフォーマッタ
2. `dbaeumer.vscode-eslint` - ESLintリンタ
3. `bradlc.vscode-tailwindcss` - TailwindCSS補完
4. `ms-vscode.vscode-typescript-next` - TypeScript言語サーバー

## AI開発支援用の理解ポイント

### Claude & GitHub Copilot向け

**プロジェクト特徴**:

1. **モノレポ構成**: pnpm workspaceによる4パッケージ管理
2. **React Router v7**: 最新版のReact Routerフレームワークモード使用
3. **共有コンポーネント**: `@project/common`で統一されたデザインシステム
4. **サーバーレス**: Cloudflare Workers + D1の現代的なスタック
5. **型安全性**: TypeScript全面採用、厳密な型チェック

**開発パターン**:

- **フィーチャー駆動**: `app/features/`での機能別組織化
- **コンポーネント再利用**: common/ui/での共通コンポーネント
- **環境分離**: `.env`/`.env.prod`での設定管理
- **マイグレーション**: SQLファイルでのDB管理

**技術スタック**:

- **フロントエンド**: React Router v7 + TailwindCSS v4 + Radix UI
- **バックエンド**: Cloudflare Workers + D1 (SQLite)
- **スタイリング**: TailwindCSS + Radix UI + class-variance-authority
- **フォーム**: React Hook Form + Zod
- **ビルド**: Vite + TypeScript

**コード規約**:

- ファイル命名: kebab-case（例: `game-results.tsx`）
- コンポーネント: PascalCase（例: `GameResults`）
- 機能別ディレクトリ構造の採用
- 共通UIコンポーネントはRadix UIベース

**よく使用するインポートパターン**:

```typescript
// 共有コンポーネント
import { Button } from "@project/common/ui/button";

// React Router
import { useLoaderData } from "react-router";

// ユーティリティ
import { cn } from "@project/common/lib/utils";
```

## モノレポ構成の技術詳細

### pnpm Workspaceの仕組み

このプロジェクトは **pnpm workspace** を使用したモノレポ構成です。以下の技術的特徴があります：

#### 1. ワークスペース設定

**pnpm-workspace.yaml**:

```yaml
packages:
  - client/*
  - common/*
  - inhouse/*
  - server/*
```

#### 2. パッケージ間の依存関係

- **client** → `@project/common` (workspace:\*)
- **inhouse** → `@project/common` (workspace:\*)
- **common** → 独立パッケージ（他のパッケージに依存されるライブラリ）

#### 3. 共有パッケージ（@project/common）の構成

**package.json設定**:

```json
{
  "name": "@project/common",
  "main": "./lib/index.js",
  "types": "./lib/index.d.ts",
  "exports": {
    ".": {
      "types": "./lib/index.d.ts",
      "default": "./lib/index.js"
    },
    "./ui/*": {
      "types": "./ui/*.tsx",
      "default": "./ui/*.tsx"
    },
    "./lib/*": {
      "types": "./lib/*.ts",
      "default": "./lib/*.ts"
    }
  }
}
```

**TypeScript設定（common/tsconfig.json）**:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "declaration": true,
    "declarationMap": true,
    "outDir": "./lib",
    "noEmit": false
  }
}
```

#### 4. インポート方法

**直接インポート**:

```typescript
// 特定のコンポーネントを直接インポート
import { Button } from "@project/common/ui/button";
import { Card } from "@project/common/ui/card";
import { cn } from "@project/common/lib/utils";
```

**バンドルインポート**:

```typescript
// index.tsからの一括インポート
import { Button, Card, cn } from "@project/common";
```

#### 5. 開発ワークフロー

**依存関係のインストール**:

```bash
# ルートから全パッケージの依存関係をインストール
pnpm install

# 特定のパッケージに依存関係を追加
cd client && pnpm add lodash
cd common && pnpm add -D typescript
```

**ビルドとタイプチェック**:

```bash
# commonパッケージのビルド
cd common && pnpm build

# 各アプリケーションのタイプチェック
cd client && pnpm typecheck
cd inhouse && pnpm typecheck
```

#### 6. モノレポの利点

1. **コード共有**: UIコンポーネントとユーティリティの統一
2. **型安全性**: TypeScriptによる型定義の共有
3. **依存関係管理**: pnpmによる効率的な依存関係管理
4. **開発効率**: 共通コンポーネントの一元管理
5. **保守性**: デザインシステムの統一

#### 7. 開発時の注意点

- **commonパッケージの変更**: 変更後は依存するパッケージで再ビルド必要
- **型定義**: commonパッケージの型変更は全体に影響
- **依存関係**: workspace:\*を使用して内部パッケージを参照
- **ビルド順序**: commonパッケージを先にビルドしてから他のパッケージ
- **Git管理**: node_modules/は必ずgitignoreし、絶対にコミットしない
- **依存関係の管理**: package.jsonとpnpm-lock.yamlのみをバージョン管理

#### 8. トラブルシューティング

**commonパッケージが見つからない場合**:

```bash
# ワークスペースの依存関係を再インストール
pnpm install

# 型定義を再生成
cd common && pnpm build
```

**TypeScriptエラーが発生する場合**:

```bash
# 型定義を再生成
cd common && pnpm build
cd client && pnpm typecheck
```
