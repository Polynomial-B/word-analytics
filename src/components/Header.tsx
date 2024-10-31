import Background from "./Background";

export default function Header(): React.JSX.Element {
	return (
		<header>
			<Background />
			<h1 className="first-heading">
				Word <span className="first-heading--thin">Analytics</span>
			</h1>
		</header>
	);
}
