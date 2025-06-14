"use client";

import { Button } from "~/ui/button";
import NewsCard from "./news-card";
import {
  designSystem,
  createSection,
  createContainer,
  createGrid,
} from "~/design-system";

interface NewsSectionProps {
  onViewAllNews?: () => void;
  onReadMore?: (newsId: string) => void;
}

export default function NewsSection({
  onViewAllNews,
  onReadMore,
}: NewsSectionProps) {
  const newsItems = [
    {
      id: "1",
      date: "June 15, 2024",
      title: "Banars Win Championship Game",
      description:
        "The Banars defeated the Titans in a thrilling championship game, securing their place as league champions.",
      imageUrl: "/プライドジャパン1回戦_250531_1.jpg",
    },
    {
      id: "2",
      date: "May 28, 2024",
      title: "New Player Tryouts Announced",
      description:
        "Tryouts for new players will be held on June 1st at the City Park baseball field. All interested players are encouraged to attend.",
      imageUrl: "/プライドジャパン1回戦_250531_2.jpg",
    },
    {
      id: "3",
      date: "April 5, 2024",
      title: "Spring Training Camp a Success",
      description:
        "The Banars completed a successful spring training camp, focusing on skill development and team building.",
      imageUrl: "/プライドジャパン1回戦_250531_3.jpg",
    },
  ];

  return (
    <section
      className={createSection({ background: "primary", padding: "lg" })}
    >
      <div className={createContainer("xl")}>
        <h2 className={designSystem.typography.heading}>Latest News</h2>

        <div className={`${createGrid({ cols: 3, gap: "lg" })} mb-12`}>
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
            className={designSystem.buttons.secondary + " px-8 py-3"}
          >
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
}
