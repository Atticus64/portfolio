import { ComponentChildren } from "https://esm.sh/v128/preact@10.19.2/src/index.js";

interface Props {
	children: ComponentChildren
	className: string
	id: string
}

export function SectionContainer ({ children, className, id }: Props) {
	return (
		
		<section id={id} class={`${className} p-10 w-full mx-auto lg:w-[740px] pb-10`}>
		  {children}
		</section>
	)
}