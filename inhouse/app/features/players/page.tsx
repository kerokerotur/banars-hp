import PlayerForm from "./player-form";

export default function PlayersPage() {
  return (
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold text-white mb-8">選手プロフィール</h1>
        <PlayerForm />
      </div>
  )
}
