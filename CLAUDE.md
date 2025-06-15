# CLAUDE.md

このファイルはClaude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

**重要**: 必ず日本語で回答してください。

## 📚 プロジェクトドキュメント

**詳細なドキュメントは [docs/](./docs/) ディレクトリに移動しました。**

### 🔗 クイックリンク

- **[プロジェクト概要](./docs/architecture/overview.md)** - 技術スタック・アーキテクチャ
- **[開発環境構築](./docs/development/getting-started.md)** - セットアップ手順
- **[ビルド確認手順](./docs/build/verification.md)** - 完了条件チェック（必読）
- **[コマンドリファレンス](./docs/development/commands.md)** - 利用可能なコマンド一覧
- **[トラブルシューティング](./docs/development/troubleshooting.md)** - よくある問題と解決方法

### 📁 ドキュメント構成

- **[architecture/](./docs/architecture/)** - アーキテクチャ・依存関係・データベース設計
- **[development/](./docs/development/)** - 開発環境・ワークフロー・コマンド
- **[build/](./docs/build/)** - ビルドシステム・依存関係・確認手順
- **[deployment/](./docs/deployment/)** - フロントエンド・バックエンドデプロイ

## 🚀 基本情報

### プロジェクト概要
バナーズ野球クラブの公式ホームページプロジェクト（モノレポ構成）

- **client/**: 公開ホームページ (React Router v7 + SSG)
- **inhouse/**: 内部管理画面 (React Router v7)
- **server/**: バックエンドAPI (Cloudflare Workers + D1)
- **common/**: 共有UIコンポーネント (@project/common)

### 技術スタック
- **フロントエンド**: React Router v7 + TailwindCSS v4 + Radix UI
- **バックエンド**: Cloudflare Workers + D1 (SQLite)
- **ビルド**: Turborepo + pnpm workspace + Vite + TypeScript
- **スタイリング**: TailwindCSS + class-variance-authority

## ⚡ クイックコマンド

### 開発サーバー
```bash
pnpm dev              # 全体起動
pnpm dev:server       # サーバーのみ
pnpm dev:frontend     # フロントエンドのみ
```

### ビルド・確認（重要）
```bash
pnpm run typecheck    # 型チェック
pnpm run lint         # リント
pnpm run build        # 全体ビルド
```

### 個別ビルド確認
```bash
cd client && pnpm run build
cd inhouse && pnpm run build
cd common && pnpm run build
```

## 🔄 開発ワークフロー

### 完了条件チェックリスト
**すべての変更完了時に必ず実行:**

- [ ] `pnpm run typecheck` 成功
- [ ] `pnpm run lint` 成功  
- [ ] `pnpm run build` 成功
- [ ] client個別ビルド成功
- [ ] inhouse個別ビルド成功
- [ ] ローカル動作確認済み

### デザインシステム

#### client/ - 公開サイト用
```
client/app/design-system/
├── tokens.ts      # カラー・タイポグラフィ・スペーシング
├── components.ts  # CVAベースのコンポーネントバリアント
└── layout.ts      # レイアウト・グリッドシステム
```

#### inhouse/ - 管理画面用
```  
inhouse/app/design-system/
├── tokens.ts      # 管理画面向け最適化
├── components.ts  # 管理機能向けバリアント
└── layout.ts      # 管理画面レイアウト
```

#### common/ - 共有コンポーネント
```
common/ui/         # 40+のRadix UIベースコンポーネント
common/lib/        # cn()等のユーティリティ
```

## 🏗️ アーキテクチャ重要ポイント

### ビルド依存関係
```
common (先にビルド)
  ↓
client, inhouse (並列ビルド可能)
  ↓
server (独立)
```

### ソースファイル直接参照
- 開発時は `common/` のソースファイル(.tsx)を直接参照
- ホットリロード高速化・Commonの個別ビルド不要
- 本番ビルド時は依存関係を自動解決

### 完了条件確認
- **必須**: [ビルド確認手順](./docs/build/verification.md)に従って実行
- **重要**: clientとinhouseの両方のビルドが成功すること
- **推奨**: CLAUDE.mdの更新が必要かどうかを確認

## 🆘 困ったときは

1. **ビルドエラー** → [ビルド確認手順](./docs/build/verification.md)
2. **環境設定** → [開発環境構築](./docs/development/getting-started.md)
3. **TypeScriptエラー** → [トラブルシューティング](./docs/development/troubleshooting.md)
4. **コマンドがわからない** → [コマンドリファレンス](./docs/development/commands.md)

## 💡 開発時の注意事項

### 基本原則
- **言語**: 必ず日本語で回答・コミット
- **パッケージマネージャー**: pnpm使用
- **コミット前**: 必ず`pnpm run typecheck`と`pnpm run build`を実行
- **Git管理**: `node_modules/`は絶対にコミットしない

### ファイル命名規則
- **ファイル**: kebab-case (例: `game-results.tsx`)
- **コンポーネント**: PascalCase (例: `GameResults`)
- **機能ディレクトリ**: 機能別構造採用

### よく使用するインポート
```typescript
// 共有コンポーネント
import { Button } from "@project/common/ui/button";
import { cn } from "@project/common/lib/utils";

// React Router
import { useLoaderData } from "react-router";
```

## 📋 データベース構造

### D1データベース (SQLite)
```sql
-- 選手テーブル
CREATE TABLE player (
    id INTEGER PRIMARY KEY NOT NULL,
    player_name TEXT NOT NULL,
    position TEXT NOT NULL,  
    uniform_number INTEGER NOT NULL
);
```

### APIエンドポイント
- `GET /` - ウェルカムページ
- `GET /players` - 選手データ取得

## 🔧 設定ファイル重要項目

- `pnpm-workspace.yaml` - モノレポ設定
- `turbo.json` - Turborepoビルド設定
- `client/react-router.config.ts` - SSG設定
- `server/wrangler.json` - D1データベース設定

---

**📖 詳細な情報は [docs/](./docs/) ディレクトリの各ドキュメントを参照してください。**