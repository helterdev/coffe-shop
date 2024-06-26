import { ImageTypeArray } from "@/types/Images";
import CarouselCustom from "./CarouselCustom";
import Title from "./Title";

const coffees: ImageTypeArray = [
	{
		url: "/coffe-1.jpg",
		alt: "ice coffe",
		title: "Lungo Coffe",
		description: "on espresso coffe drink, topped with a small",
		price: 19,
	},
	{
		url: "/coffe-2.jpg",
		alt: "coffe mountain",
		title: "Dalgona Coffe",
		description: "whipped coffee made using instant coffee",
		price: 15,
	},
	{
		url: "/coffe-3.jpg",
		alt: "black coffe",
		title: "Ice Coffe",
		description: "cool coffee is a beatiful instant",
		price: 14,
	},
	{
		url: "/coffe-late.jpg",
		alt: "coffe late",
		title: "Filter Coffee",
		description: "75%, coffee filter",
		price: 16,
	},
];

const desserts: ImageTypeArray = [
	{
		url: "/coffe-4.jpg",
		alt: "Cookie Chocolate",
		title: "Cookie Chocolate",
		description: "delicious chocolate cake with honey delicacy",
		price: 20,
	},
	{
		url: "/coffe-5.jpg",
		alt: "Brownie",
		title: "Brownie",
		description: "fine chocolate brownie with mint spices",
		price: 19,
	},
	{
		url: "/coffe-6.jpg",
		alt: "Cookie Cookies",
		title: "Cookie Cookies",
		description:
			"chocolate portions with crunchy cookie and filled with coconut",
		price: 36,
	},
	{
		url: "/coffe-7.jpg",
		alt: "Oreo Cake",
		title: "Oreo Cake",
		description: "Oreo cake with dark chocolate filled with grape delicacy",
		price: 59,
	},
];

export default function Catalogo() {
	return (
		<section className="carousel-main text-black">
			<div className="w-4/5 mx-auto my-6">
				<Title text="our special coffee" />
				<CarouselCustom products={coffees} />
			</div>
			<div className="w-4/5 mx-auto my-6">
				<Title text="our special dessert" />
				<CarouselCustom products={desserts} />
			</div>
		</section>
	);
}
