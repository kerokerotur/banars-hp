"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-[#14090F] border-b border-pink-900/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <Link href="/dashboard" className="flex items-center space-x-4">
            <img src="/logo.png" alt="Banars Logo" width={32} height={32} />
            <span className="text-xl font-bold text-white">Banars Admin</span>
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
