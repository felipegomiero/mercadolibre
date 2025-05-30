import styled from "@emotion/styled";
import type { ISeparator } from "./types";

export const Separator = styled.div(
	({ vertical, margin, color, thickness }: ISeparator) => `
	${
		vertical
			? `
		width: ${thickness};
		display: inline-block;
	`
			: `
		width: 100%;
  	height: ${thickness};
	`
	}
  background-color: ${color};
  margin: ${margin};
`
);
