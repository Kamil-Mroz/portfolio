import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { PROJECTS } from "@/constants";

export default function WorkSection() {
	return (
		<section className="mx-auto max-w-6xl px-6 py-32 w-full">
			<h2 className="mb-12 text-3xl font-bold tracking-tight text-[#FAFAF9] sm:text-4xl">
				Work
			</h2>
			<div className="grid gap-px overflow-hidden rounded-2xl border border-[#262626] bg-[#0c0c0c] sm:grid-cols-2">
				{PROJECTS.map((project) => (
					<Link
						key={project.title}
						to="/work/$slug"
						params={{ slug: project.slug }}
						className="group bg-[#0A0A0A] p-8 transition-colors hover:bg-[#0F0F0F]"
					>
						<div className="flex items-start justify-between">
							<h3 className="text-xl font-semibold text-[#FAFAF9] group-hover:text-[#A3E635]">
								{project.title}
							</h3>
							<ArrowSquareOutIcon
								className="mt-0.5 h-4 w-4 shrink-0   transition-colors group-hover:text-[#A3E635]"
								weight="bold"
							/>
						</div>
						<p className="mt-3 text-sm  ">{project.description}</p>
						<div className="mt-6 flex flex-wrap gap-2">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-full bg-[#1A1A1A] px-3 py-1 font-mono text-xs  "
								>
									{tag}
								</span>
							))}
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
