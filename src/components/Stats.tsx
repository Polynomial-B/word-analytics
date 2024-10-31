type StatProp = {
	label: string;
	number: number;
};

function Stat({ label, number }: StatProp): React.JSX.Element {
	return (
		<section className="stat">
			<span className="stat__number">{number}</span>
			<h2 className="second-heading">{label}</h2>
		</section>
	);
}

export default function Stats({
	numberOfCharacters,
}: {
	numberOfCharacters: number;
}): React.JSX.Element {
	return (
		<section className="stats">
			<Stat label={"Words"} number={0} />
			<Stat label={"Characters"} number={numberOfCharacters} />
			<Stat label={"Instagram"} number={0} />
			<Stat label={"Facebook"} number={0} />
		</section>
	);
}
