import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req) {
    return new Response(JSON.stringify({
      hello: 'world'
    }), {
      headers: { "Content-Type": "application/json" },
    });
  },

}  
