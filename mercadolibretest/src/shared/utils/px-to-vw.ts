const pxToVw = (px: number): string => {
	const clientWidth = document ? document.documentElement.clientWidth : 320;
	const vw = (px / clientWidth) * 100;
	return `${vw.toFixed(4)}vw`;
};

export default pxToVw;
