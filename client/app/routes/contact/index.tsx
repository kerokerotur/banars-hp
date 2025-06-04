import ContactPage from "~/features/contact/page";
import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "バナーズお問い合わせ - ご連絡はこちら" },
    {
      name: "description",
      content: "バナーズ野球クラブへのお問い合わせはこちらから。チーム情報やイベントについての質問をお待ちしています。",
    },
    { name: "keywords", content: "バナーズ, 野球, お問い合わせ, チーム, イベント" },
  ];
}

export default function Page() {
  return <ContactPage />;
}
