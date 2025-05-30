import { type ReactNode } from "react";
import * as Styled from "./card.styled";
import { useTheme } from "@emotion/react";

export interface GenericCardProps {
	children?: ReactNode;
	borderColor?: string;
	className?: string;
}

const Card: React.FC<GenericCardProps> = ({
	children,
	borderColor,
	className,
}) => {
	const theme = useTheme();
	return (
		<Styled.Card
			className={className}
			borderColor={borderColor || theme.neutral[600]}
			theme={theme}>
			{children}
		</Styled.Card>
	);
};

export default Card;
