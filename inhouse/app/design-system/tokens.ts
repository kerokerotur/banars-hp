/**
 * デザインシステム - デザイントークン（inhouse専用）
 *
 * 内部管理システム用のデザイン要素を統一管理するためのトークン定義
 */

// 色パレット（ダッシュボード向け）
export const colors = {
  // プライマリ色（ピンク基調）
  primary: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899", // メインピンク
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
  },

  // ダッシュボード専用背景色（より暗いテーマ）
  background: {
    primary: "#0F0A0D", // メイン背景色（より暗い）
    secondary: "#1A0F15", // サイドバー背景色
    tertiary: "#2A1420", // カード背景色
    quaternary: "#14090F", // フォーム背景色
    accent: "#3A1F2F", // アクセント背景色
  },

  // テキスト色
  text: {
    primary: "#FFFFFF", // メインテキスト
    secondary: "#E5E7EB", // セカンダリテキスト (gray-200)
    tertiary: "#D1D5DB", // 補足テキスト (gray-300)
    quaternary: "#9CA3AF", // ミュートテキスト (gray-400)
    accent: "#ec4899", // アクセントテキスト (pink-500)
    muted: "#6B7280", // 薄いテキスト (gray-500)
  },

  // ボーダー色
  border: {
    default: "#374151", // デフォルトボーダー (gray-700)
    accent: "#ec4899", // アクセントボーダー (pink-500)
    muted: "#4B5563", // ミュートボーダー (gray-600)
    input: "#6B7280", // インプットボーダー (gray-500)
  },

  // ステート色
  state: {
    success: "#10B981", // 成功 (green-500)
    error: "#EF4444", // エラー (red-500)
    warning: "#F59E0B", // 警告 (yellow-500)
    info: "#3B82F6", // 情報 (blue-500)
  },

  // ダッシュボード専用色
  dashboard: {
    sidebar: "#1A0F15",
    header: "#0F0A0D",
    card: "#2A1420",
    cardHover: "#342030",
    input: "#14090F",
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

  // ダッシュボード専用タイポグラフィ
  dashboard: {
    // ページタイトル
    pageTitle: {
      base: "text-3xl font-bold text-white",
    },
    // セクション見出し
    sectionTitle: {
      base: "text-xl font-semibold text-white",
    },
    // カード見出し
    cardTitle: {
      base: "text-lg font-medium text-white",
    },
    // ラベル
    label: {
      base: "text-sm font-medium text-white",
    },
    // 説明文
    description: {
      base: "text-sm text-gray-400",
    },
    // 統計値
    statValue: {
      base: "text-3xl font-bold text-white",
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

  // ダッシュボード専用スペーシング
  dashboard: {
    // サイドバー
    sidebar: {
      width: "16rem", // 256px
      padding: "p-4",
    },
    // ヘッダー
    header: {
      height: "4rem", // 64px
      padding: "px-6 py-4",
    },
    // メインコンテンツ
    main: {
      padding: "p-6",
      gap: "space-y-8",
    },
    // カード
    card: {
      padding: "p-6",
      gap: "space-y-4",
    },
    // フォーム
    form: {
      gap: "space-y-6",
      fieldGap: "space-y-2",
    },
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

  // カード専用シャドウ
  card: "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)",
} as const;

// トランジション
export const transitions = {
  fast: "150ms ease-in-out",
  base: "250ms ease-in-out",
  slow: "500ms ease-in-out",

  // プロパティ別
  colors: "color 150ms ease-in-out, background-color 150ms ease-in-out, border-color 150ms ease-in-out",
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
  sidebar: 1200,
  header: 1300,
  overlay: 1400,
  modal: 1500,
  popover: 1600,
  tooltip: 1700,
} as const;