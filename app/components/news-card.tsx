"use client"

import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"


interface NewsCardProps {
  date: string
  title: string
  description: string
  imageUrl: string
  onReadMore?: () => void
}

export default function NewsCard({ date, title, description, imageUrl, onReadMore }: NewsCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white overflow-hidden">
      <div className="aspect-video bg-gray-700">
        <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-6">
        <p className="text-pink-400 text-sm mb-2">{date}</p>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          variant="link"
          onClick={onReadMore}
          className="text-pink-400 hover:text-pink-300 p-0 h-auto font-normal"
        >
          Read More →
        </Button>
      </CardFooter>
    </Card>
  )
}
