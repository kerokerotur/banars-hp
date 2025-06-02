import type { Route } from "../+types/root";
import { HomePage } from "../home/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "バナーズ野球クラブ - ホーム" },
    {
      name: "description",
      content: "バナーズ野球クラブの公式ホームページ。チーム情報、試合結果、イベント情報をお届けします。",
    },
    { name: "keywords", content: "バナーズ, 野球, ホーム, チーム, イベント" },
  ];
}

export default function Page() {
  return <HomePage />;
}
