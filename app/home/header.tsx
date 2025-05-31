"use client"

import { Star } from "lucide-react"
import { Button } from "~/components/ui/button"

interface HeaderProps {
  onNavigate?: (section: string) => void
  onJoinUs?: () => void
}

export default function Header({ onNavigate, onJoinUs }: HeaderProps) {
  const navItems = [
    { label: "Home", value: "home" },
    { label: "About", value: "about" },
    { label: "Schedule", value: "schedule" },
    { label: "News", value: "news" },
    { label: "Contact", value: "contact" },
  ]

  return (
    <header className="bg-gray-900 text-white px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Star className="w-6 h-6 text-pink-500 fill-pink-500" />
          <span className="text-lg font-semibold">Banars</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate?.(item.value)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <Button onClick={onJoinUs} className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md">
          Join Us
        </Button>
      </div>
    </header>
  )
}
