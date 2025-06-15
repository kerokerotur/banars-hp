# 依存関係管理

## パッケージ構成

### client/ - 公開ホームページ
- **フレームワーク**: React Router v7
- **スタイリング**: TailwindCSS v4, Radix UI
- **ビルド**: Vite + TypeScript
- **共通コンポーネント**: `@project/common`

### inhouse/ - 内部管理画面
- **フレームワーク**: React Router v7
- **スタイリング**: TailwindCSS v4, Radix UI
- **ビルド**: Vite + TypeScript
- **共通コンポーネント**: `@project/common`

### server/ - バックエンドAPI
- **プラットフォーム**: Cloudflare Workers
- **データベース**: D1 (SQLite)
- **設定**: wrangler.json

### common/ - 共有コンポーネント
- **UIライブラリ**: Radix UI
- **スタイリング**: class-variance-authority, clsx, tailwind-merge
- **フォーム**: React Hook Form
- **アイコン**: Lucide React
- **テーマ**: next-themes

## 依存関係の流れ

```
server/     → 独立（Cloudflare Workers環境）
client/     → @project/common （開発時はソースファイル直接参照）
inhouse/    → @project/common （開発時はソースファイル直接参照）
common/     → 各種UIライブラリ（Radix UI等）
```

## 重要な依存関係

### @project/common の参照方法
- **開発時**: TypeScriptソースファイル直接参照（`.tsx`, `.ts`）
- **本番時**: ビルド成果物参照（`build/` ディレクトリ）

### TypeScript設定
- 全パッケージでstrict mode有効
- `common/`は`build/`ディレクトリに出力
- `client/`, `inhouse/`は`.react-router/`に出力

### スタイリング依存関係
- TailwindCSS v4の新機能を活用
- Radix UIのプリミティブコンポーネント
- CVA（Class Variance Authority）でバリアント管理

## 関連ドキュメント

- [プロジェクト概要](./overview.md)
- [ビルドシステム](../build/build-system.md)
- [開発環境構築](../development/getting-started.md)