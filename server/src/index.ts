import { renderHtml } from "./renderHtml";
import { getPlayer } from "./usecase/get-player";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/players") {
      const results = await getPlayer(env);
      return new Response(JSON.stringify(results, null, 2), {
        headers: {
          "content-type": "application/json",
        },
      });
    }

    if (url.pathname === "/") {
      return new Response(renderHtml("Welcome to the API"), {
        headers: {
          "content-type": "text/html",
        },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;
