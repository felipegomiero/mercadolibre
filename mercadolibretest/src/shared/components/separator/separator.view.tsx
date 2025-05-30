import { useTheme } from "@emotion/react";
import * as Styled from "./separator.styled";
import type { ISeparator } from "./types";

const Separator: React.FC<ISeparator> = ({
	vertical = true,
	margin = "0 12px",
	thickness = "1px",
	color,
	className,
}) => {
	const theme = useTheme();
	return (
		<Styled.Separator
			className={className}
			thickness={thickness}
			vertical={vertical}
			margin={margin}
			color={color || theme.neutral[600]}
		/>
	);
};

export default Separator;
