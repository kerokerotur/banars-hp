import GameResultsPage from "~/features/game-results/page";
import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "バナーズ試合結果 - 最新情報" },
    {
      name: "description",
      content: "バナーズ野球クラブの最新試合結果をチェック。試合の詳細と選手の活躍を確認できます。",
    },
    { name: "keywords", content: "バナーズ, 野球, 試合結果, チーム, スコア" },
  ];
}

export default function Page() {
  return <GameResultsPage />;
}
