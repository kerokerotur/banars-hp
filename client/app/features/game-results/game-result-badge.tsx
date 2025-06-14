interface GameResultBadgeProps {
  result: "win" | "loss";
  className?: string;
}

export default function GameResultBadge({
  result,
  className = "",
}: GameResultBadgeProps) {
  const isWin = result === "win";

  return (
    <span
      className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
        isWin
          ? "bg-pink-600 text-white"
          : "bg-transparent border border-gray-500 text-gray-400"
      } ${className}`}
    >
      {isWin ? "Win" : "Loss"}
    </span>
  );
}
