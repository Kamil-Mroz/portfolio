import { GithubLogoIcon } from "@phosphor-icons/react";
import type { Project } from "@/types";

type ProjectRepoLinks = {
	links: Project["repo"];
};
export default function ProjectRepoLinks({ links }: ProjectRepoLinks) {
	return links ? (
		Array.isArray(links) ? (
			links.map((repo) => (
				<a
					key={`links #${repo.href}`}
					href={repo.href}
					className="inline-flex items-center gap-2 rounded-full border border-[#262626] px-6 py-3 font-mono text-sm font-medium text-[#FAFAF9] transition-colors hover:border-[#A3E635] hover:text-[#A3E635]"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GithubLogoIcon className="h-4 w-4" weight="bold" />
					{repo.name || "Source"}
				</a>
			))
		) : (
			<a
				href={links.href}
				className="inline-flex items-center gap-2 rounded-full border border-[#262626] px-6 py-3 font-mono text-sm font-medium text-[#FAFAF9] transition-colors hover:border-[#A3E635] hover:text-[#A3E635]"
				target="_blank"
				rel="noopener noreferrer"
			>
				<GithubLogoIcon className="h-4 w-4" weight="bold" />
				{links.name || "Source"}
			</a>
		)
	) : null;
}
