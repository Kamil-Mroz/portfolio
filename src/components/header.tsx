import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NavLink } from "./nav-link";

export default function Header() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 64);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav
			className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
				scrolled
					? "border-b border-[#262626] bg-[#0A0A0A]/80 backdrop-blur-md"
					: ""
			}`}
		>
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<Link to="/" className="font-mono text-sm font-bold text-[#A3E635]">
					Kamil.pm
				</Link>
				<div className="flex items-center gap-8">
					<NavLink to="/work" label="Work" />
					<NavLink to="/about" label="About" />
					<NavLink to="/contact" label="Contact" />
				</div>
			</div>
		</nav>
	);
}
