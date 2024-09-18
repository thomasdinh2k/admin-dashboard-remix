import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Dashboard with Remix" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<main className="grid gap-4 p-4  ">
			<div id="wrapper" className="bg-white rounded-lg pb-4 shadow"></div>
		</main>
	);
}
