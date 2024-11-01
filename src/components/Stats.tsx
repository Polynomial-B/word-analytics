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

type StatsProp = {
	numberOfCharacters: number;
	instagramCharactersLeft: number;
	facebookCharactersLeft: number;
	numberOfWords: number;
};

export default function Stats({
	numberOfCharacters,
	instagramCharactersLeft,
	facebookCharactersLeft,
	numberOfWords,
}: StatsProp): React.JSX.Element {
	return (
		<section className="stats">
			<Stat label={"Words"} number={numberOfWords} />
			<Stat label={"Characters"} number={numberOfCharacters} />
			<Stat label={"Instagram"} number={instagramCharactersLeft} />
			<Stat label={"Facebook"} number={facebookCharactersLeft} />
		</section>
	);
}
