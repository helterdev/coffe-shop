import Card from "./Card";

function ReviewCarousel() {
	const array = new Array(3).fill(0);
	return (
		<div>
			<ul className="flex flex-col gap-2">
				{array.map((_, index) => (
					<li key={index}>
						<Card />
					</li>
				))}
			</ul>
		</div>
	);
}

export default ReviewCarousel;
