interface TitleProps {
	title: string;
}

export default function Title({ title }: TitleProps) {
	return (
		<span className="text-[8px] font-normal text-[var(--brown-secundary)] sm:text-xs ">
			{title}
		</span>
	);
}
