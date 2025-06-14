# デザインシステム

Banars Baseball Clubのclient配下で使用されるデザインシステムです。

## 概要

このデザインシステムは、アプリケーション全体で一貫したデザインを実現するために、以下の要素を統一管理します：

- **デザイントークン** - 色、タイポグラフィ、スペーシングなどの基本要素
- **コンポーネントバリアント** - 再利用可能なコンポーネントのスタイル定義
- **レイアウトシステム** - グリッド、コンテナ、配置などのレイアウト要素

## ファイル構成

```
client/app/design-system/
├── index.ts           # エントリーポイント
├── tokens.ts          # デザイントークン定義
├── components.ts      # コンポーネントバリアント
├── layout.ts          # レイアウトシステム
└── README.md          # このファイル
```

## 使用方法

### 基本的なインポート

```typescript
import { designSystem, createSection, createContainer } from '~/design-system';
```

### デザイントークンの使用

```typescript
import { colors, typography, spacing } from '~/design-system';

// 色の使用
const primaryColor = colors.primary[600]; // #db2777
const textColor = colors.text.primary;    // #FFFFFF

// タイポグラフィの使用
const heroHeading = typography.responsive.hero.base; // 'text-5xl font-bold'
```

### プリセットの使用

```tsx
// ボタン
<Button className={designSystem.buttons.primary}>
  Primary Button
</Button>

// カード
<Card className={designSystem.cards.default}>
  Card Content
</Card>

// セクション
<section className={designSystem.sections.primary}>
  Section Content
</section>
```

### レイアウト関数の使用

```tsx
// セクション作成
<section className={createSection({ background: 'primary', padding: 'lg' })}>
  <div className={createContainer('xl')}>
    <div className={createGrid({ cols: 3, gap: 'lg' })}>
      {/* コンテンツ */}
    </div>
  </div>
</section>
```

## デザイントークン

### 色パレット

#### プライマリ色（ピンク系）
- `colors.primary[400]` - #f472b6 (メインのピンク色)
- `colors.primary[600]` - #db2777 (ホバー時のピンク色)

#### 背景色（ダークテーマ）
- `colors.background.primary` - #1A0B13 (メイン背景色)
- `colors.background.secondary` - #2C1220 (カード背景色)
- `colors.background.tertiary` - #23101A (フォーム背景色)

#### テキスト色
- `colors.text.primary` - #FFFFFF (メインテキスト)
- `colors.text.secondary` - #D1D5DB (セカンダリテキスト)
- `colors.text.accent` - #f472b6 (アクセントテキスト)

### タイポグラフィ

#### レスポンシブ見出し
- `typography.responsive.hero` - ヒーローセクション用大見出し
- `typography.responsive.heading` - セクション見出し
- `typography.responsive.cardTitle` - カード見出し

#### フォントサイズ
- `typography.fontSize.xs` - 0.75rem (12px)
- `typography.fontSize.lg` - 1.125rem (18px)
- `typography.fontSize['4xl']` - 2.25rem (36px)

### スペーシング

#### セクションスペーシング
- `spacing.section.sm` - py-8 px-4
- `spacing.section.lg` - py-16 px-4
- `spacing.section.xl` - py-20 px-4

#### コンテナ最大幅
- `spacing.container.maxWidth.md` - max-w-4xl
- `spacing.container.maxWidth.xl` - max-w-7xl

## コンポーネントバリアント

### ボタンバリアント

```typescript
// プライマリボタン
buttonVariants.variant.primary // bg-pink-600 hover:bg-pink-700

// セカンダリボタン（アウトライン）
buttonVariants.variant.secondary // border-pink-600 text-pink-400

// リンクボタン
buttonVariants.variant.link // text-pink-400 hover:text-pink-300
```

### カードバリアント

```typescript
// デフォルトカード
cardVariants.variant.default // bg-[#2C1220] border-[#3A1A2C]

// ニュースカード
cardVariants.variant.news // overflow-hidden付き

// フォームカード
cardVariants.variant.form // shadow-2xl付き
```

### セクションバリアント

```typescript
// プライマリ背景
sectionVariants.background.primary // bg-[#1A0B13]

// グラデーション背景
sectionVariants.background.gradient // bg-gradient-to-br
```

## レイアウトシステム

### コンテナ作成

```typescript
// 基本的なコンテナ
createContainer('xl') // max-w-7xl mx-auto px-4

// 小さなコンテナ
createContainer('md') // max-w-4xl mx-auto px-4
```

### セクション作成

```typescript
// プライマリセクション
createSection({ background: 'primary', padding: 'lg' })

// カスタムセクション
createSection({ 
  background: 'gradient', 
  padding: 'xl', 
  textColor: 'white' 
})
```

### グリッド作成

```typescript
// 3カラムグリッド
createGrid({ cols: 3, gap: 'lg' })

// レスポンシブグリッド
createGrid({ cols: 4, gap: 'default' }) // 1->2->3->4カラム

// 自動調整グリッド
createGrid({ cols: 'auto', gap: 'sm' })
```

## プリセット

便利なプリセットが `designSystem` オブジェクトに定義されています：

### ボタンプリセット

```tsx
<Button className={designSystem.buttons.primary}>Primary</Button>
<Button className={designSystem.buttons.secondary}>Secondary</Button>
<Button className={designSystem.buttons.large}>Large Button</Button>
<Button className={designSystem.buttons.link}>Link Button</Button>
```

### レイアウトプリセット

```tsx
// カードグリッド
<div className={designSystem.grids.cards}>
  {/* 3カラムのカードグリッド */}
</div>

// 2カラムレイアウト
<div className={designSystem.grids.two}>
  {/* 2カラムレイアウト */}
</div>
```

### タイポグラフィプリセット

```tsx
<h1 className={designSystem.typography.hero}>Hero Title</h1>
<h2 className={designSystem.typography.heading}>Section Heading</h2>
<p className={designSystem.typography.body}>Body Text</p>
<span className={designSystem.typography.accent}>Accent Text</span>
```

## 実用例

### ニュースセクション

```tsx
function NewsSection() {
  return (
    <section className={createSection({ background: 'primary', padding: 'lg' })}>
      <div className={createContainer('xl')}>
        <h2 className={designSystem.typography.heading}>Latest News</h2>
        <div className={createGrid({ cols: 3, gap: 'lg' })}>
          {newsItems.map(item => (
            <Card key={item.id} className={designSystem.cards.news}>
              {/* カードコンテンツ */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### ヒーローセクション

```tsx
function HeroSection() {
  return (
    <section className={designSystem.sections.hero}>
      <div className={createContainer('md')}>
        <h1 className={designSystem.typography.hero}>
          Hero Title
        </h1>
        <Button className={designSystem.buttons.large}>
          Call to Action
        </Button>
      </div>
    </section>
  );
}
```

### フォーム

```tsx
function ContactForm() {
  return (
    <form className={designSystem.forms.container}>
      <input className={designSystem.forms.input} />
      <textarea className={designSystem.forms.textarea} />
      <Button className={designSystem.buttons.primary}>
        Submit
      </Button>
    </form>
  );
}
```

## カスタマイズ

デザインシステムは拡張可能に設計されています。新しいバリアントやトークンを追加する場合は、該当するファイルを編集してください：

- 新しい色を追加 → `tokens.ts` の `colors` オブジェクト
- 新しいコンポーネントバリアント → `components.ts`
- 新しいレイアウトパターン → `layout.ts`
- 新しいプリセット → `index.ts` の `designSystem` オブジェクト

## ベストプラクティス

1. **一貫性を保つ** - 直接Tailwindクラスではなくデザインシステムのトークンを使用
2. **プリセットを活用** - よく使用されるパターンはプリセットとして定義
3. **レスポンシブを考慮** - モバイルファーストでレスポンシブデザインを実装
4. **アクセシビリティ** - 適切なコントラスト比とフォーカス状態を確保
5. **パフォーマンス** - 不要なスタイルの重複を避ける

## トラブルシューティング

### よくある問題

1. **クラスが適用されない**
   - TailwindCSSの設定でデザインシステムのパスが含まれているか確認
   - TypeScriptのパスマッピングが正しく設定されているか確認

2. **スタイルが上書きされる**
   - `cn()` 関数を使用してクラスをマージ
   - より具体的なセレクタを使用

3. **レスポンシブが効かない**
   - ブレークポイントが正しく設定されているか確認
   - モバイルファーストの順序になっているか確認