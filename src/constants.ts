import type { Project } from "./types";

export const PROJECTS = [
	{
		title: "ZeroWaste",
		description:
			"A demonstration eco-marketplace where users can give away unwanted items, browse listings, express interest in receiving them, and leave reviews after a successful exchange. The platform also includes user profiles, notifications, an Eco Hub with blog posts, and admin management tools.",
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
		"A demonstration eco-marketplace that allows users to give away unwanted items, connect with people interested in receiving them, and build trust through user reviews.",

	longDescription:
		"ZeroWaste is a full-stack demonstration application focused on promoting reuse and reducing waste. Users can create item listings with a title, description, condition, category, pickup city, visibility status, and up to five images. Other users can browse available items and express their interest in receiving them. Item owners can accept or reject offers, and once an offer is accepted, the item is marked as given while all other offers are automatically rejected. The interested user receives a real-time notification and can leave a star rating and written review after the exchange. User profiles provide an overview of their activity, including ratings, reviews, listed items, available and given-away items, and recent listings. The platform also includes an Eco Hub with blog posts that can be created, edited, and deleted by users with the Writer role. Administrators can manage user accounts and item categories. Authentication is supported through Google and GitHub.",

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
},{
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

		images: [
			{ url: "/media/admin-home.jpg", alt: "Admin homepage" },
			{ url: "/media/admin-dashboard.jpg", alt: "Admin dashboard" },
			{
				url: "/media/admin-dashboard-search.jpg",
				alt: "Admin dashboard with search",
			},
			{
				url: "/media/admin-dashboard-type-filter.jpg",
				alt: "Admin dashboard filter by user type",
			},
			{
				url: "/media/admin-dashboard-user-actions.jpg",
				alt: "Admin dashboard user account actions",
			},
			{
				url: "/media/admin-dashboard-delete-user.jpg",
				alt: "Admin dashboard delete user modal",
			},
			{ url: "/media/login.jpg", alt: "Login screen" },
			{ url: "/media/teacher-home.jpg", alt: "Teacher homepage" },
			{ url: "/media/teacher-quiz-list.jpg", alt: "Teacher quiz list page" },
			{ url: "/media/teacher-new-quiz.jpg", alt: "Teacher new quiz form" },
			{
				url: "/media/teacher-user-joining-quiz.jpg",
				alt: "Teacher user joining quiz page",
			},
			{
				url: "/media/teacher-user-waiting-room.jpg",
				alt: "Teacher user start quiz",
			},
			{
				url: "/media/teacher-user-answers-submission.jpg",
				alt: "Teacher user answer submission screen",
			},
			{
				url: "/media/teacher-user-in-between-questions.jpg",
				alt: "Teacher user in between questions",
			},
			{
				url: "/media/teacher-user-quiz-finished.jpg",
				alt: "Teacher user final scoreboard",
			},
			{
				url: "/media/teacher-quiz-results-review.jpg",
				alt: "Teacher review quiz results",
			},
			{ url: "/media/user-home.jpg", alt: "User homepage" },
		],
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
		images: [{ url: "/media/homepage.png", alt: "Dashboard of homepage" }],
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
