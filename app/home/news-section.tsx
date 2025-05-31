"use client"

import { Button } from "~/components/ui/button"
import NewsCard from "./news-card"

interface NewsSectionProps {
  onViewAllNews?: () => void
  onReadMore?: (newsId: string) => void
}

export default function NewsSection({ onViewAllNews, onReadMore }: NewsSectionProps) {
  const newsItems = [
    {
      id: "1",
      date: "June 15, 2024",
      title: "Banars Win Championship Game",
      description:
        "The Banars defeated the Titans in a thrilling championship game, securing their place as league champions.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "2",
      date: "May 28, 2024",
      title: "New Player Tryouts Announced",
      description:
        "Tryouts for new players will be held on June 1st at the City Park baseball field. All interested players are encouraged to attend.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "3",
      date: "April 5, 2024",
      title: "Spring Training Camp a Success",
      description:
        "The Banars completed a successful spring training camp, focusing on skill development and team building.",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Latest News</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item) => (
            <NewsCard
              key={item.id}
              date={item.date}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              onReadMore={() => onReadMore?.(item.id)}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={onViewAllNews}
            variant="outline"
            className="border-pink-600 text-pink-400 hover:bg-pink-600 hover:text-white px-8 py-3"
          >
            View All News
          </Button>
        </div>
      </div>
    </section>
  )
}
