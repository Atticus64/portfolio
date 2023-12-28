import { Github } from "../components/icons/Github.tsx";
import { VideoSection } from "./Video.tsx";

interface Props {
	description: string;
	title: string;
	href?: string;
	code: string;
	preview: string;
	class: string;
	id: string;
}

export function ProjectCard(props: Props) {
	return (
		<>
			<article>
				<h3 class="text-2xl font-semibold text-teal-600 dark:text-blue-200 mb-2">
					{props.title}
				</h3>
				<p class="text-lg mb-4 text-pretty text-gray-700 dark:text-cyan-100 ">
					{props.description}
				</p>

				{props.preview.endsWith("png") &&
					(
						<img
							loading="lazy"
							class="rounded shadow-2xl shadow-white/10 w-fit"
							src={props.preview}
							alt={`Captura de pantalla del proyecto ${props.title}`}
						/>
					)}
				{
					props.preview.endsWith("webm") &&
					(
						<VideoSection name={props.id} video={props.preview} />
					)
				}
				<div class="flex flex-wrap flex-row p-10 gap-4">
					{ props.href && 
						<a target="_blank" href={props.href} class="inline-flex items-center justify-center p-5 py-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
							<span class="w-full">Visitar Proyecto</span>
							<svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
							</svg>
							
						</a>
					}
					<a href={props.code} target="_blank" class="cursor-pointer text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm p-5 py-2 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
						<Github class="h-6 w-fit m-2"></Github>
						Código Fuente
					</a>
				</div>
			</article>
		</>
	);
}
