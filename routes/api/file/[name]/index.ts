import { Handlers } from "$fresh/server.ts";
import { serveFile } from "https://deno.land/std@0.207.0/http/file_server.ts";
import { exists } from "$std/fs/exists.ts";

export const handler: Handlers<{ name: string; age: number } | null> = {
  async GET(req, ctx) {
    const file = ctx.params.name;

    const filePath = `${Deno.cwd()}/static/${file}`;
    const isInServer = await exists(filePath);

    if (!isInServer) {
      return new Response(
        JSON.stringify({
          error: "File not found",
        }),
        { status: 404 },
      );
    }

    return serveFile(req, filePath);
  },
};
