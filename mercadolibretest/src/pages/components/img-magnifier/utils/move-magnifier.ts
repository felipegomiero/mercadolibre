const moveMagnifier = (
	event: MouseEvent | TouchEvent,
	img: HTMLImageElement | null,
	magnifier: HTMLDivElement | null,
	zoom: number
) => {
	event.preventDefault();
	if (img && magnifier) {
		const rect = img.getBoundingClientRect();
		let x = 0,
			y = 0;

		if ("touches" in event && event.touches.length > 0) {
			x = event.touches[0].clientX - rect.left;
			y = event.touches[0].clientY - rect.top;
		} else if ("clientX" in event) {
			x = event.clientX - rect.left;
			y = event.clientY - rect.top;
		}

		x = Math.max(Math.min(x, rect.width), 0);
		y = Math.max(Math.min(y, rect.height), 0);

		const bw = 2; // border width
		const w = magnifier.offsetWidth / 2;
		const h = magnifier.offsetHeight / 2;

		magnifier.style.left = `${x - w}px`;
		magnifier.style.top = `${y - h}px`;
		magnifier.style.backgroundPosition = `-${x * zoom - w + bw}px -${
			y * zoom - h + bw
		}px`;
	}
};

export default moveMagnifier;
