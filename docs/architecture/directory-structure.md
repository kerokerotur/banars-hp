# ディレクトリ構成

## 全体構造

```
homepage/
├── client/           # 公開サイト（React Router v7 + SSG）
├── inhouse/          # 内部管理画面（React Router v7）
├── common/           # 共有UIコンポーネント（@project/common）
├── server/           # バックエンドAPI（Cloudflare Workers + D1）
├── docs/             # プロジェクトドキュメント
├── pnpm-workspace.yaml
└── package.json
```

## client/ - 公開ホームページ

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
│   ├── hooks/            # カスタムフック（use-mobile, use-toast）
│   ├── lib/              # ユーティリティ関数
│   └── design-system/    # クライアント固有デザインシステム
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

## inhouse/ - 内部管理画面

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
│   └── design-system/    # 管理画面固有デザインシステム
├── Dockerfile           # Docker設定
└── react-router.config.ts
```

## common/ - 共有コンポーネント

```
common/
├── ui/                   # 40+のUIコンポーネント
│   ├── button.tsx       # ボタンコンポーネント
│   ├── card.tsx         # カードコンポーネント
│   ├── form.tsx         # フォームコンポーネント
│   ├── input.tsx        # 入力フィールド
│   ├── table.tsx        # テーブルコンポーネント
│   └── ...              # その他Radix UIベースコンポーネント
├── lib/
│   └── utils.ts          # cn()関数等のユーティリティ
└── build/               # ビルド成果物（自動生成）
    ├── ui/              # UIコンポーネントのJS/型定義
    ├── lib/             # ユーティリティのJS/型定義
    └── index.js         # メインエントリポイント
```

## server/ - バックエンドAPI

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

## docs/ - プロジェクトドキュメント

```
docs/
├── architecture/         # アーキテクチャ関連
│   ├── overview.md      # プロジェクト概要
│   ├── directory-structure.md # ディレクトリ構成
│   ├── dependencies.md  # 依存関係管理
│   └── database.md      # データベース設計
├── development/          # 開発関連
│   ├── getting-started.md # 開発環境構築
│   ├── workflow.md      # 開発ワークフロー
│   ├── commands.md      # コマンドリファレンス
│   └── troubleshooting.md # トラブルシューティング
├── build/               # ビルド関連
│   ├── build-system.md  # ビルドシステム
│   ├── dependencies.md  # ビルド依存関係
│   └── verification.md  # ビルド確認手順
└── deployment/          # デプロイ関連
    ├── frontend.md      # フロントエンドデプロイ
    └── backend.md       # バックエンドデプロイ
```

## 重要な設定ファイル

- `pnpm-workspace.yaml`: モノレポ設定
- `turbo.json`: Turborepo設定（並列ビルド・キャッシュ）
- `client/react-router.config.ts`: SSG設定（`ssr: false`, `prerender: true`）
- `server/wrangler.json`: D1データベース設定
- 各パッケージの`tsconfig.json`: TypeScript設定

## 関連ドキュメント

- [プロジェクト概要](./overview.md)
- [依存関係管理](./dependencies.md)
- [開発環境構築](../development/getting-started.md)