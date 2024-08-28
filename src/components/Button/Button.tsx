"use client";

interface ButtonProps {
	type?: "submit" | "button" | "reset" | undefined;
	text?: string;
	styles?: string;
}

export default function Button({ styles, text, type }: ButtonProps) {
	//example of merge
	return (
		<button
			className={`${styles} transition-all active:scale-[0.9]`}
			type={type}
		>
			{text}
		</button>
	);
}
