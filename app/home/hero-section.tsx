"use client"

import { Button } from "~/components/ui/button"



interface HeroSectionProps {
  onLearnMore?: () => void
}

export default function HeroSection({ onLearnMore }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[600px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/hero-background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Banars Baseball Club</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Empowering young athletes through baseball, fostering teamwork, skill development, and a passion for the game.
        </p>
        <Button onClick={onLearnMore} className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg rounded-md">
          Learn More
        </Button>
      </div>
    </section>
  )
}
