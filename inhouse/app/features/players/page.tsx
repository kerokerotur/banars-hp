import PlayerForm from "../player-form";
import PlayerLayout from "../player-layout";

export default function PlayersPage() {
  return (
    <PlayerLayout>
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold text-white mb-8">選手プロフィール</h1>
        <PlayerForm />
      </div>
    </PlayerLayout>
  )
}
