import Button from "@/components/Button/Button";
import Image from "next/image";
import Heart from "../Heart";
import { ImageType } from "@/types/Images";

type CardProps = {
	image: ImageType;
};

export default function Card({ image }: CardProps) {
	return (
		<div className="bg-[var(--brown-primary)] p-2 rounded">
			<div className="relative">
				<Heart />
				<Image
					src={image.url}
					sizes="100vw"
					style={{
						width: "100%",
						borderRadius: "4px",
						filter: "saturate(150%) brightness(90%)",
						position: "relative",
					}}
					className="h-[240px] md:min-h-[336px]"
					width={500}
					height={300}
					quality={100}
					alt={image.alt}
				/>

				<div>
					<h4 className="text-base font-semibold text-[var(--brown-secundary)]">
						{image.title}
					</h4>
					<p className="h-8 text-xs font-light box-border overflow-hidden">
						{image.description}
					</p>
					<div className="flex items-center justify-between pt-1">
						<span className="text-base text-[var(--brown-secundary)] font-semibold">
							{image.price}$
						</span>

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
