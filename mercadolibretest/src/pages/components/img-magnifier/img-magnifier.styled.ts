import styled from "@emotion/styled";
import { mediaMobile } from "../../../shared/theme/media-sizes";

interface ImgContainer {
	width?: string;
	height?: string;
	src: string;
}

interface BackgroundImg {
	src: string;
	zoom: number;
	showMagnifier: boolean;
	magnifierSize: number;
	x: number;
	y: number;
	imgWidth: number;
	imgHeight: number;
}

export const Wrapper = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
`;

export const MagnifierGlass = styled.div(
	({
		showMagnifier,
		magnifierSize,
		x,
		y,
		src,
		imgWidth,
		imgHeight,
		zoom,
	}: BackgroundImg) => `
	display: ${showMagnifier ? "block" : "none"};
  position: absolute;
  pointer-events: none;
	border-radius: 50%;
  height: ${magnifierSize}px;
  width: ${magnifierSize}px;
  top: ${y - magnifierSize / 2}px;
  left: ${x - magnifierSize / 2}px;
  opacity: 1;
  border: 1px solid lightgray;
  background-color: transparent;
  background-image: url('${src}');
  background-repeat: no-repeat;
  background-size: ${!imgWidth ? "auto" : `${imgWidth * zoom}px`} ${
		!imgHeight ? "auto" : `${imgHeight * zoom}px`
	};
  background-position-x: ${-x * zoom + magnifierSize / 2}px;
  background-position-y: ${-y * zoom + magnifierSize / 2}px;
`
);

export const ImgContainer = styled.div<ImgContainer>`
	${({ width }) => `width: ${width || "auto"};`}
	${({ height }) => `height: ${height || "auto"};`}
	min-height: 450px;
	min-width: 35vw;
	display block;
  background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	${({ src }) => `background-image: url('${src}');`}

	@media (${mediaMobile}) {
		min-width: 90vw;
	}
`;
