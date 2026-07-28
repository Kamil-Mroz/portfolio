import { EnvelopeIcon, GithubLogoIcon } from "@phosphor-icons/react";

export default function Footer() {
	return (
		<footer className="border-t border-[#262626]">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
				<span className="font-mono text-xs  ">
					&copy; {new Date().getFullYear()} Kamil
				</span>
				<div className="flex items-center gap-6">
					<a
						href="https://github.com/Kamil-Mroz"
						target="_blank"
						rel="noopener noreferrer"
						className="  transition-colors hover:text-[#A3E635]"
						aria-label="GitHub"
					>
						<GithubLogoIcon className="h-5 w-5" weight="fill" />
					</a>
					<a
						href="mailto:kamilmp17@gmail.com"
						className="  transition-colors hover:text-[#A3E635]"
						aria-label="Email"
					>
						<EnvelopeIcon className="h-5 w-5" weight="fill" />
					</a>
				</div>
			</div>
		</footer>
	);
}
