"use client";

interface ButtonProps {
	type?: "submit" | "button" | "reset" | undefined;
	text?: string;
	color?: string;
}

export default function Button({ color, text, type }: ButtonProps) {
	return (
		<button
			className={`${color} text-black text-xs rounded-full py-2 px-4 hover:bg-[var(--brown-primary)] transition-all active:scale-100`}
			type={type}
		>
			{text}
		</button>
	);
}
