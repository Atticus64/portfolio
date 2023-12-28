import { ProjectCard } from "../islands/ProjectCard.tsx";
import { VideoSection } from "../islands/Video.tsx";
import { Brackets } from "./icons/Brackets.tsx";

export function Projects() {
	return (
		<div class="flex flex-col pt-14 justify-center">
			<h3 class="flex flex-row text-3xl gap-3">
				<Brackets class="h-10 w-fit"></Brackets>
				Proyectos
			</h3>
			<ul class="flex flex-col gap-3">
				<li>
					<ProjectCard
						description="Aplicacion para generar resumenes con Inteligencia Artificial"
						href="https://draft-ia.vercel.app/app"
						code="https://github.com/Atticus64/draft.ia"
						title="Draft.ia"
						preview="/draftia.png"
						class="b-10"
						id="draftia"
					/>
				</li>
				<li>
					<ProjectCard
						description="Aplicacion para generar resumenes con Inteligencia Artificial"
						href="https://draft-ia.vercel.app/app"
						code="https://github.com/Atticus64/draft.ia"
						title="Draft.ia"
						preview="/draftia.png"
						class="b-10"
						id="draftia"
					/>
				</li>
				<li>
					<ProjectCard
						description="Aplicación de linea de comandos para personalizar la terminal de Windows"
						code="https://github.com/Atticus64/juice"
						title="Juice CLI"
						preview="/api/file/lofi.webm"
						class="b-10"
						id="juice"
					/>
				</li>
				<li>
					<ProjectCard
						description="Aplicación para estudiar la Biblia"
						code="https://github.com/Atticus64/BibliaApp"
						href="https://bible-study.vercel.app/"
						title="BibleApp"
						preview="/bibleApp.png"
						class="b-10"
						id="bibleapp"
					/>
				</li>
				<li>
					<ProjectCard
						description="App CLI para ver las noticias de desarrollo de software en la terminal"
						code="https://github.com/Atticus64/news"
						title="News CLI"
						preview="/api/file/news_cli.webm"
						class="b-10"
						id="appnewscli"
					/>
				</li>

			</ul>
		</div>

	)
}