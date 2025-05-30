const formatCompactValue = (value: number): string => {
	const formatter = Intl.NumberFormat("br", { notation: "compact" });
	return formatter.format(value);
};

export default formatCompactValue;
