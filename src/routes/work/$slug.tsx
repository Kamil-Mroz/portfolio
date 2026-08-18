import { createFileRoute, notFound } from "@tanstack/react-router";
import ProjectDetailPage from "@/components/project-detail-page";
import { PROJECTS_DETAILS } from "@/constants";

export const Route = createFileRoute("/work/$slug")({
	component: ProjectDetailPage,
	beforeLoad: ({ params }) => {
		const project = PROJECTS_DETAILS.find((p) => p.slug === params.slug);
		if (!project) throw notFound();
		return project;
	},
});
