import { EnvelopeIcon, GithubLogoIcon } from "@phosphor-icons/react";

export default function ContactSection() {
	return (
		<section className="mx-auto max-w-6xl px-6 py-32 w-full">
			<div className="text-center">
				<h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
					Let&apos;s work together
				</h2>
				<p className="mx-auto mt-6 max-w-lg  ">
					Have a project in mind or just want to say hello? I&apos;d love to
					hear from you.
				</p>
				<div className="mt-10 flex items-center justify-center gap-4">
					<a
						href="mailto:kamilmp17@gmail.com"
						className="inline-flex items-center gap-2 rounded-full bg-[#A3E635] px-6 py-3 font-mono text-sm font-medium text-background transition-colors hover:bg-[#B8F050]"
					>
						<EnvelopeIcon className="h-4 w-4" weight="fill" />
						Email
					</a>
					<a
						href="https://github.com/Kamil-Mroz"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full border border-[#262626] px-6 py-3 font-mono text-sm font-medium text-[#FAFAF9] transition-colors hover:border-[#A3E635] hover:text-[#A3E635]"
					>
						<GithubLogoIcon className="h-4 w-4" weight="fill" />
						GitHub
					</a>
				</div>
			</div>
		</section>
	);
}
