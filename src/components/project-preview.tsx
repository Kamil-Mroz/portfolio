import { useIsMobile } from "@/hooks/useMobile";
import type { Project } from "@/types";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";

type ProjectPreviewProps = {
	images: NonNullable<Project["images"]>;
};
export default function ProjectPreview({ images }: ProjectPreviewProps) {
	const isMobile = useIsMobile();
	return (
		<div className="py-10 md:py-2 md:px-10">
			<Carousel
				opts={{
					align: "start",
					loop: false,
				}}
				className="w-full  mx-auto"
				orientation={isMobile ? "vertical" : "horizontal"}
			>
				<CarouselContent className="h-[55vh] sm:[65vh] md:h-auto]">
					{images.map((image) => (
						<CarouselItem className="basis-full grid" key={image.url}>
							<div className="overflow-hidden">
								<img
									src={image.url}
									alt={image.alt}
									className="h-full w-full object-contain"
									loading="lazy"
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselPrevious className="rounded-sm" />
				<CarouselNext className="rounded-sm" />
			</Carousel>
		</div>
	);
}
