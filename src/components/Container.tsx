import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Container(): React.JSX.Element {
	const [text, setText] = useState<string>("");
	const numberOfCharacters = text.length;
	const instagramCharactersLeft: number = 280 - text.length;
	const facebookCharactersLeft: number = 2200 - text.length;
	const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;

	return (
		<main className="container">
			<Textarea text={text} setText={setText} />
			<Stats
				numberOfCharacters={numberOfCharacters}
				instagramCharactersLeft={instagramCharactersLeft}
				facebookCharactersLeft={facebookCharactersLeft}
				numberOfWords={numberOfWords}
			/>
		</main>
	);
}
