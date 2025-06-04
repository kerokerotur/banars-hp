import type { Route } from "../+types/root";
import { HomePage } from "../features/home/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "バナーズ野球クラブ - ホーム" },
    {
      name: "description",
      content: "バナーズ野球クラブの公式ホームページ。チーム情報、試合結果、イベント情報をお届けします。",
    },
    { name: "keywords", content: "バナーズ, 野球, ホーム, チーム, イベント" },
    { property: "og:locale", content: "ja_JP" },
    { property: "og:site_name", content: "Banars Baseball Club" },
    { property: "og:type", content: "article" },
    { property: "og:title", content: "Banars Baseball Club" },
    { property: "og:description", content: "バナーズのHPです。練習試合相手募集しています！" },
    { property: "og:url", content: "https://banars-base.com" },
    { property: "og:image", content: "https://banars-base.com/ogp.png" },
    { property: "og:image:alt", content: "Banars Baseball Club" },
  ];
}

export default function Page() {
  return <HomePage />;
}
