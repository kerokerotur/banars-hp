import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/index.tsx"),
    route("game-results", "routes/game-results/index.tsx"),
    route("contact", "routes/contact/index.tsx"),
    route("players", "routes/players/index.tsx"),
  ]),
] satisfies RouteConfig;
