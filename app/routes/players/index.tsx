import PlayersPage from "~/players/page";
import type { Route } from "./+types";
import { useLoaderData } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const endpoint =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8787/players"
      : "https://server.kerokerotur2000.workers.dev/players";

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
