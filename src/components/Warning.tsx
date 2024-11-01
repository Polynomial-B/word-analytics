type WarningProps = {
	warningText: string;
};

export default function Warning({ warningText }: WarningProps) {
	return <p>{warningText}</p>;
}
