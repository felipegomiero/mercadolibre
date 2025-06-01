import { useEffect, useState } from "react";

const SIZE_MIN_WIDTH_SCREEN_DESKTOP = 1024;
const SIZE_MIN_WIDTH_SCREEN_TABLET = 768;

const getResolution = () => {
	const screenWidth = window.innerWidth;

	if (screenWidth >= SIZE_MIN_WIDTH_SCREEN_DESKTOP) {
		return "desktop";
	} else if (
		screenWidth >= SIZE_MIN_WIDTH_SCREEN_TABLET &&
		screenWidth < SIZE_MIN_WIDTH_SCREEN_DESKTOP
	) {
		return "tablet";
	} else {
		return "mobile";
	}
};

interface BreakpointReturn {
	isDesktop: boolean;
	isTablet: boolean;
	isMobile: boolean;
}

const useBreakpoint = (): BreakpointReturn => {
	const [resolution, setResolution] = useState(getResolution());

	useEffect(() => {
		const handleResize = () => {
			setResolution(getResolution());
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return {
		isDesktop: resolution === "desktop",
		isTablet: resolution === "tablet",
		isMobile: resolution === "mobile",
	};
};

export default useBreakpoint;
