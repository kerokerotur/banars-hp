# Inhouse Design System

内部管理システム専用のデザインシステムです。

## 概要

このデザインシステムは、Banars Baseball Club の内部管理システム（inhouse）用に特別に設計されています。ダッシュボード、管理画面、フォームなどの内部ツールに最適化されたダークテーマベースのデザインシステムです。

## 特徴

- **ダークテーマ専用**: 管理画面に適した暗い背景色
- **ピンクアクセント**: ブランドカラーを活用したアクセント
- **ダッシュボード最適化**: 統計表示、テーブル、フォームに特化
- **レスポンシブ対応**: モバイル・デスクトップ両対応
- **TypeScript完全対応**: 型安全な開発環境

## ファイル構成

```
app/design-system/
├── tokens.ts       # デザイントークン（色、タイポグラフィ、スペーシング等）
├── components.ts   # コンポーネントバリアント
├── layout.ts       # レイアウトシステム
├── index.ts        # エントリーポイント・プリセット
└── README.md       # このファイル
```

## 基本的な使用方法

### インポート

```tsx
import { dashboardSystem } from "~/design-system";
// または
import { 
  dashboardButtonVariants, 
  dashboardCardVariants,
  createDashboardGrid 
} from "~/design-system";
```

### ボタンの使用例

```tsx
import { Button } from "~/ui/button";
import { dashboardSystem } from "~/design-system";

// プリセットを使用
<Button className={dashboardSystem.buttons.primary}>
  保存
</Button>

// カスタムバリアント
<Button className={dashboardSystem.buttons.destructive}>
  削除
</Button>
```

### カードの使用例

```tsx
import { Card, CardContent } from "~/ui/card";
import { dashboardSystem } from "~/design-system";

<Card className={dashboardSystem.cards.stats}>
  <CardContent>
    <div className={dashboardSystem.typography.statValue}>25</div>
    <div className={dashboardSystem.typography.statLabel}>選手数</div>
  </CardContent>
</Card>
```

### レイアウトの使用例

```tsx
import { createDashboardGrid, dashboardSystem } from "~/design-system";

<div className={createDashboardGrid({ cols: 3, gap: "lg" })}>
  {/* 統計カード */}
</div>

// ページレイアウト
<div className={dashboardSystem.layouts.page}>
  <div className={dashboardSystem.layouts.main.content}>
    {/* メインコンテンツ */}
  </div>
</div>
```

## 色彩設計

### 背景色
- **Primary**: `#0F0A0D` - メイン背景
- **Secondary**: `#1A0F15` - サイドバー背景  
- **Tertiary**: `#2A1420` - カード背景
- **Quaternary**: `#14090F` - フォーム背景

### アクセント色
- **Primary**: `#ec4899` - メインピンク
- **Hover**: `#db2777` - ホバー時ピンク

### テキスト色
- **Primary**: `#FFFFFF` - メインテキスト
- **Secondary**: `#E5E7EB` - セカンダリテキスト
- **Tertiary**: `#D1D5DB` - 補足テキスト
- **Accent**: `#ec4899` - アクセントテキスト

## コンポーネント一覧

### ボタン
- `primary` - メインアクション用
- `secondary` - セカンダリアクション用
- `outline` - アウトライン型
- `ghost` - ゴースト型
- `destructive` - 削除・危険な操作用
- `success` - 成功アクション用

### カード
- `default` - 標準カード
- `stats` - 統計表示用カード
- `form` - フォーム用カード
- `sidebar` - サイドバー用カード
- `highlight` - ハイライト用カード

### インプット
- `default` - 標準入力フィールド
- `error` - エラー状態
- `success` - 成功状態
- `textarea` - テキストエリア

### バッジ
- `default`, `primary`, `success`, `warning`, `error`, `info`, `outline`

## レイアウトシステム

### グリッドシステム
```tsx
// 3カラムグリッド
createDashboardGrid({ cols: 3, gap: "lg" })

// 自動調整グリッド
createDashboardGrid({ cols: "auto", gap: "default" })
```

### コンテナシステム
```tsx
// レスポンシブコンテナ
createDashboardContainer("lg")

// フルワイドコンテナ
createDashboardContainer("full")
```

### レイアウトプリセット
```tsx
// サイドバーレイアウト
dashboardSystem.layouts.sidebar.container

// ヘッダーレイアウト  
dashboardSystem.layouts.header.container

// メインコンテンツ
dashboardSystem.layouts.main.container
```

## タイポグラフィ

### 見出し
- `pageTitle` - ページタイトル用
- `sectionTitle` - セクション見出し用
- `cardTitle` - カード見出し用

### 本文・その他
- `body` - 本文テキスト
- `label` - ラベル用
- `description` - 説明文用
- `caption` - キャプション用

### 統計表示
- `statValue` - 統計値用
- `statLabel` - 統計ラベル用

## 実装例

### ダッシュボードページ

```tsx
import { dashboardSystem, createDashboardGrid } from "~/design-system";

export default function DashboardPage() {
  return (
    <div className={dashboardSystem.layouts.page}>
      {/* ヘッダー */}
      <div className={dashboardSystem.layouts.header.container}>
        <div className={dashboardSystem.layouts.header.content}>
          <h1 className={dashboardSystem.typography.pageTitle}>
            ダッシュボード
          </h1>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className={dashboardSystem.layouts.main.container}>
        <div className={dashboardSystem.layouts.main.content}>
          {/* 統計カードグリッド */}
          <div className={createDashboardGrid({ cols: 3, gap: "lg" })}>
            <div className={dashboardSystem.cards.stats}>
              <div className={dashboardSystem.typography.statValue}>25</div>
              <div className={dashboardSystem.typography.statLabel}>選手数</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### フォームページ

```tsx
import { dashboardSystem } from "~/design-system";

export default function PlayerForm() {
  return (
    <div className={dashboardSystem.layouts.form.container}>
      <div className={dashboardSystem.layouts.form.field}>
        <label className={dashboardSystem.labels.required}>
          選手名
        </label>
        <input className={dashboardSystem.inputs.default} />
      </div>
      
      <div className={dashboardSystem.layouts.form.actions}>
        <button className={dashboardSystem.buttons.secondary}>
          キャンセル
        </button>
        <button className={dashboardSystem.buttons.primary}>
          保存
        </button>
      </div>
    </div>
  );
}
```

## ベストプラクティス

1. **プリセットの活用**: 可能な限りプリセットを使用する
2. **一貫性の保持**: 同じ機能には同じコンポーネントバリアントを使用
3. **レスポンシブ対応**: モバイル・デスクトップ両方を考慮
4. **アクセシビリティ**: 適切なコントラスト比とフォーカス状態を維持
5. **型安全性**: TypeScriptの型を活用してエラーを防ぐ

## トラブルシューティング

### よくある問題

**Q: スタイルが適用されない**
A: Tailwind CSSが正しく設定されているか確認してください

**Q: TypeScriptエラーが発生する** 
A: 必要な依存関係（clsx, tailwind-merge, class-variance-authority）がインストールされているか確認してください

**Q: カスタムスタイルを追加したい**
A: `cn()` 関数を使用してカスタムクラスを追加できます

```tsx
<div className={cn(dashboardSystem.cards.default, "custom-class")}>
```

## 更新履歴

- **v1.0.0** - 初回リリース
  - 基本的なデザイントークン実装
  - ダッシュボード用コンポーネントバリアント
  - レイアウトシステム
  - プリセット集