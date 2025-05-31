import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("game-results", "routes/game-results/index.tsx"),
  route("contact", "routes/contact/index.tsx"),
  route("players", "routes/players/index.tsx"),

] satisfies RouteConfig;
