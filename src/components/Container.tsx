import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Container(): React.JSX.Element {
	return (
		<main className="container">
			<Textarea />
			<Stats />
		</main>
	);
}
