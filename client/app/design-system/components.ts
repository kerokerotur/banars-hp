/**
 * デザインシステム - コンポーネントバリアント
 *
 * 共通コンポーネントのスタイルバリアントとコンポジション関数
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ユーティリティ関数
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// ボタンバリアント
export const buttonVariants = {
  // ベーススタイル
  base: "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",

  // サイズバリアント
  size: {
    sm: "h-9 px-3 text-sm",
    default: "h-10 px-4 py-2",
    lg: "h-11 px-8 text-lg",
    xl: "h-12 px-8 py-3 text-lg",
    icon: "h-10 w-10",
  },

  // カラーバリアント
  variant: {
    // プライマリボタン（ピンクベース）
    primary: "bg-pink-600 text-white hover:bg-pink-700 active:bg-pink-800",

    // セカンダリボタン（アウトライン）
    secondary:
      "border border-pink-600 text-pink-400 hover:bg-pink-600 hover:text-white",

    // ゴーストボタン
    ghost: "text-gray-300 hover:bg-gray-700 hover:text-white",

    // リンクボタン
    link: "text-pink-400 hover:text-pink-300 underline-offset-4 hover:underline p-0 h-auto font-normal",

    // 成功ボタン
    success: "bg-green-600 text-white hover:bg-green-700 active:bg-green-800",

    // 危険ボタン
    destructive: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",

    // ニュートラルボタン
    neutral:
      "border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white",
  },
} as const;

// カードバリアント
export const cardVariants = {
  // ベーススタイル
  base: "rounded-lg border shadow-sm",

  // カラーバリアント
  variant: {
    // デフォルト（ダークテーマ）
    default: "bg-[#2C1220] border-[#3A1A2C] text-white",

    // フォーム用
    form: "bg-[#23101A] border-[#3A1A2C] text-white shadow-2xl",

    // プレーヤーカード用
    player:
      "bg-[#2C1220] border-[#3A1A2C] text-white hover:bg-gray-750 transition-colors",

    // ニュースカード用
    news: "bg-[#2C1220] border-[#3A1A2C] text-white overflow-hidden",
  },

  // パディングバリアント
  padding: {
    none: "",
    sm: "p-4",
    default: "p-6",
    lg: "p-8",
  },
} as const;

// セクションバリアント
export const sectionVariants = {
  // ベーススタイル
  base: "w-full",

  // 背景バリアント
  background: {
    primary: "bg-[#1A0B13]",
    secondary: "bg-[#2C1220]",
    transparent: "bg-transparent",
    gradient: "bg-gradient-to-br from-[#1A0B13] to-[#2C1220]",
  },

  // パディングバリアント
  padding: {
    none: "",
    sm: "py-8 px-4",
    default: "py-12 px-4",
    lg: "py-16 px-4",
    xl: "py-20 px-4",
  },

  // テキストカラー
  textColor: {
    white: "text-white",
    gray: "text-gray-300",
  },
} as const;

// コンテナバリアント
export const containerVariants = {
  // ベーススタイル
  base: "mx-auto px-4",

  // 最大幅バリアント
  maxWidth: {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  },

  // テキスト配置
  textAlign: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  },
} as const;

// 見出しバリアント
export const headingVariants = {
  // ベーススタイル
  base: "font-bold tracking-tight",

  // サイズバリアント
  size: {
    xs: "text-lg",
    sm: "text-xl",
    default: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
    "2xl": "text-5xl md:text-6xl",
    hero: "text-5xl md:text-6xl",
  },

  // カラーバリアント
  color: {
    white: "text-white",
    gray: "text-gray-300",
    accent: "text-pink-400",
  },

  // マージン
  margin: {
    none: "",
    sm: "mb-4",
    default: "mb-6",
    lg: "mb-8",
    xl: "mb-12",
  },
} as const;

// テキストバリアント
export const textVariants = {
  // ベーススタイル
  base: "",

  // サイズバリアント
  size: {
    xs: "text-xs",
    sm: "text-sm",
    default: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
  },

  // カラーバリアント
  color: {
    primary: "text-white",
    secondary: "text-gray-300",
    tertiary: "text-gray-400",
    accent: "text-pink-400",
    muted: "text-gray-500",
  },

  // 行間
  leading: {
    tight: "leading-tight",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
  },

  // フォントウェイト
  weight: {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  },
} as const;

// インプットバリアント
export const inputVariants = {
  // ベーススタイル
  base: "flex w-full rounded-md border px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",

  // バリアント
  variant: {
    default: "border-gray-600 bg-[#2C1220] text-white focus:border-pink-400",
    error: "border-red-500 bg-[#2C1220] text-white focus:border-red-400",
  },

  // サイズ
  size: {
    sm: "h-9 px-3 text-sm",
    default: "h-10 px-3 py-2",
    lg: "h-11 px-4 py-3",
  },
} as const;

// グリッドバリアント
export const gridVariants = {
  // ベーススタイル
  base: "grid gap-6",

  // コラム数
  cols: {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    auto: "grid-cols-[repeat(auto-fit,minmax(300px,1fr))]",
  },

  // ギャップサイズ
  gap: {
    sm: "gap-4",
    default: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  },
} as const;

// ナビゲーションバリアント
export const navigationVariants = {
  // ベーススタイル
  base: "",

  // レイアウト
  layout: {
    horizontal: "flex items-center gap-8",
    vertical: "flex flex-col gap-4",
  },

  // アイテムスタイル
  item: {
    default: "text-gray-300 hover:text-white transition-colors",
    active: "text-white font-medium",
    mobile: "block px-3 py-2 text-gray-300 hover:text-white transition-colors",
  },
} as const;

// アバターバリアント
export const avatarVariants = {
  // ベーススタイル
  base: "inline-flex items-center justify-center overflow-hidden rounded-full",

  // サイズバリアント
  size: {
    sm: "w-8 h-8",
    default: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  },

  // ボーダー
  border: {
    none: "",
    default: "border-2 border-gray-600",
    accent: "border-2 border-pink-500",
  },
} as const;

// バッジバリアント
export const badgeVariants = {
  // ベーススタイル
  base: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",

  // カラーバリアント
  variant: {
    default: "bg-gray-600 text-white",
    primary: "bg-pink-600 text-white",
    secondary: "bg-gray-700 text-gray-200",
    success: "bg-green-600 text-white",
    warning: "bg-yellow-600 text-white",
    destructive: "bg-red-600 text-white",
    outline: "border border-gray-600 text-gray-300",
  },
} as const;
