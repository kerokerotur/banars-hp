/**
 * デザインシステム - デザイントークン
 *
 * アプリケーション全体で使用される色、タイポグラフィ、スペーシングなどの
 * デザイン要素を統一管理するためのトークン定義
 */

// 色パレット
export const colors = {
  // ベース色
  primary: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6", // メインのピンク色
    500: "#ec4899",
    600: "#db2777", // ホバー時のピンク色
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
  },

  // 背景色（ダークテーマ）
  background: {
    primary: "#1A0B13", // メイン背景色
    secondary: "#2C1220", // カード背景色
    tertiary: "#23101A", // フォーム背景色
    accent: "#3A1A2C", // アクセント背景色
  },

  // テキスト色
  text: {
    primary: "#FFFFFF", // メインテキスト
    secondary: "#D1D5DB", // セカンダリテキスト (gray-300)
    tertiary: "#9CA3AF", // 補足テキスト (gray-400)
    accent: "#f472b6", // アクセントテキスト (pink-400)
    muted: "#6B7280", // ミュートテキスト (gray-500)
  },

  // ボーダー色
  border: {
    default: "#3A1A2C", // デフォルトボーダー
    accent: "#ec4899", // アクセントボーダー (pink-500)
    muted: "#4B5563", // ミュートボーダー (gray-600)
  },

  // ステート色
  state: {
    success: "#10B981", // 成功 (green-500)
    error: "#EF4444", // エラー (red-500)
    warning: "#F59E0B", // 警告 (yellow-500)
    info: "#3B82F6", // 情報 (blue-500)
  },
} as const;

// タイポグラフィ
export const typography = {
  // フォントファミリー
  fontFamily: {
    sans: ["Inter", "system-ui", "sans-serif"],
    mono: ["Fira Code", "monospace"],
  },

  // フォントサイズ
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
  },

  // フォントウェイト
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  // 行間
  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
  },

  // レスポンシブタイポグラフィ
  responsive: {
    // ヒーローセクション見出し
    hero: {
      base: "text-5xl font-bold",
      md: "md:text-6xl",
    },
    // セクション見出し
    heading: {
      base: "text-4xl font-bold",
    },
    // カード見出し
    cardTitle: {
      base: "text-xl font-bold",
    },
    // 本文
    body: {
      base: "text-lg leading-relaxed",
    },
    // キャプション
    caption: {
      base: "text-sm leading-normal",
    },
  },
} as const;

// スペーシング
export const spacing = {
  // 基本スペーシング
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px

  // セクションスペーシング
  section: {
    sm: "py-8 px-4",
    md: "py-12 px-4",
    lg: "py-16 px-4",
    xl: "py-20 px-4",
  },

  // コンテナスペーシング
  container: {
    padding: "px-4",
    maxWidth: {
      sm: "max-w-2xl",
      md: "max-w-4xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
    },
  },

  // カードスペーシング
  card: {
    padding: "p-6",
    gap: "gap-4",
  },
} as const;

// ボーダー半径
export const borderRadius = {
  none: "0",
  sm: "0.125rem", // 2px
  base: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px",
} as const;

// シャドウ
export const shadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
} as const;

// ブレークポイント
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// トランジション
export const transitions = {
  fast: "150ms ease-in-out",
  base: "250ms ease-in-out",
  slow: "500ms ease-in-out",

  // プロパティ別
  colors:
    "color 150ms ease-in-out, background-color 150ms ease-in-out, border-color 150ms ease-in-out",
  transform: "transform 150ms ease-in-out",
  opacity: "opacity 150ms ease-in-out",
  all: "all 150ms ease-in-out",
} as const;

// Z-index値
export const zIndex = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;
