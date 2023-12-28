import { ExperienceCard } from "./ExperienceCard.tsx";

export function Experience() {
  return (
    <ol class="relative border-s ml-3 border-dark-200 dark:border-gray-400">
      <ExperienceCard
	  	date="Marzo 2022 - Agosto 2023"
		title="Practicas Profesionales Full Stack Developer"
		description="Desarrolle soluciones en sistemas web con Vue.js y Python con buenas practicas y trabajando de manera cooperativa en equipo y estableciendo las mejores relaciones de colaboracion."
	   />
    </ol>
  );
}
