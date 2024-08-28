import Image from "next/image";

type BeansImgProps = {
	url: string;
	alt: string;
};
export default function BeansImg({ url, alt }: BeansImgProps) {
	return (
		<div className="w-full h-full relative">
			<Image
				src={url}
				alt={alt}
				sizes="100%"
				fill
				style={{
					objectFit: "cover",
					height: "100%",
				}}
				priority
			/>
		</div>
	);
}
