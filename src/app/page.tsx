import Banner from "@/components/Banner/Banner";
import Coffees from "@/components/Banner/Coffees";
import Catalogo from "@/components/Catalogo/Catalogo";
import Hero from "@/components/Hero/Hero";

export default function Home() {
	return (
		<>
			<Hero />
			<Banner>
				<Coffees />
			</Banner>
			<Catalogo />
		</>
	);
}
