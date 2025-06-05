import PlayersPage from "~/features/players/page";
import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Banars Admin" },
    { name: "description", content: "バナーズHPの管理画面です" },
  ];
}

export default function Players() {
  return <PlayersPage />;
}
