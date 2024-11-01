import React, { useState } from "react";
import Warning from "./Warning";

type TextProps = {
	text: string;
	setText: React.Dispatch<React.SetStateAction<string>>;
};

export default function Textarea({
	text,
	setText,
}: TextProps): React.JSX.Element {
	const [warningText, setWarningText] = useState<string>("");

	function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
		let newText = e.target.value;
		if (newText.includes("<script>")) {
			newText = newText.replace("<script>", "");
			setWarningText("No script tags allowed!");
		} else {
			setWarningText("");
		}
		setText(newText);
	}

	return (
		<div className="textarea">
			<textarea
				value={text}
				placeholder="Enter text here"
				onChange={handleChange}
			/>
			{warningText ? <Warning warningText={warningText} /> : ""}
		</div>
	);
}
