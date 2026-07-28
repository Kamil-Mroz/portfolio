import type { Project } from "#/types";
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
	return (
		<div className="px-10">
			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				className="w-full  mx-auto"
			>
				<CarouselContent>
					{images.map((image) => (
						<CarouselItem className="" key={image.url}>
							<div className="mt-6 aspect-video overflow-hidden rounded-xl bg-[#1A1A1A]">
								<img
									src={image.url}
									alt={image.alt}
									className="h-full w-full object-cover"
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
