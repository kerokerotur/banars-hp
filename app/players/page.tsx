"use client"

import Header from "~/home/header"
import type { Player } from "./player-card"
import PlayerSection from "./player-section"
import Footer from "~/home/footer"


export default function PlayersPage() {
  const pitchers: Player[] = [
    {
      id: "1",
      name: "Ethan Carter",
      nameJapanese: "イーサン・カーター",
      position: "Starting Pitcher",
      positionJapanese: "先発投手",
      imageUrl: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "2",
      name: "Liam Harper",
      nameJapanese: "リアム・ハーパー",
      position: "Relief Pitcher",
      positionJapanese: "リリーフ投手",
      imageUrl: "/placeholder.svg?height=80&width=80",
    },
  ]

  const catchers: Player[] = [
    {
      id: "3",
      name: "Noah Bennett",
      nameJapanese: "ノア・ベネット",
      position: "Starting Catcher",
      positionJapanese: "先発捕手",
      imageUrl: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "4",
      name: "Owen Foster",
      nameJapanese: "オーウェン・フォスター",
      position: "Backup Catcher",
      positionJapanese: "控え捕手",
      imageUrl: "/placeholder.svg?height=80&width=80",
    },
  ]

  const handleViewProfile = (playerId: string) => {
    console.log(`View profile clicked for player: ${playerId}`)
    // 選手詳細ページに遷移
  }

  const handleNavigate = (section: string) => {
    console.log(`Navigating to: ${section}`)
    // ここでルーティングやスクロール処理を実装
  }

  const handleJoinUs = () => {
    console.log("Join Us clicked")
  }

  const handleSocialClick = (platform: string) => {
    console.log(`Social media clicked: ${platform}`)
  }

  const handleFooterLinkClick = (link: string) => {
    console.log(`Footer link clicked: ${link}`)
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header onNavigate={handleNavigate} onJoinUs={handleJoinUs} />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">選手プロフィール</h1>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto">
            ライジングスターズ・ベースボールチームの才能あふれる選手たちをご紹介します。
            各選手が独自のスキルと情熱をフィールドで発揮し、チームの成功に貢献しています。
          </p>
        </div>

        <PlayerSection title="投手" players={pitchers} onViewProfile={handleViewProfile} />

        <PlayerSection title="捕手" players={catchers} onViewProfile={handleViewProfile} />
      </main>

      <Footer onSocialClick={handleSocialClick} onLinkClick={handleFooterLinkClick} />
    </div>
  )
}
