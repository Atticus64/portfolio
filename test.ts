import { serveFile } from "https://deno.land/std@0.207.0/http/file_server.ts";

Deno.serve({ port: 3000 }, (req) => {


	const pathname = new URL(req.url).pathname;

	if (pathname === "/test.webm") {
		return serveFile(req, "./static/lofi.webm");
	} else {
		return new Response("Not found", { status: 404 });
	}
});

