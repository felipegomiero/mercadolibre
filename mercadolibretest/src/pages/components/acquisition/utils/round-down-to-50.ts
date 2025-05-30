export const roundDownTo50 = (value: number): number => {
	const roundedVal = Math.floor(value / 50) * 50;
	return roundedVal > 10000 ? 9999 : roundedVal;
};
