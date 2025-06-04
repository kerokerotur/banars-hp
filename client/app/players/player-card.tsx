import { Button } from "~/ui/button"

export interface Player {
  id: number
  player_name: string
  nameJapanese?: string
  position: string
  uniform_bumber: number,
  positionJapanese?: string
  imageUrl?: string
}

interface PlayerCardProps {
  player: Player
  onViewProfile?: (playerId: string) => void
  className?: string
}

export default function PlayerCard({ player, onViewProfile, className = "" }: PlayerCardProps) {
  return (
    <div className={`bg-[#2C1220] rounded-lg p-6 hover:bg-gray-750 transition-colors ${className}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <img
            src={player.imageUrl || "/placeholder.svg?height=80&width=80"}
            alt={player.player_name}
            className="w-20 h-20 rounded-full object-cover border-2 border-pink-500"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-white text-lg font-semibold mb-1">{player.nameJapanese || player.player_name}</h3>
          <p className="text-gray-400 text-sm">{player.positionJapanese || player.position}</p>
        </div>
      </div>

      <Button
        onClick={() => onViewProfile?.(player.id.toString())}
        className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        プロフィールを見る
      </Button>
    </div>
  )
}
