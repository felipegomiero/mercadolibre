const getCursorPosition = (
	event: MouseEvent | TouchEvent,
	imgRefCurrent: HTMLDivElement | null
) => {
	const imgRect = imgRefCurrent?.getBoundingClientRect();
	let xValue = 0;
	let yValue = 0;

	if (imgRect) {
		/* calculates x and y relative to element touched considering page scrolling */
		if ("touches" in event && event.touches.length > 0) {
			xValue = event.touches[0].pageX - imgRect.left - window.pageXOffset;
			yValue = event.touches[0].pageY - imgRect.top - window.pageYOffset;
		} else if ("pageX" in event) {
			xValue = event.pageX - imgRect.left - window.pageXOffset;
			yValue = event.pageY - imgRect.top - window.pageYOffset;
		}
	}
	return { x: xValue, y: yValue };
};

export default getCursorPosition;
