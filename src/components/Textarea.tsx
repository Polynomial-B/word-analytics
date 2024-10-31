import React, { useState } from "react";
import Warning from "./Warning";

export default function Textarea(): React.JSX.Element {
	const [text, setText] = useState("");
	const [warningText, setWarningText] = useState("");

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
		<div className="text-area">
			<textarea
				value={text}
				placeholder="Enter text here"
				onChange={handleChange}
			/>
			{warningText ? <Warning warningText={warningText} /> : ""}
		</div>
	);
}
