type TitleProps = {
	text: string;
};

export default function Title({ text }: TitleProps) {
	return (
		<h3 className="mb-4 text-center text-xl font-semibold text-[var(--brown-secundary)] uppercase">
			{text}
		</h3>
	);
}
