import type { Route } from "../+types/root";
import { HomePage } from "../home/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Page() {
  return <HomePage />;
}
