import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import type { Project } from "@/types";

type ProjectCardProps = {
	project: Project;
};
export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<Link
			to="/work/$slug"
			params={{ slug: project.slug }}
			className="group block overflow-hidden rounded-2xl border border-[#262626] bg-[#0F0F0F] p-8 transition-colors hover:bg-[#141414] sm:p-10"
		>
			<div className="flex items-start justify-between">
				<div>
					<h3 className="text-2xl font-semibold text-[#FAFAF9] transition-colors group-hover:text-[#A3E635]">
						{project.title}
					</h3>
					<p className="mt-2 font-mono text-xs  ">
						{project.year} · {project.role}
					</p>
				</div>
				<ArrowSquareOutIcon
					className="mt-0.5 h-5 w-5 shrink-0   transition-colors group-hover:text-[#A3E635]"
					weight="bold"
				/>
			</div>
			<p className="mt-4 text-sm  ">{project.description}</p>
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
	);
}
