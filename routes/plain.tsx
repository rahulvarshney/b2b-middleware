// routes/plain.tsx

import { HandlerContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req: Request, _ctx: HandlerContext) {
    return new Response("Hello World");
  },
};