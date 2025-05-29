import styled from "@emotion/styled";
import type { TButtonVariant } from "./types";
import type { Theme } from "@emotion/react";

interface IStyledBtnProps {
	theme: Theme;
	variant: TButtonVariant;
	disabled: boolean;
	hasHover: boolean;
	onlyText?: boolean;
}

const getVariantStyle = ({
	variant,
	theme,
	disabled,
	hasHover,
}: IStyledBtnProps): string => {
	const styles = {
		secondary: `
			border: none;
			background: ${theme.secondary[500]}
			${
				!disabled &&
				hasHover &&
				`
				:hover {
					background: ${theme.secondary[600]};
				}
			`
			}
		`,
		outline: `
			background: transparent;
			border: solid 1px ${theme.secondary[500]}
			${
				!disabled &&
				hasHover &&
				`
				:hover {
					background: ${theme.secondary[600]};
				}
			`
			}
		`,
		ghost: `
			border: none;
			background: transparent;
			${
				!disabled &&
				hasHover &&
				`
				:hover {
					background: ${theme.primary[600]};
				}
			`
			}
		`,
	};
	return styles[variant];
};

export const Button = styled.button(
	({ disabled, onlyText, ...rest }: IStyledBtnProps) => `
	width: auto;
	height: auto;
	${onlyText ? "padding: 8px 12px;" : ""}
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
	${getVariantStyle({ disabled, ...rest })}
`
);
