"use client"

import Link from "next/link"
import { Home, Users, Calendar, Settings, Trophy } from "lucide-react"
import { cn } from "~/lib/utils"

const navigation = [
	{ name: "ホーム", href: "/dashboard", icon: Home },
	{ name: "選手", href: "/players", icon: Users },
	{ name: "試合", href: "/matches", icon: Trophy },
	{ name: "スケジュール", href: "/schedule", icon: Calendar },
	{ name: "設定", href: "/settings", icon: Settings },
]

export default function Sidebar() {
	const currentPathname = typeof window !== "undefined" ? window.location.pathname : ""

	return (
		<div className="w-64 bg-[#14090F] border-r border-gray-700 p-6">
			<div className="flex items-center space-x-3 mb-8">
				<div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
					<div className="w-8 h-8 bg-pink-400 rounded-full border-2 border-pink-600"></div>
				</div>
				<div>
					<h2 className="text-white font-bold">東京スターズ</h2>
					<p className="text-gray-400 text-sm">管理者ダッシュボード</p>
				</div>
			</div>

			<nav className="space-y-2">
				{navigation.map((item) => {
					const Icon = item.icon
					const isActive = currentPathname === item.href

					return (
						<Link
							key={item.name}
							href={item.href}
							className={cn(
								"flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
								isActive
									? "bg-pink-500 text-white"
									: "text-gray-400 hover:text-white hover:bg-gray-700",
							)}
						>
							<Icon className="w-5 h-5" />
							<span>{item.name}</span>
						</Link>
					)
				})}
			</nav>
		</div>
	)
}
