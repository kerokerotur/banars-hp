/**
 * デザインシステム - エントリーポイント
 *
 * デザインシステム全体のエクスポート
 */

// デザイントークン
export * from "./tokens";

// コンポーネントバリアント
export * from "./components";

// レイアウトシステム
export * from "./layout";

// よく使用される組み合わせのプリセット
export const designSystem = {
  // ボタンプリセット
  buttons: {
    primary:
      "inline-flex items-center justify-center rounded-md font-medium transition-colors bg-pink-600 text-white hover:bg-pink-700 h-10 px-4 py-2",
    secondary:
      "inline-flex items-center justify-center rounded-md font-medium transition-colors border border-pink-600 text-pink-400 hover:bg-pink-600 hover:text-white h-10 px-4 py-2",
    large:
      "inline-flex items-center justify-center rounded-md font-medium transition-colors bg-pink-600 text-white hover:bg-pink-700 h-11 px-8 text-lg",
    link: "text-pink-400 hover:text-pink-300 underline-offset-4 hover:underline p-0 h-auto font-normal",
  },

  // カードプリセット
  cards: {
    default: "rounded-lg border bg-[#2C1220] border-[#3A1A2C] text-white p-6",
    news: "rounded-lg border bg-[#2C1220] border-[#3A1A2C] text-white overflow-hidden",
    form: "rounded-xl bg-[#23101A] border-[#3A1A2C] text-white p-8 shadow-2xl",
    player: "bg-[#2C1220] rounded-lg p-6 hover:bg-gray-750 transition-colors",
  },

  // セクションプリセット
  sections: {
    primary: "bg-[#1A0B13] text-white py-16 px-4",
    secondary: "bg-[#2C1220] text-white py-16 px-4",
    hero: "relative min-h-[700px] flex items-center justify-center text-center text-white",
  },

  // コンテナプリセット
  containers: {
    sm: "max-w-2xl mx-auto px-4",
    md: "max-w-4xl mx-auto px-4",
    lg: "max-w-6xl mx-auto px-4",
    xl: "max-w-7xl mx-auto px-4",
    center: "max-w-4xl mx-auto px-4 text-center",
  },

  // グリッドプリセット
  grids: {
    cards: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
    two: "grid md:grid-cols-2 gap-8",
    four: "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
    auto: "grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6",
  },

  // タイポグラフィプリセット
  typography: {
    hero: "text-5xl md:text-6xl font-bold mb-6",
    heading: "text-4xl font-bold mb-8",
    subheading: "text-2xl font-bold mb-6",
    cardTitle: "text-xl font-bold mb-3",
    body: "text-lg text-gray-300 leading-relaxed",
    caption: "text-sm text-gray-400",
    accent: "text-pink-400",
  },

  // ナビゲーションプリセット
  navigation: {
    header: "bg-[#1A0B13] text-white px-4 py-4",
    nav: "hidden md:flex items-center gap-8",
    link: "text-gray-300 hover:text-white transition-colors",
    mobile: "block px-3 py-2 text-gray-300 hover:text-white transition-colors",
  },

  // フォームプリセット
  forms: {
    container:
      "space-y-6 rounded-xl max-w-2xl mx-auto bg-[#23101A] p-8 shadow-2xl",
    input:
      "flex w-full rounded-md border border-gray-600 bg-[#2C1220] text-white px-3 py-2 text-sm transition-colors focus:border-pink-400",
    textarea:
      "flex w-full rounded-md border border-gray-600 bg-[#2C1220] text-white px-3 py-2 text-sm transition-colors focus:border-pink-400 min-h-[80px]",
    label: "text-sm font-medium text-gray-200 mb-2 block",
    error: "text-red-400 text-sm mt-1",
  },

  // アバタープリセット
  avatars: {
    sm: "w-8 h-8 rounded-full object-cover",
    md: "w-16 h-16 rounded-full object-cover",
    lg: "w-20 h-20 rounded-full object-cover border-2 border-pink-500",
  },

  // バッジプリセット
  badges: {
    default:
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-600 text-white",
    accent:
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-pink-600 text-white",
    outline:
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-gray-600 text-gray-300",
  },
} as const;
