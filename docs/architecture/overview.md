# プロジェクト概要

バナーズ野球クラブの公式ホームページプロジェクトで、複数のアプリケーションから構成されるモノレポです。

## アプリケーション構成

- **client/**: 公開ホームページ (React Router v7 + Tailwind CSS)
- **inhouse/**: 内部管理画面 (React Router v7 + Tailwind CSS)
- **server/**: 共通バックエンドAPI (Cloudflare Workers + D1データベース)
- **common/**: 共有UIコンポーネントとユーティリティ (workspaceパッケージ)

## 技術スタック

### フロントエンド
- **フレームワーク**: React Router v7 + TailwindCSS v4 + Radix UI
- **バックエンド**: Cloudflare Workers + D1 (SQLite)
- **スタイリング**: TailwindCSS + Radix UI + class-variance-authority
- **フォーム**: React Hook Form + Zod
- **ビルド**: Vite + TypeScript

### 開発ツール
- **モノレポ管理**: pnpm workspace + Turborepo
- **型安全性**: TypeScript（厳密モード）
- **コード品質**: ESLint + Prettier
- **CI/CD**: GitHub Actions

## アーキテクチャの特徴

### 1. **モノレポ構成**
- pnpm workspaceによる4パッケージ管理
- 依存関係の統一管理
- 共有コンポーネントの効率的な管理

### 2. **共有コンポーネントシステム**
- `@project/common`で統一されたデザインシステム
- ソースファイル直接参照による高速開発
- TypeScriptによる型安全性

### 3. **サーバーレスアーキテクチャ**
- Cloudflare Workers + D1の現代的なスタック
- SQLiteベースのD1データベース
- エッジでの高速レスポンス

### 4. **開発効率重視**
- ホットリロード対応
- 並列ビルド・テスト
- インテリジェントキャッシュ

## 関連ドキュメント

- [ディレクトリ構成](./directory-structure.md)
- [依存関係管理](./dependencies.md)
- [データベース設計](./database.md)