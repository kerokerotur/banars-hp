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
  const response = await fetch("http://localhost:8787/players");
  if (!response.ok) {
    throw new Error("Failed to fetch players data");
  }
  const players = await response.json();
  return { players };
}

export default function Page() {
  const { players } = useLoaderData();
  console.error("Players data:", players);
  return <PlayersPage players={players} />;
}
