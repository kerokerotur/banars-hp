/**
 * デザインシステム - エントリーポイント（inhouse専用）
 *
 * 内部管理システム用デザインシステム全体のエクスポート
 */

// デザイントークン
export * from "./tokens";

// コンポーネントバリアント
export * from "./components";

// レイアウトシステム
export * from "./layout";

// ダッシュボード専用プリセット
export const dashboardSystem = {
  // ボタンプリセット
  buttons: {
    primary: "inline-flex items-center justify-center rounded-md font-medium transition-all bg-pink-500 text-white hover:bg-pink-600 h-9 px-4 py-2",
    secondary: "inline-flex items-center justify-center rounded-md font-medium transition-all bg-gray-700 text-white hover:bg-gray-600 h-9 px-4 py-2",
    outline: "inline-flex items-center justify-center rounded-md font-medium transition-all border border-gray-600 text-white hover:bg-gray-700 h-9 px-4 py-2",
    ghost: "inline-flex items-center justify-center rounded-md font-medium transition-all text-gray-300 hover:bg-gray-700 hover:text-white h-9 px-4 py-2",
    destructive: "inline-flex items-center justify-center rounded-md font-medium transition-all bg-red-600 text-white hover:bg-red-700 h-9 px-4 py-2",
    success: "inline-flex items-center justify-center rounded-md font-medium transition-all bg-green-600 text-white hover:bg-green-700 h-9 px-4 py-2",
    large: "inline-flex items-center justify-center rounded-md font-medium transition-all bg-pink-500 text-white hover:bg-pink-600 h-10 px-6 text-lg",
    small: "inline-flex items-center justify-center rounded-md font-medium transition-all bg-pink-500 text-white hover:bg-pink-600 h-8 px-3 text-sm",
  },

  // カードプリセット
  cards: {
    default: "bg-[#2A1420] border border-gray-700 rounded-lg shadow-sm text-white p-6",
    stats: "bg-[#2A1420] border border-pink-900/50 rounded-lg shadow-sm text-white p-6",
    form: "bg-[#14090F] border border-gray-600 rounded-lg text-white p-6",
    sidebar: "bg-[#1A0F15] border border-gray-700 rounded-lg text-white p-4",
    highlight: "bg-gradient-to-br from-[#2A1420] to-[#3A1F2F] border border-pink-800 rounded-lg shadow-sm text-white p-6",
  },

  // インプットプリセット
  inputs: {
    default: "flex w-full rounded-md border border-gray-600 bg-[#14090F] text-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 disabled:cursor-not-allowed disabled:opacity-50",
    error: "flex w-full rounded-md border border-red-500 bg-[#14090F] text-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400",
    success: "flex w-full rounded-md border border-green-500 bg-[#14090F] text-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400",
    textarea: "flex w-full rounded-md border border-gray-600 bg-[#14090F] text-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 min-h-[120px] resize-none",
  },

  // ラベルプリセット
  labels: {
    default: "text-sm font-medium text-white",
    required: "text-sm font-medium text-white after:content-['*'] after:ml-0.5 after:text-red-500",
    optional: "text-sm font-medium text-gray-400",
  },

  // バッジプリセット
  badges: {
    default: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-700 text-gray-200",
    primary: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-pink-600 text-white",
    success: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-600 text-white",
    warning: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-yellow-600 text-white",
    error: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-red-600 text-white",
    info: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-blue-600 text-white",
    outline: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-gray-600 text-gray-300",
  },

  // タイポグラフィプリセット
  typography: {
    pageTitle: "text-3xl font-bold text-white",
    sectionTitle: "text-xl font-semibold text-white mb-4",
    cardTitle: "text-lg font-medium text-white mb-2",
    label: "text-sm font-medium text-white",
    description: "text-sm text-gray-400",
    statValue: "text-3xl font-bold text-white",
    statLabel: "text-sm font-medium text-gray-400",
    body: "text-sm text-gray-300 leading-relaxed",
    caption: "text-xs text-gray-500",
    link: "text-pink-400 hover:text-pink-300 underline-offset-4 hover:underline",
  },

  // レイアウトプリセット
  layouts: {
    // ページ全体
    page: "min-h-screen bg-[#0F0A0D] text-white",
    
    // サイドバー
    sidebar: {
      container: "fixed inset-y-0 left-0 w-64 bg-[#1A0F15] border-r border-gray-700 z-30",
      content: "flex flex-col h-full",
      header: "flex items-center h-16 px-6 border-b border-gray-700",
      nav: "flex-1 px-4 py-6 space-y-2",
      footer: "px-6 py-4 border-t border-gray-700",
    },
    
    // ヘッダー
    header: {
      container: "lg:ml-64 bg-[#0F0A0D] border-b border-gray-700",
      content: "flex items-center justify-between h-16 px-6",
    },
    
    // メインコンテンツ
    main: {
      container: "lg:ml-64 min-h-screen",
      content: "p-6",
      section: "space-y-8",
    },
    
    // カードグリッド
    grid: {
      stats: "grid grid-cols-1 md:grid-cols-3 gap-6",
      cards: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
      table: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",
    },
    
    // フォーム
    form: {
      container: "max-w-2xl mx-auto space-y-6",
      field: "space-y-2",
      actions: "flex space-x-4 pt-4",
    },
  },

  // ナビゲーションプリセット
  navigation: {
    sidebar: {
      item: {
        default: "flex items-center space-x-3 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors",
        active: "flex items-center space-x-3 px-3 py-2 rounded-md bg-pink-600 text-white",
      },
    },
    header: {
      item: {
        default: "text-gray-300 hover:text-white transition-colors",
        active: "text-white font-medium",
      },
    },
  },

  // テーブルプリセット
  table: {
    container: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",
    table: "w-full",
    header: {
      row: "bg-[#1A0F15] border-b border-gray-700",
      cell: "px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",
    },
    body: {
      container: "bg-[#2A1420] divide-y divide-gray-700",
      row: {
        default: "hover:bg-[#3A1F2F] transition-colors",
        selected: "bg-pink-900/20",
      },
      cell: "px-6 py-4 whitespace-nowrap text-sm text-gray-300",
    },
  },

  // アラートプリセット
  alerts: {
    default: "relative w-full rounded-lg border px-4 py-3 bg-[#2A1420] border-gray-700 text-gray-300",
    error: "relative w-full rounded-lg border px-4 py-3 bg-red-900/20 border-red-700 text-red-300",
    warning: "relative w-full rounded-lg border px-4 py-3 bg-yellow-900/20 border-yellow-700 text-yellow-300",
    success: "relative w-full rounded-lg border px-4 py-3 bg-green-900/20 border-green-700 text-green-300",
    info: "relative w-full rounded-lg border px-4 py-3 bg-blue-900/20 border-blue-700 text-blue-300",
  },

  // モーダルプリセット
  modal: {
    overlay: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
    content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-[#2A1420] border-gray-700 p-6 shadow-lg duration-200 rounded-lg",
    header: "flex flex-col space-y-1.5 text-center sm:text-left",
    title: "text-lg font-semibold text-white",
    description: "text-sm text-gray-400",
    footer: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
  },
} as const;