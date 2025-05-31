"use client"

import GameResultBadge from "./game-result-badge"

export interface GameResult {
  id: string
  date: string
  opponent: string
  result: "win" | "loss"
  score: string
}

interface GameResultsTableProps {
  games: GameResult[]
  onGameClick?: (gameId: string) => void
}

export default function GameResultsTable({ games, onGameClick }: GameResultsTableProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="grid grid-cols-4 gap-4 p-4 bg-gray-700 text-gray-300 text-sm font-medium">
        <div>DATE</div>
        <div>OPPONENT</div>
        <div>RESULT</div>
        <div>SCORE</div>
      </div>

      <div className="divide-y divide-gray-700">
        {games.map((game) => (
          <div
            key={game.id}
            onClick={() => onGameClick?.(game.id)}
            className="grid grid-cols-4 gap-4 p-4 text-white hover:bg-gray-750 transition-colors cursor-pointer"
          >
            <div className="text-gray-300">{game.date}</div>
            <div>{game.opponent}</div>
            <div>
              <GameResultBadge result={game.result} />
            </div>
            <div className="text-pink-400 font-medium">{game.score}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
