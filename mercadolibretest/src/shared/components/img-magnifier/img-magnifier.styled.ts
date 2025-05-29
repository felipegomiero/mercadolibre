import styled from "@emotion/styled";

interface BackgroundImg {
	src: string;
	zoom: number;
	showMagnifier: boolean;
	magnifierHeight: number;
	magnifierWidth: number;
	x: number;
	y: number;
	imgWidth: number;
	imgHeight: number;
}

export const Wrapper = styled.div`
	position: relative;
	display: inline-block;
`;

export const MagnifierGlass = styled.div(
	({
		showMagnifier,
		magnifierHeight,
		magnifierWidth,
		x,
		y,
		src,
		imgWidth,
		imgHeight,
		zoom,
	}: BackgroundImg) => `
	display: ${showMagnifier ? "" : "none"};
  position: absolute;
  pointer-events: none;
  height: ${magnifierHeight}px;
  width: ${magnifierWidth}px;
  top: ${y - magnifierHeight / 2}px;
  left: ${x - magnifierWidth / 2}px;
  opacity: 1;
  border: 1px solid lightgray;
  background-color: white;
  background-image: url('${src}');
  background-repeat: no-repeat;
  background-size: ${imgWidth * zoom}px ${imgHeight * zoom}px;
  background-position-x: ${-x * zoom + magnifierWidth / 2}px;
  background-position-y: ${-y * zoom + magnifierHeight / 2}px;
`
);

export const Img = styled.img`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	display block;
`;
