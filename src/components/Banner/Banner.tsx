import React from "react";

interface BannerProps {
	children: React.ReactNode;
}

export default function Banner({ children }: BannerProps) {
	return (
		<section className="w-full h-32 bg-[var(--brown-primary)]">
			{children}
		</section>
	);
}
