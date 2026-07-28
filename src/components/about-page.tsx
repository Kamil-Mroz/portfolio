import AboutSection from "./about-section";
import ExperienceSection from "./experience-section";
import HomeButton from "./home-button";

export default function AboutPage() {
	return (
		<main
			className="mx-auto max-w-6xl px-6 pt-32 pb-16 scroll-mx-auto"
			style={{ scrollbarGutter: "stable" }}
		>
			<HomeButton />
			<AboutSection />
			<ExperienceSection />
		</main>
	);
}
