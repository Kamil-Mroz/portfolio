export default function SectionHeading({
	children,
	number,
}: {
	children: React.ReactNode;
	number: string;
}) {
	return (
		<div className="mb-12">
			<span className="font-mono text-xs  ">{number}</span>
			<h2 className="mt-2 text-3xl font-bold tracking-tight text-[#FAFAF9] sm:text-4xl">
				{children}
			</h2>
		</div>
	);
}
