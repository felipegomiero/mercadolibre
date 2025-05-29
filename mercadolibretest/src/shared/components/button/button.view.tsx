import { useTheme } from "@emotion/react";
import type { IButtonProps } from "./types";
import * as Styled from "./button.styled";

const Button: React.FC<IButtonProps> = ({
	children,
	variant = "secondary",
	disabled = false,
	type = "button",
	hasHover = true,
	onlyText = false,
	onClick,
}) => {
	const theme = useTheme();
	return (
		<Styled.Button
			variant={variant}
			type={type}
			disabled={disabled}
			theme={theme}
			hasHover={hasHover}
			onlyText={onlyText}
			onClick={onClick}>
			{children}
		</Styled.Button>
	);
};

export default Button;
