import { Link } from "@tanstack/react-router";
import { memo } from "react";

export const NavLink = memo(function NavLink({
	to,
	label,
}: {
	to: string;
	label: string;
}) {
	return (
		<Link
			to={to}
			className="group relative text-sm font-mono   transition-colors duration-200 hover:text-[#FAFAF9]"
		>
			{label}
			<span className="animate-underline absolute -bottom-0.5 left-0 h-px w-0 bg-[#A3E635] transition-none" />
		</Link>
	);
});
