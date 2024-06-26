"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./Card/Card";
import { ImageTypeArray } from "@/types/Images";

type CarouselCustomProps = {
	products: ImageTypeArray;
};

export default function CarouselCustom({ products }: CarouselCustomProps) {
	return (
		<>
			<Carousel className="w-full transition-all">
				<CarouselContent className="">
					{products.map((item, index) => {
						return (
							<CarouselItem
								className="basis-48 md:basis-64 md:pl-4"
								key={index}
							>
								<Card image={item} />
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselPrevious className="hidden lg:flex" />
				<CarouselNext className="hidden lg:flex" />
			</Carousel>
		</>
	);
}
