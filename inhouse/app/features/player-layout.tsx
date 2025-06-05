import type React from "react"
import Sidebar from "./sidebar"

interface PlayerLayoutProps {
  children: React.ReactNode
}

export default function PlayerLayout({ children }: PlayerLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      <Sidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
