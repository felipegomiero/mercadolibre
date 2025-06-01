const pxToVh = (px: number): string => {
	const clientHeight = document.documentElement.clientHeight;
	const vw = (px * 100) / clientHeight;
	return `${vw.toFixed(4)}vw`;
};

export default pxToVh;
