/**
 * デザインシステム - レイアウトシステム
 *
 * グリッド、コンテナ、スペーシングなどのレイアウト要素を管理
 */

import { cn } from "./components";

// コンテナコンポーネント作成関数
export const createContainer = (
  maxWidth: "sm" | "md" | "lg" | "xl" | "full" = "xl",
  className?: string
) => {
  const maxWidthClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return cn("mx-auto px-4", maxWidthClasses[maxWidth], className);
};

// セクションコンポーネント作成関数
export const createSection = (
  options: {
    background?: "primary" | "secondary" | "transparent" | "gradient";
    padding?: "none" | "sm" | "default" | "lg" | "xl";
    textColor?: "white" | "gray";
    className?: string;
  } = {}
) => {
  const {
    background = "primary",
    padding = "lg",
    textColor = "white",
    className,
  } = options;

  const backgroundClasses = {
    primary: "bg-[#1A0B13]",
    secondary: "bg-[#2C1220]",
    transparent: "bg-transparent",
    gradient: "bg-gradient-to-br from-[#1A0B13] to-[#2C1220]",
  };

  const paddingClasses = {
    none: "",
    sm: "py-8 px-4",
    default: "py-12 px-4",
    lg: "py-16 px-4",
    xl: "py-20 px-4",
  };

  const textColorClasses = {
    white: "text-white",
    gray: "text-gray-300",
  };

  return cn(
    "w-full",
    backgroundClasses[background],
    paddingClasses[padding],
    textColorClasses[textColor],
    className
  );
};

// グリッドコンポーネント作成関数
export const createGrid = (
  options: {
    cols?: 1 | 2 | 3 | 4 | "auto";
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
    auto: "grid-cols-[repeat(auto-fit,minmax(300px,1fr))]",
  };

  const gapClasses = {
    sm: "gap-4",
    default: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  };

  return cn("grid", colsClasses[cols], gapClasses[gap], className);
};

// フレックスボックスユーティリティ
export const flexUtilities = {
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
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",

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
  wrapReverse: "flex-wrap-reverse",
} as const;

// レスポンシブブレークポイントユーティリティ
export const responsive = {
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

  // フレックス方向
  direction: {
    smCol: "flex-col sm:flex-row",
    mdCol: "flex-col md:flex-row",
    lgCol: "flex-col lg:flex-row",
  },

  // テキスト配置
  text: {
    centerMd: "text-center md:text-left",
    centerLg: "text-center lg:text-left",
    leftMd: "text-left md:text-center",
  },
} as const;

// コンポーネント配置ユーティリティ
export const positioning = {
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
    dropdown: "z-20",
    sticky: "z-30",
    banner: "z-40",
    overlay: "z-50",
  },
} as const;

// スペーシングユーティリティ関数
export const spacingUtils = {
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
    section: "py-16 px-4",
    sectionSm: "py-8 px-4",
    sectionLg: "py-20 px-4",
    card: "p-6",
    cardSm: "p-4",
    cardLg: "p-8",
  },
} as const;

// レイアウトコンポーネントのプリセット
export const layoutPresets = {
  // ヒーローセクション
  hero: cn(
    createSection({ background: "transparent", padding: "none" }),
    "relative min-h-[700px] flex items-center justify-center text-center"
  ),

  // 標準セクション
  section: createSection({ background: "primary", padding: "lg" }),

  // カードグリッド
  cardGrid: cn(createContainer("xl"), createGrid({ cols: 3, gap: "lg" })),

  // 2カラムレイアウト
  twoColumn: "grid grid-cols-1 md:grid-cols-2 gap-8",

  // センターコンテンツ
  centerContent: cn(createContainer("md"), "text-center"),

  // フォームレイアウト
  form: cn(createContainer("sm"), "space-y-6"),
} as const;
