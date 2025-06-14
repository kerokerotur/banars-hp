"use client";

import type { Player } from "./player-card";
import PlayerCard from "./player-card";

interface PlayerSectionProps {
  title: string;
  players: Player[];
  onViewProfile?: (playerId: string) => void;
}

export default function PlayerSection({
  title,
  players,
  onViewProfile,
}: PlayerSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-pink-500 mb-6 border-b border-[#3A1A2C] pb-2">
        {title}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {players.map((player) => (
          <>
            <PlayerCard
              key={player.id}
              player={player}
              onViewProfile={onViewProfile}
            />
            <PlayerCard
              key={player.id}
              player={player}
              onViewProfile={onViewProfile}
            />
          </>
        ))}
      </div>
    </section>
  );
}
