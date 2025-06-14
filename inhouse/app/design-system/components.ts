/**
 * デザインシステム - コンポーネントバリアント（inhouse専用）
 *
 * 内部管理システム用コンポーネントのスタイルバリアントとコンポジション関数
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ユーティリティ関数
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ダッシュボードボタンバリアント
export const dashboardButtonVariants = {
  // ベーススタイル
  base: "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none",

  // サイズバリアント
  size: {
    sm: "h-8 px-3 text-sm",
    default: "h-9 px-4 py-2",
    lg: "h-10 px-6 text-lg",
    icon: "h-9 w-9",
  },

  // カラーバリアント（ダッシュボード専用）
  variant: {
    // プライマリ（ピンク）
    primary: "bg-pink-500 text-white hover:bg-pink-600 active:bg-pink-700",
    
    // セカンダリ（グレー）
    secondary: "bg-gray-700 text-white hover:bg-gray-600 active:bg-gray-800",
    
    // アウトライン
    outline: "border border-gray-600 text-white hover:bg-gray-700 hover:text-white",
    
    // ゴースト
    ghost: "text-gray-300 hover:bg-gray-700 hover:text-white",
    
    // 危険
    destructive: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
    
    // 成功
    success: "bg-green-600 text-white hover:bg-green-700 active:bg-green-800",
  },
} as const;

// ダッシュボードカードバリアント
export const dashboardCardVariants = {
  // ベーススタイル
  base: "rounded-lg border shadow-sm",

  // カラーバリアント
  variant: {
    // デフォルト
    default: "bg-[#2A1420] border-gray-700 text-white",
    
    // 統計カード
    stats: "bg-[#2A1420] border-pink-900/50 text-white",
    
    // フォームカード
    form: "bg-[#14090F] border-gray-600 text-white",
    
    // サイドバーカード
    sidebar: "bg-[#1A0F15] border-gray-700 text-white",
    
    // ハイライト
    highlight: "bg-gradient-to-br from-[#2A1420] to-[#3A1F2F] border-pink-800 text-white",
  },

  // パディングバリアント
  padding: {
    none: "",
    sm: "p-4",
    default: "p-6",
    lg: "p-8",
  },
} as const;

// ダッシュボードインプットバリアント
export const dashboardInputVariants = {
  // ベーススタイル
  base: "flex w-full rounded-md border px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 disabled:cursor-not-allowed disabled:opacity-50",

  // バリアント
  variant: {
    default: "border-gray-600 bg-[#14090F] text-white focus:border-pink-500",
    error: "border-red-500 bg-[#14090F] text-white focus:border-red-400",
    success: "border-green-500 bg-[#14090F] text-white focus:border-green-400",
  },

  // サイズ
  size: {
    sm: "h-8 px-3 text-sm",
    default: "h-9 px-3 py-2",
    lg: "h-10 px-4 py-3",
  },
} as const;

// ダッシュボードバッジバリアント
export const dashboardBadgeVariants = {
  // ベーススタイル
  base: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",

  // カラーバリアント
  variant: {
    default: "bg-gray-700 text-gray-200",
    primary: "bg-pink-600 text-white",
    success: "bg-green-600 text-white",
    warning: "bg-yellow-600 text-white",
    error: "bg-red-600 text-white",
    info: "bg-blue-600 text-white",
    outline: "border border-gray-600 text-gray-300",
  },

  // サイズバリアント
  size: {
    sm: "px-2 py-0.5 text-xs",
    default: "px-2.5 py-0.5 text-xs",
    lg: "px-3 py-1 text-sm",
  },
} as const;

// ダッシュボードナビゲーションバリアント
export const dashboardNavVariants = {
  // ベーススタイル
  base: "",

  // レイアウト
  layout: {
    sidebar: "flex flex-col space-y-2",
    header: "flex items-center space-x-6",
  },

  // アイテムスタイル
  item: {
    // サイドバーアイテム
    sidebar: {
      default: "flex items-center space-x-3 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors",
      active: "flex items-center space-x-3 px-3 py-2 rounded-md bg-pink-600 text-white",
    },
    // ヘッダーアイテム
    header: {
      default: "text-gray-300 hover:text-white transition-colors",
      active: "text-white font-medium",
    },
  },
} as const;

// テーブルバリアント
export const dashboardTableVariants = {
  // ベーススタイル
  base: "w-full",

  // ヘッダー
  header: {
    base: "bg-[#1A0F15] border-b border-gray-700",
    cell: "px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",
  },

  // ボディ
  body: {
    base: "bg-[#2A1420] divide-y divide-gray-700",
    row: {
      default: "hover:bg-[#3A1F2F] transition-colors",
      selected: "bg-pink-900/20",
    },
    cell: "px-6 py-4 whitespace-nowrap text-sm text-gray-300",
  },
} as const;

// アラートバリアント
export const dashboardAlertVariants = {
  // ベーススタイル
  base: "relative w-full rounded-lg border px-4 py-3",

  // バリアント
  variant: {
    default: "bg-[#2A1420] border-gray-700 text-gray-300",
    destructive: "bg-red-900/20 border-red-700 text-red-300",
    warning: "bg-yellow-900/20 border-yellow-700 text-yellow-300",
    success: "bg-green-900/20 border-green-700 text-green-300",
    info: "bg-blue-900/20 border-blue-700 text-blue-300",
  },
} as const;

// ツールチップバリアント
export const dashboardTooltipVariants = {
  // ベーススタイル
  base: "z-50 overflow-hidden rounded-md border bg-[#1A0F15] border-gray-700 px-3 py-1.5 text-xs text-white shadow-md animate-in fade-in-0 zoom-in-95",
} as const;

// モーダルバリアント
export const dashboardModalVariants = {
  // オーバーレイ
  overlay: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
  
  // コンテンツ
  content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-[#2A1420] border-gray-700 p-6 shadow-lg duration-200 rounded-lg",
  
  // ヘッダー
  header: "flex flex-col space-y-1.5 text-center sm:text-left",
  
  // タイトル
  title: "text-lg font-semibold text-white",
  
  // 説明
  description: "text-sm text-gray-400",
  
  // フッター
  footer: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
} as const;