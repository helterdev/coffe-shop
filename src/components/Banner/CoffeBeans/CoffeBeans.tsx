import BeansImg from "./BeansImg";
import Description from "./Description";

export default function CoffieBeans() {
	return (
		<div className="w-full h-full flex justify-between items-center">
			<div className="relative w-44 h-full hidden md:block">
				<BeansImg url="/granosdecafe2.png" alt="grano de cafe" />
			</div>
			<Description />
			<div className="relative w-44 h-full hidden md:block">
				<BeansImg url="/granosdecafe1.png" alt="grano de cafe" />
			</div>
		</div>
	);
}
