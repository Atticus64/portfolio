import { PageProps } from "$fresh/server.ts";
import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  class: string;
}

export function Badge(props: Props) {
	return (

		<span class={`bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  ${props.class}`}>
			{props.children}
		</span>
	)
}

