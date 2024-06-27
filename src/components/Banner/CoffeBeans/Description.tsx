import Button from "@/components/Button/Button";

export default function Description() {
	return (
		<div className="py-5">
			<h3 className="pb-2 font-semibold text-[var(--brown-secundary)] lg:text-3xl">
				Check out our best coffee beans.
			</h3>
			<Button
				text="Explore our products >>"
				type="button"
				styles="bg-[var(--brown-secundary)] px-4 py-2 text-xs font-light rounded-full hover:bg-[--brown-terciary]"
			/>
		</div>
	);
}
