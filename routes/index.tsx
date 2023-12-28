import { Badge } from "../components/Badge.tsx";
import { Experience } from "../components/Experience.tsx";
import { SocialPill } from "../components/SocialPill.tsx";
import { Briefcase } from "../components/icons/Briefcase.tsx";
import { Github } from "../components/icons/Github.tsx";
import { LinkedIn } from "../components/icons/LinkedIn.tsx";
import { MailIcon } from "../components/icons/Mail.tsx";
import { SectionContainer } from "../components/SectionContainer.tsx";
import { Projects } from "../components/Projects.tsx";

export default function Home() {
  return (
    <div class="mx-auto place-content-center justify-center flex-col">
        <SectionContainer className="mx-auto flex flex-col gap-y-4" id="about">
            <h1 class="text-3xl flex flex-wrap font-bold flex-row gap-x-4 ">
              Hola! Soy Jonathan
              <a
                href="https://www.linkedin.com/in/jonathan-alcantar-339a612a6/"
                target="_blank"
                class="flex justify-center items-center"
              >
                <Badge class="self-center">Disponible para trabajar</Badge>
              </a>
            </h1>
            <h2 class="text-xl lg:text-2xl lg:text-balance  min-w-full flex-wrap ">
              <div>
                +1 Año de experiencia.{" "}
                <span class="text-yellow-600 dark:text-yellow-200">
                  Desarrollador Web
                </span>.
              </div>
              <div>
                <span class="text-teal-700 dark:text-teal-500">
                  De Sinaloa, México.
                </span>{" "}
                <span >
                  Apasionado por la programación
                </span>.{" "}
                <span>
                  Creando sistemas robustos, seguros y escalables.
                </span>
              </div>
            </h2>

            <nav class="flex flex-row p-4 gap-5 flex-wrap">
              <SocialPill
                href="https://www.linkedin.com/in/jonathan-alcantar-339a612a6/"
                class="cursor-pointer"
              >
                <LinkedIn class="h-6 w-fit" />
                LinkedIn
              </SocialPill>
              <SocialPill
                href="https://github.com/atticus64"
                class="cursor-pointer"
              >
                <Github class="h-6 w-fit" />
                Github
              </SocialPill>
              <SocialPill href="mailto:jonalca.ce@gmail.com" class="">
                <MailIcon class="size-4 md:size-6" />
                jonalca.ce@gmail.com
              </SocialPill>
            </nav>
        </SectionContainer>

      <SectionContainer id="experience" className="flex justify-center align-middle items-center">
        <section class="flex flex-col gap-4 pt-10">
          <h3 class="flex flex-row text-3xl gap-3">
            <Briefcase class="h-10 w-fit"></Briefcase>
            Experiencia Laboral
          </h3>
          <Experience></Experience>
        </section>
      </SectionContainer>


	<SectionContainer id="projects" className="">
          <Projects />
	</SectionContainer>
    </div>
  );
}
