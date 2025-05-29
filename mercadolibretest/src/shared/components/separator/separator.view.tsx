import { useTheme } from "@emotion/react";
import * as Styled from "./separator.styled";
import type { ISeparator } from "./types";

const Separator: React.FC<ISeparator> = ({
	vertical = true,
	margin = "0 12px",
	color,
}) => {
	const theme = useTheme();
	return (
		<Styled.Separator
			vertical={vertical}
			margin={margin}
			color={color || theme.neutral[600]}
		/>
	);
};

export default Separator;
