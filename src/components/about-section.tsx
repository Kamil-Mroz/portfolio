import { MapPinIcon } from "@phosphor-icons/react";
import { SKILLS } from "#/constants";

export default function AboutSection() {
	return (
		<section className="mx-auto w-full max-w-6xl px-6 py-32">
			<h2 className="mb-12 text-3xl font-bold tracking-tight text-[#FAFAF9] sm:text-4xl">
				About
			</h2>
			<div className="grid gap-16 sm:grid-cols-2">
				<div>
					<h3 className="text-2xl font-semibold text-[#FAFAF9]">
						A bit about me
					</h3>
					<p className="mt-4">
						I&apos;m a developer who cares about both the code and the craft. I
						believe the best interfaces are the ones people don&apos;t have to
						think about - they just work.
					</p>
					<p className="mt-4">
						When I&apos;m not coding, you&apos;ll find me exploring new
						technologies, contributing to open source, or sketching interface
						ideas.
					</p>
					<div className="mt-8 flex items-center gap-2 text-sm  ">
						<MapPinIcon className="h-4 w-4" weight="fill" />
						<span>Based in Location</span>
					</div>
				</div>
				<div>
					<h3 className="mb-6 text-sm font-mono">SKILLS</h3>
					<div className="flex flex-wrap gap-2">
						{SKILLS.map((skill) => (
							<span
								key={skill}
								className="rounded-full border border-[#262626] px-4 py-2 font-mono text-sm text-[#FAFAF9] transition-colors hover:border-[#A3E635] hover:text-[#A3E635]"
							>
								{skill}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
