"use client"

interface TabToggleProps {
  options: Array<{
    label: string
    value: string
  }>
  activeTab: string
  onTabChange: (value: string) => void
  className?: string
}

export default function TabToggle({ options, activeTab, onTabChange, className = "" }: TabToggleProps) {
  return (
    <div className={`flex rounded-lg overflow-hidden ${className}`}>
      {options.map((option, index) => (
        <button
          key={option.value}
          onClick={() => onTabChange(option.value)}
          className={`px-6 py-2 text-sm font-medium transition-colors ${
            activeTab === option.value ? "bg-pink-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          } ${index === 0 ? "rounded-l-lg" : ""} ${index === options.length - 1 ? "rounded-r-lg" : ""}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
