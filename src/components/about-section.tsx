import { MapPinIcon } from "@phosphor-icons/react";
import { SKILLS } from "@/constants";

export default function AboutSection() {
	return (
		<section className="mx-auto w-full max-w-6xl px-6 py-32">
			<h2 className="mb-12 text-3xl font-bold tracking-tight text-[#FAFAF9] sm:text-4xl">
				About
			</h2>
			<div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
				<div>
					<h3 className="text-2xl font-semibold text-[#FAFAF9]">
						A bit about me
					</h3>
					<p className="mt-4">
						I&apos;ma beginner full-stack developer who enjoys building things
						from start to finish. I especially like connecting frontend and
						backend and turning an idea into a working product.
					</p>
					<p className="mt-4">
						I value simplicity and practical solutions over unnecessary
						complexity. When I run into a problem, I first try to understand and
						solve it myself, then use documentation and other resources to find
						the right approach.
					</p>

					<p className="mt-4">
						I got into web development in high school, when I built my first
						website about League of Legends. Since then, I've kept learning by
						building my own projects, experimenting with new technologies, and
						recently expanding my homelab.
					</p>
					<p className="mt-4">
						Outside of coding, I spend my time at the gym and cycling.
					</p>
					<div className="mt-8 flex items-center gap-2 text-sm  ">
						<MapPinIcon className="h-4 w-4" weight="fill" />
						<span>Poland</span>
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
