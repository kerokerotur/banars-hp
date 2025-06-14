"use client";

import { Button } from "~/ui/button";
import { Card, CardContent, CardFooter } from "~/ui/card";
import { designSystem } from "~/design-system";

interface NewsCardProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  onReadMore?: () => void;
}

export default function NewsCard({
  date,
  title,
  description,
  imageUrl,
  onReadMore,
}: NewsCardProps) {
  return (
    <Card className={designSystem.cards.news}>
      <div className="aspect-video bg-gray-700">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <p className={`${designSystem.typography.accent} text-sm mb-2`}>
          {date}
        </p>
        <h3 className={designSystem.typography.cardTitle}>{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          variant="link"
          onClick={onReadMore}
          className={designSystem.buttons.link}
        >
          Read More →
        </Button>
      </CardFooter>
    </Card>
  );
}
