import type React from "react";
import * as Styled from "./img-magnifier.styled";
import { useState } from "react";

interface IImgMagnifier {
	src: string;
	imgSize?: {
		width: string;
		height: string;
	};
	magnifierSize?: number;
	zoom?: number;
}

const ImgMagnifier: React.FC<IImgMagnifier> = ({
	zoom = 1.5,
	imgSize,
	magnifierSize = 250,
	src,
}) => {
	const [[x, y], setXY] = useState([0, 0]);
	const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
	const [showMagnifier, setShowMagnifier] = useState(false);

	const onMouseLeave = () => setShowMagnifier(false);

	const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const elem = event.currentTarget;
		const { top, left } = elem.getBoundingClientRect();
		/* calculates image in glass position based on page size and scroll */
		const x = event.pageX - left - window.pageXOffset;
		const y = event.pageY - top - window.pageYOffset;
		setXY([x, y]);
	};

	const onMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
		const elem = event.currentTarget;
		/* sets image size */
		const { width, height } = elem.getBoundingClientRect();
		setSize([width, height]);
		setShowMagnifier(true);
	};

	return (
		<Styled.Wrapper>
			<Styled.ImgContainer
				role="img"
				width={imgSize?.width}
				height={imgSize?.height}
				src={src}
				onMouseEnter={onMouseEnter}
				onMouseMove={onMouseMove}
				onMouseLeave={onMouseLeave}
			/>
			<Styled.MagnifierGlass
				data-testid="magnifier-glass"
				showMagnifier={showMagnifier}
				magnifierSize={magnifierSize}
				x={x}
				y={y}
				src={src}
				imgWidth={imgWidth}
				imgHeight={imgHeight}
				zoom={zoom}
			/>
		</Styled.Wrapper>
	);
};

export default ImgMagnifier;
