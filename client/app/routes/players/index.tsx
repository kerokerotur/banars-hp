import PlayersPage from "~/features/players/page";
import type { Route } from "./+types";
import { useLoaderData } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "バナーズ選手情報" },
    {
      name: "description",
      content:
        "Discover the talented players of Banars Baseball Club. Learn more about their skills, positions, and contributions to the team.",
    },
    {
      name: "keywords",
      content: "バナーズ, 野球, ホーム, チーム, プロフィール",
    },
  ];
}

const serverUrl = process.env.SERVER_URL || "http://localhost:8787";

export async function loader() {
  const endpoint = `${serverUrl}/players`;

  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error("Failed to fetch players data");
  }
  const players = await response.json();
  return { players };
}

export default function Page() {
  const { players } = useLoaderData();
  return <PlayersPage players={players} />;
}
