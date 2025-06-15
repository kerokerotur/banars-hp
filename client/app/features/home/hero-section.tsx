"use client";

import { useState, useEffect } from "react";
import { Button } from "@project/common/ui/button";
import { designSystem, createContainer } from "~/design-system";

interface HeroSectionProps {
  onLearnMore?: () => void;
}

export default function HeroSection({ onLearnMore }: HeroSectionProps) {
  const [backgroundImage, setBackgroundImage] = useState(
    "/プライドジャパン47_250531_9.jpg"
  );
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const images = [
      "/プライドジャパン47_250531_9.jpg",
      "/プライドジャパン47_250531_8.jpg",
      "/プライドジャパン1回戦_250531_4.jpg",
      "/プライドジャパン47_250531_3.jpg",
    ];
    let index = 0;
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        index = (index + 1) % images.length;
        setBackgroundImage(images[index]);
        setOpacity(1);
      }, 2000); // Transition duration
    }, 7000); // Total interval duration

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`${designSystem.sections.hero} transition-opacity duration-2000`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: opacity,
      }}
    >
      <div className={createContainer("md")}>
        <h1 className={designSystem.typography.hero}>Banars Baseball Club</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Empowering young athletes through baseball, fostering teamwork, skill
          development, and a passion for the game.
        </p>
        <Button onClick={onLearnMore} className={designSystem.buttons.large}>
          Learn More
        </Button>
      </div>
    </section>
  );
}
