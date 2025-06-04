"use client"

import { useState } from "react"
import Header from "~/home/header"
import ContactForm from "./contact-form"
import ContactHero from "./contact-hero"
import Footer from "~/home/footer"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)


  const handleNavigate = (section: string) => {
    console.log(`Navigating to: ${section}`)
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
    <div className="min-h-screen bg-[#1A0B13]">
      <Header onNavigate={handleNavigate} onJoinUs={handleJoinUs} />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <ContactHero />
        <ContactForm isLoading={isLoading} />
      </main>

      <Footer onSocialClick={handleSocialClick} onLinkClick={handleFooterLinkClick} />
    </div>
  )
}
