import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import type { Project } from "#/types";

type ProjectDemoLinkProps = {
	link: Project["link"];
};
export default function ProjectDemoLink({ link }: ProjectDemoLinkProps) {
	return link ? (
		<a
			href={link}
			className="inline-flex items-center gap-2 rounded-full border border-[#262626] px-6 py-3 font-mono text-sm font-medium text-[#FAFAF9] transition-colors hover:border-[#A3E635] hover:text-[#A3E635]"
			target="_blank"
			rel="noopener noreferrer"
		>
			<ArrowSquareOutIcon className="h-4 w-4" weight="bold" />
			Live Demo
		</a>
	) : null;
}
