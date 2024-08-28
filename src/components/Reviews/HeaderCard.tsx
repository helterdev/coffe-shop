import Image from "next/image";
export default function HeaderCard() {
	return (
		<div className="flex justify-between">
			<div className="flex items-center">
				<div>
					<Image
						src={"/coffe-3.jpg"}
						width={40}
						height={40}
						alt="profile"
						className="rounded-full"
					/>
				</div>

				<div className="pl-2 flex flex-col ">
					<h4 className="text-xs font-semibold text-nowrap">Angela Gonzales</h4>
					<span className="text-[10px] ">Manager</span>
				</div>
			</div>
			<span className="text-[10px] pt-2">⭐⭐⭐⭐⭐</span>
		</div>
	);
}
