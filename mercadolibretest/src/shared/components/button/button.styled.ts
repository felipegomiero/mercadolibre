import styled from "@emotion/styled";
import type { TButtonVariant } from "./types";
import type { Theme } from "@emotion/react";

interface IStyledBtnProps {
	theme: Theme;
	variant: TButtonVariant;
	disabled: boolean;
}

const getVariantStyle = ({
	variant,
	theme,
	disabled,
}: IStyledBtnProps): string => {
	const styles = {
		secondary: `
			border: none;
			background: ${theme.secondary[500]}
			${!disabled && `
				:hover {
					background: ${theme.secondary[600]};
				}
			`}
		`,
		outline: `
			background: transparent;
			border: solid 1px ${theme.secondary[500]}
			${!disabled && `
				:hover {
					background: ${theme.secondary[600]};
				}
			`}
		`,
		ghost: `
			border: none;
			background: transparent;
			${!disabled && `
				:hover {
					background: ${theme.primary[600]};
				}
			`}
		`,
	};
	return styles[variant];
};

export const Button = styled.button(
	({ disabled, variant, theme }: IStyledBtnProps) => `
	width: auto;
	height: auto;
	padding: 8px 12px;
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
	${getVariantStyle({ variant, theme, disabled})}
`
);
