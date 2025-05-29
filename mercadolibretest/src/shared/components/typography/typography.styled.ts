import styled from "@emotion/styled";
import type { ITypographyProps } from "./types";
import type { Theme } from "@emotion/react";
import pxToRem from "../../utils/px-to-rem";

export const GenericTextComponent = styled.span<ITypographyProps>(
	({
		color,
		margin,
		pxFontSize,
		theme,
	}: ITypographyProps & { theme: Theme }) => `
	color: ${color || theme.neutral[900]};
	margin: ${margin || "0"};
	${pxFontSize ? `font-size: ${pxToRem(pxFontSize || 16)}` : ""};
`
);
