import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
	return (
		<html lang="es">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Jonathan Alcantar Portfolio Web Developer</title>
				<meta name="description" content="Contrata a Jonathan para tu proximo proyecto de desarrollo web!" />
				<link rel="stylesheet" href="/styles.css" />
			</head>
			<body>
				<Component />
			</body>
		</html>
	);
}
