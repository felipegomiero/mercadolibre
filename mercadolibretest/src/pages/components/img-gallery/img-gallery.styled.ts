import type { Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 16px;
	gap: 8px;
`;

export const ImgCard = styled.div(
	({
		theme,
		isCurrent,
		bgSrc,
	}: {
		theme: Theme;
		isCurrent: boolean;
		bgSrc: string;
	}) => `
	border: ${
		isCurrent
			? `2px dashed ${theme.secondary[500]}`
			: `1px solid ${theme.neutral[600]}`
	};
	background-color: transparent;
	background-image: url("${bgSrc}");
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	cursor: pointer;
	width: 56px;
  height: 56px;
`
);
