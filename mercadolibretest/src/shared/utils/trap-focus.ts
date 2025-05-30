const trapFocus = (element: HTMLElement | null, event: KeyboardEvent) => {
	const focusableElements =
		'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
	// select the modal by it's id
	const modal = element;
	let firstFocusableElement, focusableContent, lastFocusableElement;

	if (modal) {
		// get first element to be focused inside modal
		focusableContent = modal.querySelectorAll(focusableElements);
		firstFocusableElement = focusableContent[0];
		// get last element to be focused inside modal
		lastFocusableElement =
			focusableContent &&
			focusableContent.length > 0 &&
			focusableContent[focusableContent.length - 1];
	}

	const isTabPressed = event.key === "Tab" || event.keyCode === 9;

	if (!isTabPressed) {
		return;
	}

	if (document) {
		if (
			event &&
			event.shiftKey &&
			lastFocusableElement &&
			firstFocusableElement
		) {
			// if shift key pressed for shift + tab combination
			if (document.activeElement === firstFocusableElement) {
				// add focus for the last focusable element
				(lastFocusableElement as HTMLElement)?.focus();
				event.preventDefault();
			}
		} else {
			// if tab key is pressed
			if (document.activeElement === lastFocusableElement) {
				// if focused has reached to last focusable element then focus first focusable element after pressing tab
				// add focus for the first focusable element
				(firstFocusableElement as HTMLElement)?.focus();
				event.preventDefault();
			}
		}
	}
};

export default trapFocus;
