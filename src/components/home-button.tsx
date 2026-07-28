import { ArrowLeftIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

export default function HomeButton() {
	return (
		<Link
			to="/"
			className="inline-flex items-center gap-2 text-sm font-mono   transition-colors hover:text-[#A3E635]"
		>
			<ArrowLeftIcon className="h-4 w-4" weight="bold" />
			Back
		</Link>
	);
}
