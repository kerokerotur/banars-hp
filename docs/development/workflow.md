# 開発ワークフロー

## 基本的な開発フロー

### 1. 機能開発
```bash
# 新機能ブランチ作成
git checkout -b feature/新機能名

# 開発サーバー起動
pnpm run dev

# コード変更・テスト
# ...

# 型チェック・リント実行
pnpm run typecheck
pnpm run lint

# ビルド確認（必須）
pnpm run build
```

### 2. コミット前チェック
```bash
# 全体の型チェック
pnpm run typecheck

# 全体のリント
pnpm run lint

# 全体のビルド確認
pnpm run build
```

### 3. コミット・プッシュ
```bash
git add .
git commit -m "feat: 新機能の説明"
git push origin feature/新機能名
```

## デザインシステム開発

### common/ パッケージの変更
```bash
# common配下で作業
cd common

# 新しいコンポーネント作成
# ui/new-component.tsx

# ビルド
pnpm run build

# client/inhouseで動作確認
cd ../client && pnpm run dev
cd ../inhouse && pnpm run dev
```

### クライアント固有デザインシステム
```bash
# client/app/design-system/ で作業
cd client/app/design-system

# tokens.ts, components.ts, layout.ts を編集
# ...

# 動作確認
cd ../../ && pnpm run dev
```

## コンポーネント開発パターン

### 1. common配下の共通コンポーネント
```typescript
// common/ui/button.tsx
import { cn } from "../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: { ... },
      size: { ... }
    }
  }
);

export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
```

### 2. アプリ固有のコンポーネント
```typescript
// client/app/features/home/hero-section.tsx
import { Button } from "@project/common/ui/button";
import { heroSection } from "../../design-system/components";

export function HeroSection() {
  return (
    <section className={heroSection()}>
      <Button variant="primary">
        お問い合わせ
      </Button>
    </section>
  );
}
```

## ファイル組織パターン

```
app/features/[機能名]/
├── index.tsx          # エクスポート
├── [機能名]-section.tsx  # メインコンポーネント
├── components/        # 子コンポーネント
└── hooks/            # カスタムフック
```

## 完了条件チェックリスト

全ての変更完了時に以下を確認：

- [ ] `pnpm run typecheck` が成功
- [ ] `pnpm run lint` が成功  
- [ ] `pnpm run build` が成功（client, inhouse両方）
- [ ] ローカルで動作確認済み
- [ ] CLAUDE.mdの更新が必要な場合は更新済み

## 関連ドキュメント

- [コマンドリファレンス](./commands.md)
- [ビルドシステム](../build/build-system.md)
- [トラブルシューティング](./troubleshooting.md)