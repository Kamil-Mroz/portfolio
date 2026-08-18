import { createFileRoute } from "@tanstack/react-router";
import WorkPage from "@/components/work-page";

export const Route = createFileRoute("/work/")({
	component: WorkPage,
});
