import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useEffect } from "react";

import "../styles.css";
import Footer from "#/components/footer";
import Header from "#/components/header";
import HomeButton from "#/components/home-button";

export const Route = createRootRoute({
	component: RootComponent,
	notFoundComponent: () => (
		<section className="mx-auto max-w-6xl px-6 py-32 w-full h-full">
			<HomeButton />
			<div className="grid place-content-center h-full">
				<h2 className="mt-8 text-4xl font-bold tracking-tight text-[#FAFAF9] sm:text-5xl">
					NOT FOUND
				</h2>
			</div>
		</section>
	),
});

function RootComponent() {
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const applyScheme = (dark: boolean) => {
			document.documentElement.classList.toggle("dark", dark);
		};
		applyScheme(mediaQuery.matches);
		const handler = (e: MediaQueryListEvent) => applyScheme(e.matches);
		mediaQuery.addEventListener("change", handler);
		return () => mediaQuery.removeEventListener("change", handler);
	}, []);

	return (
		<div className="min-h-screen bg-[#0A0A0A] text-[#FAFAF9] flex flex-col dark:bg-zinc-950 dark:text-zinc-100">
			<Header />
			<div className="flex-1">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
