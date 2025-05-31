import type { Route } from "./+types/home";
import { HomePage } from "../welcome/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Page() {
  return <HomePage />;
}
