export interface Project {
	slug: string;
	title: string;
	description: string;
	longDescription: string;
	tags: string[];
	link?: string;
	repo?: repo | repo[];
	images?: { url: string; alt: string }[];
	year: string;
	role: string;
}

type repo = { href: string; name?: string };
