import Button from "@/components/Button/Button";
import Image from "next/image";
export default function Card() {
	return (
		<div className="bg-[var(--brown-primary)] p-2 rounded">
			<div>
				<Image
					src={"/coffe-late.jpg"}
					sizes="100vw"
					style={{
						width: "100%",
						height: "auto",
						borderRadius: "4px",
						filter: "saturate(150%)",
					}}
					width={500}
					height={300}
					alt="chocolate"
				/>
				<div>
					<h4 className="text-base font-semibold text-[var(--brown-secundary)]">
						Titulo
					</h4>
					<p className="text-xs font-light">Descripcion</p>
					<div className="flex items-center justify-between pt-1">
						<span className="text-base font-semibold">199$</span>

						<Button
							text="Order Now"
							styles="bg-[var(--brown-secundary)] text-white text-xs font-light px-2 py-1 rounded-sm hover:bg-[--brown-terciary]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
