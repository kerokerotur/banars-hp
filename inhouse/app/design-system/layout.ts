/**
 * デザインシステム - レイアウトシステム（inhouse専用）
 *
 * 内部管理システム用のレイアウト要素を管理
 */

import { cn } from "./components";

// ダッシュボードコンテナ作成関数
export const createDashboardContainer = (
  maxWidth: "sm" | "md" | "lg" | "xl" | "full" = "full",
  className?: string
) => {
  const maxWidthClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return cn("mx-auto px-6", maxWidthClasses[maxWidth], className);
};

// ダッシュボードセクション作成関数
export const createDashboardSection = (
  options: {
    background?: "primary" | "secondary" | "transparent";
    padding?: "none" | "sm" | "default" | "lg";
    className?: string;
  } = {}
) => {
  const {
    background = "transparent",
    padding = "default",
    className,
  } = options;

  const backgroundClasses = {
    primary: "bg-[#0F0A0D]",
    secondary: "bg-[#1A0F15]",
    transparent: "bg-transparent",
  };

  const paddingClasses = {
    none: "",
    sm: "py-4 px-6",
    default: "py-6 px-6",
    lg: "py-8 px-6",
  };

  return cn(
    "w-full",
    backgroundClasses[background],
    paddingClasses[padding],
    className
  );
};

// ダッシュボードグリッド作成関数
export const createDashboardGrid = (
  options: {
    cols?: 1 | 2 | 3 | 4 | 6 | "auto";
    gap?: "sm" | "default" | "lg" | "xl";
    className?: string;
  } = {}
) => {
  const { cols = 3, gap = "default", className } = options;

  const colsClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
    auto: "grid-cols-[repeat(auto-fit,minmax(280px,1fr))]",
  };

  const gapClasses = {
    sm: "gap-4",
    default: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  };

  return cn("grid", colsClasses[cols], gapClasses[gap], className);
};

// ダッシュボードレイアウト関数
export const dashboardLayout = {
  // メインレイアウト
  main: cn("min-h-screen bg-[#0F0A0D] text-white"),
  
  // サイドバーレイアウト
  sidebar: {
    container: cn("fixed inset-y-0 left-0 w-64 bg-[#1A0F15] border-r border-gray-700 z-30"),
    content: cn("flex flex-col h-full"),
    header: cn("flex items-center h-16 px-6 border-b border-gray-700"),
    nav: cn("flex-1 px-4 py-6 space-y-2"),
    footer: cn("px-6 py-4 border-t border-gray-700"),
  },
  
  // ヘッダーレイアウト
  header: {
    container: cn("lg:ml-64 bg-[#0F0A0D] border-b border-gray-700"),
    content: cn("flex items-center justify-between h-16 px-6"),
    title: cn("text-xl font-semibold text-white"),
    actions: cn("flex items-center space-x-4"),
  },
  
  // メインコンテンツレイアウト
  content: {
    container: cn("lg:ml-64 min-h-screen"),
    main: cn("p-6"),
    section: cn("space-y-8"),
  },
  
  // カードレイアウト
  card: {
    container: cn("bg-[#2A1420] border border-gray-700 rounded-lg shadow-sm"),
    header: cn("px-6 py-4 border-b border-gray-700"),
    content: cn("p-6"),
    footer: cn("px-6 py-4 border-t border-gray-700"),
  },
} as const;

// フレックスボックスユーティリティ（ダッシュボード専用）
export const dashboardFlex = {
  // 基本的なフレックスレイアウト
  row: "flex flex-row",
  col: "flex flex-col",
  rowReverse: "flex flex-row-reverse",
  colReverse: "flex flex-col-reverse",

  // 配置
  center: "items-center justify-center",
  centerX: "justify-center",
  centerY: "items-center",
  start: "items-start justify-start",
  end: "items-end justify-end",
  between: "justify-between items-center",
  around: "justify-around items-center",
  evenly: "justify-evenly items-center",

  // ギャップ
  gap: {
    none: "gap-0",
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  },

  // ラップ
  wrap: "flex-wrap",
  nowrap: "flex-nowrap",
} as const;

// レスポンシブユーティリティ（ダッシュボード専用）
export const dashboardResponsive = {
  // 表示/非表示
  show: {
    sm: "hidden sm:block",
    md: "hidden md:block",
    lg: "hidden lg:block",
    xl: "hidden xl:block",
  },
  hide: {
    sm: "sm:hidden",
    md: "md:hidden",
    lg: "lg:hidden",
    xl: "xl:hidden",
  },

  // サイドバー関連
  sidebar: {
    mobile: "lg:hidden",
    desktop: "hidden lg:block",
    overlay: "fixed inset-0 bg-black/50 z-20 lg:hidden",
  },
} as const;

// ポジショニングユーティリティ
export const dashboardPositioning = {
  // ポジション
  relative: "relative",
  absolute: "absolute",
  fixed: "fixed",
  sticky: "sticky",

  // 基本的な配置
  top: "top-0",
  right: "right-0",
  bottom: "bottom-0",
  left: "left-0",
  center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",

  // Z-index
  zIndex: {
    hide: "-z-10",
    auto: "z-auto",
    base: "z-0",
    docked: "z-10",
    sidebar: "z-30",
    header: "z-40",
    overlay: "z-50",
  },
} as const;

// スペーシングユーティリティ関数（ダッシュボード専用）
export const dashboardSpacing = {
  // マージン作成
  margin: (size: string) => `m-${size}`,
  marginX: (size: string) => `mx-${size}`,
  marginY: (size: string) => `my-${size}`,
  marginTop: (size: string) => `mt-${size}`,
  marginRight: (size: string) => `mr-${size}`,
  marginBottom: (size: string) => `mb-${size}`,
  marginLeft: (size: string) => `ml-${size}`,

  // パディング作成
  padding: (size: string) => `p-${size}`,
  paddingX: (size: string) => `px-${size}`,
  paddingY: (size: string) => `py-${size}`,
  paddingTop: (size: string) => `pt-${size}`,
  paddingRight: (size: string) => `pr-${size}`,
  paddingBottom: (size: string) => `pb-${size}`,
  paddingLeft: (size: string) => `pl-${size}`,

  // よく使用される組み合わせ
  common: {
    section: "py-8 px-6",
    sectionSm: "py-4 px-6",
    sectionLg: "py-12 px-6",
    card: "p-6",
    cardSm: "p-4",
    cardLg: "p-8",
    sidebar: "px-4 py-6",
    header: "px-6 py-4",
  },
} as const;

// ダッシュボードレイアウトプリセット
export const dashboardLayoutPresets = {
  // ページレイアウト
  page: cn(
    dashboardLayout.main,
    dashboardLayout.content.main,
    "space-y-8"
  ),

  // カードグリッド
  cardGrid: cn(
    createDashboardContainer("full"),
    createDashboardGrid({ cols: 3, gap: "lg" })
  ),

  // 統計カードグリッド
  statsGrid: cn(
    createDashboardGrid({ cols: 3, gap: "lg" }),
    "mb-8"
  ),

  // フォームレイアウト
  form: cn(
    createDashboardContainer("md"),
    "space-y-6"
  ),

  // テーブルレイアウト
  table: cn(
    "overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
  ),

  // モバイルレスポンシブ
  mobile: {
    // モバイル時のパディング調整
    padding: "px-4 py-6",
    // モバイル時のグリッド
    grid: "grid-cols-1 gap-4",
  },
} as const;