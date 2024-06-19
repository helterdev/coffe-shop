import Background from "./Background";
import Description from "./Description";
import Navbar from "./Navbar";

export default function Hero() {
	return (
		<section className="relative">
			<Background />
			<Navbar />
			<Description />
		</section>
	);
}
