import HeaderCard from "./HeaderCard";

export default function Card() {
	return (
		<article className=" bg-[var(--brown-primary)] rounded shadow-sm py-4 px-3 text-black">
			<div>
				<HeaderCard />
				<p className="text-xs font-light mt-2">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
					possimus ea cum nemo provident inventore in ex itaque impedit ad quos,
					magnam qui tempore dignissimos voluptatibus minima mollitia, ratione,
					nihil voluptate!
				</p>
			</div>
		</article>
	);
}
