import { EnvelopeIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import HeroName from "./hero-name";

export default function HeroSection() {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					observer.disconnect();
					setVisible(true);
				}
			},
			{ threshold: 0.1 },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={ref}
			aria-label="Introduction"
			className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6"
		>
			<div
				className={`text-center ${visible ? "animate-fade-in" : "opacity-0"}`}
			>
				<HeroName />
				<p className="mt-6 text-lg   sm:text-xl">
					Developer · Designer · Builder
				</p>
				<p className="mx-auto mt-4 max-w-xl  ">
					Fast, accessible interfaces with clean code and deliberate design.
					Focused on React, TypeScript, and everything in between.
				</p>
				<div className="mt-10 flex items-center justify-center gap-4">
					<Link
						to="/contact"
						className="inline-flex items-center gap-2 rounded-full bg-[#A3E635] px-6 py-3 font-mono text-sm font-medium text-background transition-colors hover:bg-[#B8F050]"
					>
						<EnvelopeIcon className="h-4 w-4" weight="fill" />
						Get in touch
					</Link>
					<a
						href="https://github.com/Kamil-Mroz"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full border border-[#262626] px-6 py-3 font-mono text-sm font-medium text-[#FAFAF9] transition-colors hover:border-[#A3E635] hover:text-[#A3E635]"
					>
						<GithubLogoIcon className="h-4 w-4" weight="fill" />
						View GitHub
					</a>
				</div>
			</div>
		</section>
	);
}
