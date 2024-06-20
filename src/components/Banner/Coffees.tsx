import Chocolate from "./Chocolate";
import CoffeIcon from "./CoffeIcon";
import CupCoffie from "./CupCoffe";
import Milk from "./Milk";
import Title from "./Title";

export default function Coffees() {
	return (
		<ul className="w-4/5 h-full mx-auto flex justify-between items-center">
			<li className="flex flex-col items-center">
				<CoffeIcon />
				<Title title="Hot Coffee" />
			</li>
			<li className="flex flex-col items-center">
				<Milk />
				<Title title="Cold Coffee" />
			</li>
			<li className="flex flex-col items-center">
				<CupCoffie />
				<Title title="Cup-coffee" />
			</li>
			<li className="flex flex-col items-center">
				<Chocolate />
				<Title title="Deseert" />
			</li>
		</ul>
	);
}
