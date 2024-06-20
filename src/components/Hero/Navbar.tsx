export default function Navbar() {
	return (
		<header className="absolute w-full top-0" style={{ minHeight: "40%" }}>
			<nav className="flex justify-between items-center w-4/5 mx-auto mt-2">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-menu-deep"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="#F1F0EE"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M4 6h16" />
						<path d="M7 12h13" />
						<path d="M10 18h10" />
					</svg>
				</div>
				<h2 className="text-transform-uppercase text-[var(--primary-white)] text-2xl font-normal">
					Coffee
				</h2>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-search"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="#F1F0EE"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
						<path d="M21 21l-6 -6" />
					</svg>
				</div>
			</nav>
		</header>
	);
}
