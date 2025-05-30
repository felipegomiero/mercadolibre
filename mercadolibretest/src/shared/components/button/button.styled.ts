import styled from "@emotion/styled";
import type { TButtonVariant } from "./types";
import type { Theme } from "@emotion/react";

interface IStyledBtnProps {
	theme: Theme;
	variant: TButtonVariant;
	disabled: boolean;
	width?: string;
}

const getVariantStyle = ({
	variant,
	theme,
	disabled,
}: IStyledBtnProps): string => {
	const styles = {
		secondary: `
			border: solid 1px ${theme.secondary[500]};
			background: ${theme.secondary[500]};
			${
				!disabled &&
				`
				:hover {
					background: ${theme.secondary[600]};
				}
			`
			}
		`,
		outline: `
			background: transparent;
			border: solid 1px ${theme.secondary[500]};
			${
				!disabled &&
				`
				:hover {
					background: ${theme.secondary[500]}20;
				}
			`
			}
		`,
		ghost: `
			border: solid 1px transparent;
			background: transparent;
			${
				!disabled &&
				`
				:hover {
					background: ${theme.primary[600]};
				}
			`
			}
		`,
		link: `
			border: none;
			color: ${theme.secondary[500]};
			${
				!disabled &&
				`
				> :hover {
					color: ${theme.secondary[600]};
				}
			`
			}
		`,
	};
	return styles[variant];
};

export const Button = styled.button<IStyledBtnProps>(
	({ disabled, variant, width, ...rest }) => `
	width: ${width || "auto"};
	height: auto;
	${variant !== "link" ? "padding: 12px;" : ""}
	border-radius: 4px;
	${
		disabled
			? `
			pointer-events: none;
			cursor: default;
			opacity: 0.5;
		`
			: "cursor: pointer;"
	}
	${getVariantStyle({ disabled, variant, ...rest })}
`
);
