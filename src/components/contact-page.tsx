import ContactSection from "./contact-section";
import HomeButton from "./home-button";

export default function ContactPage() {
	return (
		<main
			className="mx-auto max-w-6xl px-6 pt-32 pb-16 scroll-mx-auto"
			style={{ scrollbarGutter: "stable" }}
		>
			<HomeButton />

			<ContactSection />
		</main>
	);
}
