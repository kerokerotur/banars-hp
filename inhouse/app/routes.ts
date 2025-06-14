import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/index.tsx"),
    route("players", "routes/players/index.tsx"),
  ]),
  layout("routes/players/layout-sidebar.tsx", []),
] satisfies RouteConfig;
