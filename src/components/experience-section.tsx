import { EXPERIENCES } from "#/constants";

export default function ExperienceSection() {
	return (
		<section className="mx-auto w-full max-w-6xl px-6 py-32">
			<h2 className="mb-12 text-3xl font-bold tracking-tight text-[#FAFAF9] sm:text-4xl">
				Experience
			</h2>
			<div className="space-y-0 border-l-2 border-[#262626] pl-8">
				{EXPERIENCES.map((exp) => (
					<div key={exp.company} className="relative pb-12 last:pb-0">
						<span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-[#44403C] ring-2 ring-[#0A0A0A]" />
						<div className="flex flex-wrap items-center gap-4">
							<h3 className="text-xl font-semibold text-[#FAFAF9]">
								{exp.role}
							</h3>
							<span className="font-mono text-sm  ">@ {exp.company}</span>
						</div>
						<p className="mt-1 font-mono text-xs  ">{exp.period}</p>
						<p className="mt-3  ">{exp.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
