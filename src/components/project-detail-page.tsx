import { ArrowLeftIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { Route } from "@/routes/work/$slug";
import type { Project } from "@/types";
import ProjectDemoLink from "./project-demo-link";
import ProjectPreview from "./project-preview";
import ProjectRepoLinks from "./project-repo-links";

export default function ProjectDetailPage() {
	const project: Project = Route.useRouteContext();

	return (
		<main className="mx-auto max-w-6xl px-6 pt-32 pb-16">
			<Link
				to="/work"
				className="inline-flex items-center gap-2 text-sm font-mono   transition-colors hover:text-[#A3E635]"
			>
				<ArrowLeftIcon className="h-4 w-4" weight="bold" />
				Back
			</Link>

			<div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr] mx-auto w-full max-w-6xl">
				<div>
					<p className="font-mono text-xs  ">01</p>
					<h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
						{project.title}
					</h1>
					<div className="mt-4 flex items-center gap-4">
						<span className="font-mono text-sm  ">{project.year}</span>
						<span className="font-mono text-sm  ">{project.role}</span>
					</div>
					<p className="mt-6 text-lg  ">{project.longDescription}</p>
				</div>
				<div className="flex flex-wrap gap-2 items-start self-center">
					{project.tags.map((tag) => (
						<span
							key={tag}
							className="rounded-full bg-[#1A1A1A] px-4 py-2 font-mono text-sm  "
						>
							{tag}
						</span>
					))}
				</div>
				{project.link || project.repo ? (
					<div className=" flex items-center gap-4">
						<ProjectDemoLink link={project.link} />
						<ProjectRepoLinks links={project.repo} />
					</div>
				) : null}
			</div>
			{project.images && project.images.length > 0 ? (
				<div className="rounded-2xl border border-[#262626] bg-[#0F0F0F] p-8  mt-8">
					<p className="font-mono text-xs  ">02 - Preview</p>
					<ProjectPreview images={project.images} />
				</div>
			) : null}
		</main>
	);
}
