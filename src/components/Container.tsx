import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import { FACEBOOK_MAX_CHARS, INSTAGRAM_MAX_CHARS } from "../constants";

export default function Container(): React.JSX.Element {
	const [text, setText] = useState<string>("");
	const numberOfCharacters = text.length;
	const instagramCharactersLeft: number = INSTAGRAM_MAX_CHARS - text.length;
	const facebookCharactersLeft: number = FACEBOOK_MAX_CHARS - text.length;
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
