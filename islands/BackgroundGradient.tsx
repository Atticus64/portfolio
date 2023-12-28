import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { ComponentChildren } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface Props {
	children: ComponentChildren;
}

export function BackgroundGradient (props: Props) {
	const isDark = useSignal(false);	

	  if (!IS_BROWSER) return <div></div>;


	useEffect(() => {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		   isDark.value = true;
		 } else  {
		   isDark.value = false
		 }
		
	})


  return (
	<div>
			<>
				{ isDark && 
					<div class="
					dark:absolute dark:top-0 dark:z-[-2] dark:h-screen dark:w-screen dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
					"></div>
				}
				<div class="
				absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]
				">
				</div>
					{props.children}
			</>

	</div>
  )
}