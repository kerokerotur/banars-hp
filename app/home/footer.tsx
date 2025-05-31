"use client"

import { Twitter, Facebook, Instagram } from "lucide-react"

interface FooterProps {
  onSocialClick?: (platform: string) => void
  onLinkClick?: (link: string) => void
}

export default function Footer({ onSocialClick, onLinkClick }: FooterProps) {
  const footerLinks = [
    { label: "Privacy Policy", value: "privacy" },
    { label: "Terms of Service", value: "terms" },
    { label: "Contact Us", value: "contact" },
  ]

  const socialPlatforms = [
    { icon: Twitter, name: "twitter" },
    { icon: Facebook, name: "facebook" },
    { icon: Instagram, name: "instagram" },
  ]

  return (
    <footer className="bg-[#1A0B13] text-white py-8 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => onLinkClick?.(link.value)}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            {socialPlatforms.map(({ icon: Icon, name }) => (
              <button
                key={name}
                onClick={() => onSocialClick?.(name)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">© 2024 Banars Baseball Club. All rights reserved.</div>
      </div>
    </footer>
  )
}
