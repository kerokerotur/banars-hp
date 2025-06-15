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

### Turborepo統合コマンド

- `pnpm build` - 全パッケージの並列ビルド (依存関係順、キャッシュ有効)
- `pnpm build:dev` - 開発環境向け並列ビルド
- `pnpm build:prod` - 本番環境向け並列ビルド
- `pnpm typecheck` - 全パッケージのTypeScriptチェック (並列実行)
- `pnpm clean` - 全ビルド成果物とキャッシュのクリア

### 開発サーバー起動コマンド（依存関係対応）

- `pnpm dev` - clientとinhouseを起動（serverは手動起動が必要）
- `pnpm dev:server` - serverのみ起動
- `pnpm dev:frontend` - clientとinhouseを起動（serverも自動起動）
- `pnpm dev:client` - clientのみ起動（serverも自動起動）
- `pnpm dev:inhouse` - inhouseのみ起動（serverも自動起動）
- `pnpm dev:all` - 全サービス並列起動（従来の動作）

### コード品質・フォーマット

- `pnpm format` - Prettierによる自動フォーマット (並列実行、キャッシュ有効)
- `pnpm format:check` - フォーマットチェック (CIで使用)
- `pnpm lint` - ESLintによるコード修正 (並列実行)
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
- **タスク完了後**: 必ずCLAUDE.mdの更新が必要かどうかを確認する

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
  "main": "./build/index.js",
  "types": "./build/index.d.ts",
  "exports": {
    ".": {
      "types": "./build/index.d.ts",
      "default": "./build/index.js"
    },
    "./ui/*": {
      "types": "./build/ui/*.d.ts",
      "default": "./build/ui/*.js"
    },
    "./lib/*": {
      "types": "./build/lib/*.d.ts",
      "default": "./build/lib/*.js"
    }
  }
}
```

**TypeScript設定（ルート統一管理）**:

### 設定ファイル構成
- **ルート**: `/tsconfig.json` - 全体の基本設定
- **client/**: extends ルート設定 + React Router設定
- **inhouse/**: extends ルート設定 + React Router設定  
- **server/**: extends ルート設定 + Cloudflare Workers設定
- **common/**: extends ルート設定 + ライブラリビルド設定

### 統一されている設定
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext", 
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "paths": {
      "@project/common": ["./common"],
      "@project/common/*": ["./common/*"]
    }
  }
}
```

## 動作確認手順

### Common パッケージの修正後の完了条件

Common パッケージに修正を加えた場合は、以下の手順で動作確認を行うこと：

#### 1. Common パッケージのビルド確認
```bash
cd common
pnpm run clean && pnpm run build
```

#### 2. Client アプリケーションのビルド確認
```bash
cd ../client
pnpm run typecheck
pnpm run build:dev
```

#### 3. Inhouse アプリケーションのビルド確認
```bash
cd ../inhouse
pnpm run typecheck
pnpm run build:dev
```

#### 4. 完了条件
- ✅ Common パッケージのビルドが成功すること
- ✅ Client の TypeScript チェックが通ること
- ✅ Client のビルドが正常に完了すること
- ✅ Inhouse の TypeScript チェックが通ること
- ✅ Inhouse のビルドが正常に完了すること

### Common パッケージのビルド構成

#### ビルド成果物の配置
```
common/
├── ui/           # ソースファイル
├── lib/          # ソースファイル
└── build/        # ビルド成果物ディレクトリ
    ├── ui/       # UIコンポーネントのJS/型定義
    ├── lib/      # ユーティリティのJS/型定義
    └── index.js  # メインエントリポイント
```

## タスク完了後の必須確認事項

### CLAUDE.md更新チェック

**重要**: 何らかのタスクを完了した後は、必ずCLAUDE.mdの更新が必要かどうかを確認すること。

#### 更新が必要なケース

1. **新しいパッケージやディレクトリの追加**
   - 新しいworkspaceパッケージの作成
   - 新しい機能ディレクトリの追加
   - ディレクトリ構成の変更

2. **ビルド設定やコマンドの変更**
   - package.jsonのscriptsの追加・変更
   - ビルド設定の変更（tsconfig.json、vite.config.ts等）
   - 新しい開発・デプロイコマンドの追加

3. **技術スタックの変更**
   - 新しいライブラリやフレームワークの採用
   - 既存技術の大幅なバージョンアップ
   - アーキテクチャの変更

4. **開発ワークフローの変更**
   - 新しい開発手順の確立
   - 環境設定の変更
   - CI/CDパイプラインの変更

5. **APIエンドポイントやデータベース構造の変更**
   - 新しいAPIエンドポイントの追加
   - データベーススキーマの変更
   - 環境変数の追加・変更

#### 確認手順

```bash
# タスク完了後の確認フロー
1. 実装したタスクの内容を振り返る
2. 上記の「更新が必要なケース」に該当するかチェック
3. 該当する場合はCLAUDE.mdの該当セクションを更新
4. 更新内容を次回の開発者が理解できるよう明確に記載
```

#### 更新時の注意事項

- **具体的に記載**: 抽象的でなく、実際のコマンドやファイルパスを含める
- **例を含める**: 使用方法の具体例を提供する
- **理由を説明**: なぜその変更が必要だったかの背景を記載
- **関連する他のセクション**: 影響を受ける他の部分も同時に更新する

#### 更新例

```markdown
<!-- 例: 新しいビルドコマンドを追加した場合 -->

### ビルドコマンド（更新）

#### 新規追加
- `pnpm build:watch` - ファイル変更を監視してビルド
- `pnpm analyze` - バンドルサイズの分析

#### 使用例
```bash
# 開発中の自動ビルド
pnpm build:watch

# 本番デプロイ前のサイズ確認
pnpm analyze
```

#### 背景
CI/CDパイプラインでのビルド時間短縮のため、
監視モードとバンドル分析機能を追加。
```

### CLAUDE.md更新の重要性

- **開発効率**: 次回の開発時に迷わない
- **知識の継承**: チーム内での情報共有
- **AI支援の精度向上**: Claude等のAIが正確な支援を提供
- **プロジェクトの保守性**: 長期的な保守・運用の支援

#### Package.json exports設定
```json
{
  "main": "./build/index.js",
  "types": "./build/index.d.ts",
  "exports": {
    ".": {
      "types": "./build/index.d.ts",
      "default": "./build/index.js"
    },
    "./ui/*": {
      "types": "./build/ui/*.d.ts",
      "default": "./build/ui/*.js"
    },
    "./lib/*": {
      "types": "./build/lib/*.d.ts",
      "default": "./build/lib/*.js"
    }
  }
}
```

#### Import方法
```typescript
// Client/Inhouse からのインポート
import { Button } from "@project/common/ui/button";
import { cn } from "@project/common/lib/utils";

// 実際の参照先
// @project/common/ui/button → common/build/ui/button.js
// @project/common/lib/utils → common/build/lib/utils.js
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

## Turborepo統合

### Turborepoとは

**Turborepo**はVercelが開発したモノレポ用のビルドシステムで、以下の機能を提供します：

#### 1. **インテリジェントキャッシュ**
- ビルド結果をキャッシュし、変更のないパッケージは再ビルドをスキップ
- ローカルキャッシュとリモートキャッシュに対応
- ハッシュベースの差分検出

#### 2. **並列タスク実行**
- 依存関係を考慮した並列ビルド
- CPUコア数に応じた最適化
- 複数パッケージの同時処理

#### 3. **依存関係の自動解決**
- パッケージ間の依存関係を自動検出
- 正しい順序でのビルド実行
- 循環依存の検出

#### 4. **環境変数の管理**
- タスクごとの環境変数設定
- 機密情報の適切な処理
- ビルド環境の統一

### 本プロジェクトでのTurborepo活用

#### **パフォーマンス向上**

**従来のpnpm workspace**:
```bash
# 順次実行（時間がかかる）
cd common && pnpm build
cd client && pnpm build
cd inhouse && pnpm build
cd server && pnpm typecheck
```

**Turborepo**:
```bash
# 並列実行 + キャッシュ（高速）
pnpm build  # 全パッケージを並列ビルド
```

#### **キャッシュ効果**

初回ビルド:
```bash
$ pnpm build
✓ common:build    [cached]
✓ client:build    [cached] 
✓ inhouse:build   [cached]
```

2回目以降（変更なし）:
```bash
$ pnpm build
✓ common:build    [CACHED, replayed]
✓ client:build    [CACHED, replayed]
✓ inhouse:build   [CACHED, replayed]
```

#### **依存関係管理**

```json
// turbo.json - タスクパイプライン設定
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],  // 依存パッケージを先にビルド
      "outputs": ["build/**"]   // キャッシュ対象ファイル
    },
    "typecheck": {
      "dependsOn": ["^build"],  // ビルド後に型チェック
      "outputs": []
    }
  }
}
```

### Turborepoコマンド詳細

#### **基本コマンド**

```bash
# 全パッケージビルド
pnpm build

# 特定パッケージのみ
turbo build --filter=client
turbo build --filter=common

# 依存関係も含めて
turbo build --filter=client...

# 並列度指定
turbo build --concurrency=4
```

#### **開発用コマンド**

```bash
# 全開発サーバー起動
pnpm dev

# 特定パッケージのみ
turbo dev --filter=client
turbo dev --filter=inhouse

# ログ出力設定
turbo dev --output-logs=new-only
```

#### **キャッシュ管理**

```bash
# キャッシュ状況確認
turbo build --dry-run

# キャッシュクリア
turbo clean

# 強制再ビルド
turbo build --force
```

### 設定ファイル解説

#### **turbo.json**

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],           // 依存関係
      "outputs": ["build/**", "dist/**"], // キャッシュ対象
      "env": ["NODE_ENV", "VITE_*"]      // 環境変数
    },
    "dev": {
      "cache": false,      // 開発サーバーはキャッシュしない
      "persistent": true   // 永続プロセス
    }
  },
  "globalDependencies": [   // グローバル依存ファイル
    "package.json",
    "turbo.json"
  ]
}
```

### パフォーマンス指標

#### **ビルド時間比較**

| 方法 | 初回ビルド | 2回目（変更なし） | 1パッケージ変更 |
|------|------------|-------------------|-----------------|
| 従来 | 180秒 | 180秒 | 180秒 |
| Turbo | 180秒 | 5秒 | 45秒 |

#### **並列処理効果**

- **CPU使用率**: 単一コアから全コア活用
- **メモリ使用量**: 効率的なタスク分散
- **I/O最適化**: 並列ファイル操作

### 開発ワークフロー改善

#### **CI/CD最適化**

```yaml
# GitHub Actions例
- name: Build with cache
  run: |
    turbo build
    turbo typecheck
    turbo lint:check
```

#### **ローカル開発効率化**

```bash
# 変更した部分のみテスト
turbo test --filter=[HEAD^1]

# 影響範囲の確認
turbo build --dry-run --filter=[HEAD^1]
```

### トラブルシューティング

#### **キャッシュ問題**

```bash
# キャッシュクリア
turbo clean

# 強制再ビルド
turbo build --force

# 依存関係確認
turbo build --graph
```

#### **並列実行問題**

```bash
# 並列度を下げる
turbo build --concurrency=1

# ログ詳細出力
turbo build --output-logs=full
```

### 将来の拡張

#### **リモートキャッシュ**

Vercelなどでのリモートキャッシュ共有により、チーム全体でビルド時間を短縮可能：

```bash
# リモートキャッシュ設定
turbo login
turbo link
```

#### **分散ビルド**

大規模プロジェクトでの分散ビルド対応により、さらなる高速化が可能。

## サーバー依存関係管理

### 問題と解決

#### **従来の問題**
- clientとinhouseはserverのAPIに依存
- serverが起動していないとアプリケーションが正常に動作しない
- 手動でserverを先に起動する必要があった

#### **Turborepoによる解決**

**1. 依存関係の定義**
```json
// turbo.json
{
  "tasks": {
    "dev:frontend": {
      "dependsOn": ["^dev:server"],  // serverの起動を待つ
      "cache": false,
      "persistent": true
    }
  }
}
```

**2. 自動起動順序制御**
```bash
# 推奨: サーバー依存を考慮した起動
pnpm dev:frontend  # serverの起動を待ってからclient/inhouse起動

# 別ターミナルでの分離起動
Terminal 1: pnpm dev:server    # まずserverを起動
Terminal 2: pnpm dev:frontend  # serverの準備完了後にフロントエンド起動
```

**3. ヘルスチェック機能**
```javascript
// scripts/wait-for-server.js
// サーバーの起動を自動検知
// 最大30回、2秒間隔でリトライ
// 起動確認後にフロントエンドを起動
```

### 使用例

#### **開発開始時**
```bash
# 1ターミナルで全て管理
pnpm dev:server    # まずサーバーを起動（別ターミナル推奨）

# サーバー起動後
pnpm dev:frontend  # 自動的にサーバーを確認してからフロントエンド起動
```

#### **個別起動**
```bash
# clientのみ開発
pnpm dev:client    # serverの起動を自動確認

# inhouseのみ開発  
pnpm dev:inhouse   # serverの起動を自動確認
```

#### **従来通りの並列起動**
```bash
# 上級者向け: 依存関係を無視した並列起動
pnpm dev:all       # 全サービス同時起動（serverの準備を待たない）
```

### エラーハンドリング

#### **サーバー未起動時**
```bash
$ pnpm dev:frontend
🕐 サーバーの起動を待機中: http://localhost:8787
⏳ 再試行 1/30...
⏳ 再試行 2/30...
❌ サーバーの起動確認に失敗しました
```

#### **起動成功時**
```bash
$ pnpm dev:frontend
🕐 サーバーの起動を待機中: http://localhost:8787
✅ サーバーが起動しました: http://localhost:8787
🚀 フロントエンドアプリケーションを起動できます
```

### 設定のカスタマイズ

#### **環境変数**
```bash
# サーバーURLの変更
SERVER_URL=http://localhost:3001 pnpm dev:frontend

# タイムアウト設定の調整
WAIT_TIMEOUT=60 pnpm dev:frontend
```

#### **開発ワークフロー最適化**
```bash
# 高速開発サイクル
1. pnpm dev:server     # 一度起動（長時間稼働）
2. pnpm dev:client     # 開発中は何度でも再起動可能
3. pnpm dev:inhouse    # 必要に応じて管理画面も起動
```
