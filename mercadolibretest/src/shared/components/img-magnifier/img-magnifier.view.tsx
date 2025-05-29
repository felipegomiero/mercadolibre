import type React from "react";
import * as Styled from "./img-magnifier.styled";
import { useState } from "react";

interface IImgMagnifier extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	imgSize?: {
		width: number;
		height: number;
	};
	magnifierHeight?: number;
	magnifierWidth?: number;
	zoom?: number;
}

const ImgMagnifier: React.FC<IImgMagnifier> = ({
	zoom = 2,
	imgSize = {
		width: 350,
		height: 500,
	},
	magnifierHeight = 200,
	magnifierWidth = 200,
	src,
}) => {
	const [[x, y], setXY] = useState([0, 0]);
	const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
	const [showMagnifier, setShowMagnifier] = useState(false);

	return (
		<Styled.Wrapper>
			<Styled.Img
				width={imgSize.width}
				height={imgSize.height}
				src={src}
				onMouseEnter={(e) => {
					const elem = e.currentTarget;
					const { width, height } = elem.getBoundingClientRect();
					setSize([width, height]);
					setShowMagnifier(true);
				}}
				onMouseMove={(e) => {
					const elem = e.currentTarget;
					const { top, left } = elem.getBoundingClientRect();
					const x = e.pageX - left - window.pageXOffset;
					const y = e.pageY - top - window.pageYOffset;
					setXY([x, y]);
				}}
				onMouseLeave={() => {
					setShowMagnifier(false);
				}}
				alt={"img"}
			/>
			<Styled.MagnifierGlass
				showMagnifier={showMagnifier}
				magnifierHeight={magnifierHeight}
				magnifierWidth={magnifierWidth}
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
