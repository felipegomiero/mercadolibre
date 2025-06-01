import { useTheme } from "@emotion/react";
import type { IButtonProps } from "./types";
import * as Styled from "./button.styled";

const Button: React.FC<IButtonProps> = ({
	children,
	variant = "secondary",
	type = "button",
	width = "auto",
	disabled = false,
	onClick,
	className,
}) => {
	const theme = useTheme();
	return (
		<Styled.Button
			role="button"
			className={className}
			variant={variant}
			type={type}
			disabled={disabled}
			theme={theme}
			width={width}
			onClick={onClick}
			{...(variant === "link" ? { as: "a" } : {})}>
			{children}
		</Styled.Button>
	);
};

export default Button;
