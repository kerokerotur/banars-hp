"use client"

import AboutSection from "./about-section"
import Footer from "../../layout/footer"
import Header from "../../layout/header"
import HeroSection from "./hero-section"
import NewsSection from "./news-section"


export function HomePage() {
  const handleNavigate = (section: string) => {
    console.log(`Navigating to: ${section}`)
    // ここでルーティングやスクロール処理を実装
  }

  const handleJoinUs = () => {
    console.log("Join Us clicked")
    // 入会フォームを開く処理
  }

  const handleLearnMore = () => {
    console.log("Learn More clicked")
    // About セクションにスクロールする処理
  }

  const handleViewAllNews = () => {
    console.log("View All News clicked")
    // ニュース一覧ページに遷移
  }

  const handleReadMore = (newsId: string) => {
    console.log(`Read more clicked for news: ${newsId}`)
    // 個別ニュース記事ページに遷移
  }

  const handleSocialClick = (platform: string) => {
    console.log(`Social media clicked: ${platform}`)
    // ソーシャルメディアページを開く
  }

  const handleFooterLinkClick = (link: string) => {
    console.log(`Footer link clicked: ${link}`)
    // フッターリンクの処理
  }

  return (
    <div>
      <HeroSection onLearnMore={handleLearnMore} />

      <AboutSection />

      <NewsSection onViewAllNews={handleViewAllNews} onReadMore={handleReadMore} />
    </div>
  )
}
