"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./Card/Card";

export default function CarouselCustom() {
	return (
		<>
			<Carousel className="w-full max-w-sm">
				<CarouselContent className="w-[150px] -ml-2 md:-ml-4">
					<CarouselItem className="pl-2 md:pl-4">
						<Card />
					</CarouselItem>
					<CarouselItem className="pl-2 md:pl-4">
						<Card />
					</CarouselItem>
					<CarouselItem className="pl-2 md:pl-4">
						<Card />
					</CarouselItem>
					<CarouselItem className="pl-2 md:pl-4">
						<Card />
					</CarouselItem>
					<CarouselItem className="pl-2 md:pl-4">
						<Card />
					</CarouselItem>
					<CarouselItem className="pl-2 md:pl-4">
						<Card />
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious className="hidden" />
				<CarouselNext className="hidden" />
			</Carousel>
		</>
	);
}
