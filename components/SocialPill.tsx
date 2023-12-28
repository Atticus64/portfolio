import { ComponentChildren } from "preact";

interface Props {
  class: string;
  href: string;
  children: ComponentChildren;
}

export function SocialPill(props: Props) {
  return (
    <a
      class={`
  	dark:bg-white/5 bg-gray-100 
    border border-white/10 rounded-full
    flex justify-center items-center gap-x-2
    py-1 px-2 md:py-2 md:px-4
    text-xs md:text-base
    transition
    hover:scale-110 hover:bg-gray-200 dark:hover:bg-white/10
	${props.class}
  `}
      target="_blank"
      href={props.href}
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
}
