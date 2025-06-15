# ビルド確認手順

## 必須確認項目

全ての変更完了時、**必ず**以下の手順でビルド確認を実行してください。

### 1. 基本確認コマンド

```bash
# 1. 型チェック (必須)
pnpm run typecheck

# 2. リント確認 (必須)  
pnpm run lint

# 3. 全体ビルド (必須)
pnpm run build
```

### 2. 個別ビルド確認

```bash
# 共通コンポーネント
cd common && pnpm run build

# クライアント確認
cd client && pnpm run build

# 管理画面確認  
cd inhouse && pnpm run build

# サーバー確認
cd server && pnpm run typecheck
```

## 詳細確認手順

### Phase 1: 依存関係確認

```bash
# pnpm workspace状態確認
pnpm list --depth=0

# 依存関係の整合性確認
pnpm install --frozen-lockfile=false
```

### Phase 2: 型安全性確認

```bash
# 全パッケージの型チェック
pnpm run typecheck

# 型エラーがある場合は修正必須
# エラー例:
# error TS2307: Cannot find module '@project/common/ui/button'
# → common配下をビルド: cd common && pnpm run build
```

### Phase 3: コード品質確認

```bash
# ESLintエラー確認
pnpm run lint:check

# 自動修正可能なエラーは修正
pnpm run lint

# Prettier確認・修正
pnpm run format:check
pnpm run format
```

### Phase 4: ビルド実行

```bash
# Turbo並列ビルド
pnpm turbo build

# 個別ビルド状態確認
ls -la common/build/      # TypeScript成果物
ls -la client/build/      # Reactアプリ成果物  
ls -la inhouse/build/     # 管理画面成果物
```

## 成果物確認

### common/build/ 確認
```bash
# 期待される構造
common/build/
├── ui/
│   ├── button.js
│   ├── button.d.ts
│   └── [その他コンポーネント]
├── lib/
│   ├── utils.js
│   └── utils.d.ts
└── index.js
```

### client/build/ 確認  
```bash
# React Router SSG成果物
client/build/client/
├── assets/
│   ├── [css files]
│   └── [js files]
├── index.html
└── [静的ページ]
```

### inhouse/build/ 確認
```bash
# 管理画面アプリ成果物
inhouse/build/inhouse/
├── assets/
├── index.html
└── [管理画面ファイル]
```

## エラーパターンと対処法

### 1. TypeScriptエラー
```
error TS2307: Cannot find module '@project/common/ui/button'
```

**対処法:**
```bash
cd common && pnpm run build
pnpm run typecheck
```

### 2. Viteビルドエラー
```
[vite]: Rollup failed to resolve import
```

**対処法:**
```bash
# 依存関係確認
pnpm install

# commonビルド確認
cd common && pnpm run build

# キャッシュクリア
rm -rf node_modules/.vite
```

### 3. TailwindCSSエラー
```
Unknown at rule @tailwind
```

**対処法:**
```bash
# TailwindCSS設定確認
cat client/tailwind.config.ts
cat inhouse/tailwind.config.ts

# PostCSS設定確認
cat client/postcss.config.js
```

## 自動化されたチェック

### pre-commit hooks
```bash
# Husky設定 (将来的に追加予定)
# - lint-staged
# - typecheck
# - build verification
```

### CI/CD Pipeline
```yaml
# GitHub Actions (想定)
name: Build Verification
on: [push, pull_request]
jobs:
  build:
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - run: pnpm install --frozen-lockfile
      - run: pnpm run typecheck
      - run: pnpm run lint:check
      - run: pnpm run build
```

## パフォーマンス指標

### ビルド時間目安
- **common**: ~10秒 (TypeScript compilation)
- **client**: ~30秒 (React Router + Vite)
- **inhouse**: ~30秒 (React Router + Vite)
- **全体**: ~45秒 (並列実行)

### 成果物サイズ目安
- **common/build/**: ~500KB
- **client/build/**: ~2MB (画像含む)
- **inhouse/build/**: ~1.5MB

## 継続的な改善

### 1. ビルド時間最適化
```bash
# Turboキャッシュ効率確認
pnpm turbo build --summarize

# 並列実行状況確認
pnpm turbo build --graph
```

### 2. バンドルサイズ最適化
```bash
# Viteバンドル分析
cd client && pnpm run build -- --report
cd inhouse && pnpm run build -- --report
```

### 3. 型チェック高速化
```bash
# TypeScript project references検討
# incremental compilation最適化
```

## 完了条件チェックリスト

- [ ] `pnpm run typecheck` → ✅ 型エラーなし
- [ ] `pnpm run lint` → ✅ リントエラーなし  
- [ ] `pnpm run build` → ✅ ビルド成功
- [ ] `common/build/` → ✅ 成果物生成確認
- [ ] `client/build/` → ✅ 成果物生成確認
- [ ] `inhouse/build/` → ✅ 成果物生成確認
- [ ] ローカル動作確認 → ✅ 正常動作
- [ ] CLAUDE.md更新 → ✅ 変更内容記録

## 関連ドキュメント

- [ビルドシステム](./build-system.md)
- [ビルド依存関係](./dependencies.md)
- [トラブルシューティング](../development/troubleshooting.md)