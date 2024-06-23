import Image from "next/image";
export default function Background() {
	return (
		<>
			<div
				className=" relative w-full min-h-60 bg-[url(/coffie-bg.jpg)] bg-center bg-cover filter brightness-50 transition-all ease-out md:min-h-[400px]"
				role="img"
			></div>
			{/* <Image
				src={"/coffie-bg.jpg"}
				alt="coffie"
				sizes="100vw"
				style={{
					width: "100%",
					height: "auto",
					borderRadius: "4px",
					filter: "saturate(150%)",
				}}
				quality={100}
				width={500}
				height={300}
			/> */}
		</>
	);
}
