import styled from "@emotion/styled";
import type { ISeparator } from "./types";

export const Separator = styled.div(
	({ vertical, margin, color }: ISeparator) => `
	${
		vertical
			? `
		width: 1px;
		display: inline-block;
	`
			: `
		width: 100%;
  	height: 1px;
	`
	}
  background-color: ${color};
  margin: ${margin};
`
);
