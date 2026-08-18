import type { Project } from "./types";

export const PROJECTS = [
	{
		title: "ZeroWaste",
		description:
			"A full-stack marketplace and eco-education platform with item trading, reviews, admin dashboard, and an eco-hub for blogs and quizzes - built with React, Spring Boot, and WebSocket support.",
		tags: [
			"React",
			"Spring Boot",
			"TanStack Router",
			"Tailwind CSS",
			"TypeScript",
			"Zustand",
			"WebSocket",
			"PostgreSQL",
		],
		slug: "zero-waste",
	},
	{
		title: "Inz",
		description:
			"A real-time live quiz platform enabling teachers to create quizzes and students to compete via PIN code with live leaderboards.",
		tags: ["React", "TanStack Router", "Tailwind CSS"],
		slug: "inz",
	},
	{
		title: "Homelab",
		description:
			"A self-hosted infrastructure environment running Docker services on repurposed hardware, with Traefik, Cloudflare, DNS, monitoring, backups, and automated container management.",
		tags: [
			"Docker",
			"Docker Compose",
			"Traefik",
			"Cloudflare",
			"Linux",
			"DNS",
			"Networking",
			"Monitoring",
		],
		slug: "homelab",
	},
	{
		title: "Portfolio",
		description:
			"A single-page personal site built with TanStack Router, React, and Tailwind CSS.",
		tags: ["React", "TanStack Router", "Tailwind CSS"],
		slug: "portfolio",
	},
] as const;

export const SKILLS = [
	"TypeScript",
	"React",
	"Zustand",
	"Zod",
	"TanStack Router",
	"Tailwind CSS",
	"Node.js",
	"PostgreSQL",
	"Docker",
	"Git",
	"Vitest",
	"RestTestClient",
	"JUnit",
	"Mockito",
] as const;

export const EXPERIENCES = [
	{
		role: "Helpdesk",
		company:
			"Provided first-line technical support, troubleshooting hardware and software issues, and configuring computers, printers, and user accounts. Customized an existing GLPI plugin in PHP to meet company requirements, improving equipment issuance report generation.",
		period: "December 2025",
		description: "",
	},
	{
		role: "Student",
		company: "Bialystok University of Technology",
		period: "2022 - 2026",
		description: "Computer Science Engineer ",
	},
] as const;

export const PROJECTS_DETAILS: Project[] = [
	{
		slug: "zero-waste",
		title: "ZeroWaste",
		description:
			"A full-stack eco-marketplace and education platform enabling users to trade items, write reviews, and learn sustainability content.",
		longDescription:
			"A full-stack application built with Spring Boot backend and React frontend. Features include a peer-to-peer marketplace with item listings, offers, and wishlist; user reviews system; admin dashboard for user and category management; eco-hub with blog posts and quizzes; real-time WebSocket notifications and a responsive UI build with Tailwind CSS with dark mode support.",
		tags: [
			"React",
			"Spring Boot",
			"Mockito",
			"JUnit",
			"RestTestClient",
			"TanStack Router",
			"Tailwind CSS",
			"TypeScript",
			"Zustand",
			"WebSocket",
			"PostgreSQL",
		],
		link: "https://zw.kamilpm.com",
		year: "2026",
		role: "Solo",
		repo: [
			{
				href: "https://github.com/Kamil-Mroz/zero-waste-backend",
				name: "Backend",
			},
			{
				href: "https://github.com/Kamil-Mroz/zero-waste-frontend",
				name: "Frontend",
			},
		],
	},
	{
		slug: "inz",
		title: "Inz",
		description:
			"A full-stack real-time live quiz platform for the Faculty of Computer Science at Białystok University of Technology, enabling teachers to create quizzes, host live sessions, and students to compete with instant leaderboards.",
		longDescription:
			"A full-stack monorepo application built with Turborepo, Express 5, Bun, and React 19. Features include quiz creation with multiple question types (single choice, multiple choice, true/false), live real-time quiz sessions joinable via 6-digit PIN code, Socket.IO-driven game loop with countdown timers and live scoreboards, a scoring system based on correctness and speed, detailed session results and per-question statistics, role-based access control (admin, teacher, student), Better Auth email/password authentication, oRPC for end-to-end type-safe RPC, TanStack Query for server state, TanStack Form + Zod v4 for validation, shadcn/ui components, Drizzle ORM with PostgreSQL, Scalar Express API Reference for OpenAPI docs, and comprehensive testing with Vitest + Supertest. Includes dark mode, toast notifications, command palette, and drawer UI patterns.",
		tags: [
			"React",
			"Express 5",
			"TanStack Router",
			"Tailwind CSS",
			"TypeScript",
			"TanStack React Query",
			"Socket.IO",
			"PostgreSQL",
			"Drizzle ORM",
			"Better Auth",
			"Vitest",
			"oRPC",
			"Turborepo",
			"Zod v4",
			"shadcn/ui",
		],
		year: "2026",
		role: "Solo",
		repo: { href: "https://github.com/Kamil-Mroz/inzynierka" },
	},
	{
		slug: "homelab",
		title: "Homelab",
		description:
			"A self-hosted infrastructure environment running Docker services on repurposed hardware, with reverse proxying, DNS, monitoring, backups, and secure external access.",
		longDescription:
			"A personal self-hosted homelab running on a repurposed Intel i5-6500 PC with 8 GB of RAM, SSD and HDD storage. The infrastructure is managed with Docker Compose and includes Traefik as a reverse proxy with automatic TLS certificates, Cloudflare Tunnel for external access, Technitium for local DNS and ad blocking, Homepage for service discovery and dashboards, Uptime Kuma for monitoring, Dozzle for container logs, Watchtower for automated updates, ZeroByte for backups, Immich for personal photo storage, Vaultwarden for password management, and several developer and utility services. Docker API access is isolated through a dedicated socket proxy, while shared Docker networks provide separation between services. The configuration is organized into individual Compose files and combined through a root Compose file, with secrets and runtime data kept outside version control.",
		tags: [
			"Docker",
			"Docker Compose",
			"Traefik",
			"Cloudflare",
			"Linux",
			"DNS",
			"Networking",
			"Monitoring",
			"Self-hosting",
		],
		year: "2026",
		role: "Solo",
		repo: { href: "https://github.com/Kamil-Mroz/homelab" },
	},
	{
		slug: "portfolio",
		title: "Portfolio",
		description:
			"A single-page personal site built with TanStack Router, React, and Tailwind CSS.",
		longDescription:
			"This portfolio site - built from scratch with TanStack Router for file-based routing, React for the UI, and Tailwind CSS for styling. Features include a dark theme with acid-green accents, and responsive layouts.",

		tags: ["React", "TanStack Router", "Tailwind CSS", "TypeScript"],
		year: "2026",
		link: "https://portfolio.kamilpm.com",
		repo: { href: "https://github.com/Kamil-Mroz/portfolio" },
		role: "Solo",
	},
] as const;
