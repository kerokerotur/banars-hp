# ビルドシステム

## 概要

このプロジェクトはTurborepo + pnpm workspaceによるモノレポ構成で、効率的な並列ビルド・キャッシュシステムを採用しています。

## ビルドツール構成

### Turborepo
- **並列ビルド**: 依存関係に基づいた最適な並列実行
- **キャッシュ**: ローカル・リモートキャッシュによる高速化
- **依存関係管理**: パッケージ間の依存関係を自動解決

### pnpm workspace
- **効率的な依存関係管理**: シンボリックリンクによるディスク節約
- **モノレポサポート**: workspace:プロトコルでローカル依存関係管理

## ビルドフロー

### 1. 依存関係解決
```
common (共通コンポーネント)
  ↓
client, inhouse (フロントエンド)
  ↓  
server (バックエンド - 独立)
```

### 2. ビルドステップ
```bash
# 1. common配下のTypeScriptコンパイル
cd common && tsc

# 2. client, inhouse の React Router + Vite ビルド
cd client && vite build
cd inhouse && vite build

# 3. server の Cloudflare Workers ビルド
cd server && wrangler deploy
```

## ビルド成果物

### common/ パッケージ
```
common/build/
├── ui/
│   ├── button.js
│   ├── button.d.ts
│   └── ...
├── lib/
│   ├── utils.js
│   └── utils.d.ts
└── index.js
```

### client/ アプリケーション
```
client/build/
└── client/
    ├── assets/
    ├── index.html
    └── ...
```

### inhouse/ アプリケーション
```
inhouse/build/
└── inhouse/
    ├── assets/
    ├── index.html
    └── ...
```

## 設定ファイル

### turbo.json
```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", "build/**", ".react-router/**"]
    }
  }
}
```

### common/tsconfig.json
```json
{
  "compilerOptions": {
    "outDir": "./build",
    "rootDir": "."
  },
  "exclude": ["build"]
}
```

## 開発時の参照方式

### ソースファイル直接参照
- 開発時は`common/`のTypeScriptソースファイル(`.tsx`, `.ts`)を直接参照
- ホットリロード・型チェックが高速動作
- `common`のビルドが不要

### 参照パス例
```typescript
// client/app/components/example.tsx
import { Button } from "@project/common/ui/button"; // .tsx を直接参照
```

### package.json exports設定
```json
{
  "exports": {
    "./ui/*": {
      "types": "./build/ui/*.d.ts",
      "default": "./src/ui/*.tsx"  // 開発時はソース直接
    }
  }
}
```

## パフォーマンス最適化

### キャッシュ戦略
- **Turboキャッシュ**: ビルド結果のローカルキャッシュ
- **Viteキャッシュ**: 依存関係の事前バンドル
- **TypeScriptキャッシュ**: インクリメンタルコンパイル

### 並列実行
```bash
# 最大並列数での実行
pnpm turbo build --parallel

# 依存関係を考慮した最適実行
pnpm run build
```

## ビルド確認手順

### 1. 完全ビルド
```bash
# 全パッケージビルド
pnpm run build

# 個別確認
cd common && pnpm run build
cd client && pnpm run build  
cd inhouse && pnpm run build
```

### 2. 成果物確認
```bash
# ビルド成果物の存在確認
ls common/build/
ls client/build/
ls inhouse/build/
```

### 3. 型チェック
```bash
# 全体の型チェック
pnpm run typecheck
```

## トラブルシューティング

### よくある問題
1. **common参照エラー**: `pnpm run build` で common を先にビルド
2. **キャッシュ問題**: `pnpm turbo clean` でキャッシュクリア
3. **依存関係エラー**: `pnpm install` で依存関係更新

### デバッグコマンド
```bash
# ビルド詳細ログ
pnpm turbo build --verbose

# 依存関係グラフ表示
pnpm turbo build --graph
```

## 関連ドキュメント

- [ビルド依存関係](./dependencies.md)
- [ビルド確認手順](./verification.md)
- [コマンドリファレンス](../development/commands.md)