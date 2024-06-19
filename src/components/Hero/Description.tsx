import Button from "../Button/Button";

export default function Description() {
	return (
		<section className="absolute w-full" style={{ top: "40%" }}>
			<div className="w-4/5 mx-auto">
				<h3 className="flex font-semibold lg:text-2xl">Welcome!</h3>
				<h1 className="flex text-2xl font-semibold pb-1 lg:text-4xl lg:pb-2">
					We serve the richest coffe in the city!
				</h1>
				<Button text="Order Now" color="bg-white" />
			</div>
		</section>
	);
}
