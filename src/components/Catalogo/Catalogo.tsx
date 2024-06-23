import CarouselCustom from "./CarouselCustom";
import Title from "./Title";

export default function Catalogo() {
	return (
		<section className="carousel-main text-black">
			<div className="w-4/5 mx-auto my-6">
				<Title />
				<CarouselCustom />
			</div>
		</section>
	);
}
