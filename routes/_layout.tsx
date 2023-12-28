
import { PageProps } from "$fresh/server.ts";
import { BackgroundGradient } from "../islands/BackgroundGradient.tsx";

export default function Layout({ Component, state }: PageProps) {

  return (
	<BackgroundGradient>
		<div class="flex bg-transparent dark:bg-transparent h-[100vh]">
		  	  <Component />
		</div>

	</BackgroundGradient>
  );
}