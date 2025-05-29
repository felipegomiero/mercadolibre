import type React from "react";
import * as Styled from "./img-magnifier.styled";
import { useState } from "react";

interface IImgMagnifier extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	imgSize?: {
		width: number;
		height: number;
	};
	magnifierSize?: number;
	zoom?: number;
	alt: string;
}

const ImgMagnifier: React.FC<IImgMagnifier> = ({
	zoom = 1.5,
	imgSize,
	magnifierSize = 250,
	src,
	alt,
}) => {
	const [[x, y], setXY] = useState([0, 0]);
	const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
	const [showMagnifier, setShowMagnifier] = useState(false);

	const onMouseLeave = () => setShowMagnifier(false);

	const onMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
		const elem = event.currentTarget;
		const { top, left } = elem.getBoundingClientRect();
		const x = event.pageX - left - window.pageXOffset;
		const y = event.pageY - top - window.pageYOffset;
		setXY([x, y]);
	};

	const onMouseEnter = (event: React.MouseEvent<HTMLImageElement>) => {
		const elem = event.currentTarget;
		const { width, height } = elem.getBoundingClientRect();
		setSize([width, height]);
		setShowMagnifier(true);
	};

	return (
		<Styled.Wrapper>
			<Styled.Img
				width={imgSize?.width}
				height={imgSize?.height}
				src={src}
				onMouseEnter={onMouseEnter}
				onMouseMove={onMouseMove}
				onMouseLeave={onMouseLeave}
				alt={alt}
			/>
			<Styled.MagnifierGlass
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
