import styled from "@emotion/styled";
import type { ITypographyProps } from "./types";
import type { Theme } from "@emotion/react";

export const GenericTextComponent = styled.span<ITypographyProps>(
	({
		theme,
		color,
		margin,
		pxFontSize,
	}: ITypographyProps & { theme: Theme }) => `
	color: ${color || theme.neutral[900]};
	margin: ${margin || "0"};
	font-size: ${pxFontSize || "16px"};
`
);
