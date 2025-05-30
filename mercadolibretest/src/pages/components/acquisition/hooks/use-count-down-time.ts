import { useEffect, useState } from "react";

const useCountDownTime = (seconds: number) => {
	const [secondsLeft, setSecondsLeft] = useState(seconds);

	useEffect(() => {
		if (secondsLeft <= 0) return;

		const interval = setInterval(() => {
			setSecondsLeft((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [secondsLeft]);

	const hrs = Math.floor(secondsLeft / 3600);
	const mins = Math.floor((secondsLeft % 3600) / 60);
	const secs = secondsLeft % 60;

	return `${hrs.toString().padStart(2, "0")}:${mins
		.toString()
		.padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

export default useCountDownTime;
