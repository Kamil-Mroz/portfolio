import { PROJECTS_DETAILS } from "#/constants";
import HomeButton from "./home-button";
import ProjectCard from "./project-card";

export default function WorkPage() {
	return (
		<main
			className="mx-auto max-w-6xl px-6 pt-32 pb-16"
			style={{ scrollbarGutter: "stable" }}
		>
			<HomeButton />
			<div className="mx-auto w-full max-w-6xl px-6 py-32">
				<h2 className="mb-12 text-3xl font-bold tracking-tight text-[#FAFAF9] sm:text-4xl">
					Work
				</h2>
				<p className="mt-6 max-w-xl  ">
					A selection of projects I&apos;ve built - from solo experiments to
					team collaborations. Each one solved a real problem or taught me
					something new.
				</p>

				<div className="mt-16 grid gap-6 md:grid-cols-2">
					{PROJECTS_DETAILS.map((project) => (
						<ProjectCard key={project.slug} project={project} />
					))}
				</div>
			</div>
		</main>
	);
}
