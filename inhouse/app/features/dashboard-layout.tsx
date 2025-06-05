import type React from "react"
import Header from "./header"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="text-center py-4 text-gray-500 text-sm">© 2024 Team Manager. All rights reserved.</footer>
    </div>
  )
}
