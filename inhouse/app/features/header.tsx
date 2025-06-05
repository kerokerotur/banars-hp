"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-pink-400 rounded-full border-2 border-pink-600"></div>
            </div>
            <span className="text-xl font-bold text-white">Team Manager</span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-pink-400 transition-colors">
              Dashboard
            </Link>
            <Link href="/players" className="text-gray-400 hover:text-pink-400 transition-colors">
              Players
            </Link>
            {/* <Link href="/matches" className="text-gray-400 hover:text-pink-400 transition-colors">
              Matches
            </Link>
            <Link href="/practice" className="text-gray-400 hover:text-pink-400 transition-colors">
              Practice
            </Link>
            <Link href="/settings" className="text-gray-400 hover:text-pink-400 transition-colors">
              Settings
            </Link> */}
          </nav>
        </div>

        <Avatar>
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
          <AvatarFallback className="bg-pink-500 text-white">U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
