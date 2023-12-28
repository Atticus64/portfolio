interface Props {
	date: string;
	title: string;
	description: string;
}

export function ExperienceCard(props: Props) {
	return (
		<>
			<li class="mb-10 ms-4">
				<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-white dark:bg-white-400">
				</div>
				<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
					{props.date}
				</time>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
					{props.title}
				</h3>
				<p class="text-base font-normal text-gray-600 dark:text-blue-200 text-balance text-pretty">
					{props.description}
				</p>
			</li>
		</>
	);
}
