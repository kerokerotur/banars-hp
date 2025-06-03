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
    { name: "og:locale", property: "ja_JP" },
    { name: "og:site_name", property: "Banars Baseball Club" },
    { name: "og:type", property: "article" },
    { name: "og:title", property: "Banars Baseball Club" },
    { name: "og:description", property: "バナーズのHPです。練習試合相手募集しています！" },
    { name: "og:url", property: "https://banars-base.com" },
    { name: "og:image", property: "https://banars-base.com/ogp.png" },
    { name: "og:image:alt", property: "Banars Baseball Club" },
  ];
}

export default function Page() {
  return <HomePage />;
}
