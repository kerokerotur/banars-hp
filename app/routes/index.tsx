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
    { name: "og:locale", content: "ja_JP" },
    { name: "og:site_name", content: "Banars Baseball Club" },
    { name: "og:type", content: "article" },
    { name: "og:title", content: "Banars Baseball Club" },
    { name: "og:description", content: "バナーズのHPです。練習試合相手募集しています！" },
    { name: "og:url", content: "https://banars-base.com" },
    { name: "og:image", content: "https://banars-base.com/ogp.png" },
    { name: "og:image:alt", content: "Banars Baseball Club" },
  ];
}

export default function Page() {
  return <HomePage />;
}
