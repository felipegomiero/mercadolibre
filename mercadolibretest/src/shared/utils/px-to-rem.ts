const pxToRem = (px: number, base: number = 16): string => {
	return `${px / base}rem`;
};

export default pxToRem;
