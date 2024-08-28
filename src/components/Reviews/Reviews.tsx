import Title from "../Catalogo/Title";
import Card from "./Card";
import ReviewCarousel from "./ReviewCarousel";

export default function Reviews() {
	return (
		<section>
			<div>
				<h5 className="text-[var(--brown-secundary)] text-center mt-4 mb-1 font italic font-extralight text-xs">
					Come and join
				</h5>
				<Title text="our happy customers" />
			</div>
			<ReviewCarousel />
		</section>
	);
}
