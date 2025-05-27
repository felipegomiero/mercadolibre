import React from "react";
import type { ITypographyProps } from "./types";
import * as Styled from "./typography.styled";
import { useTheme } from "@emotion/react";

const Typography: React.FC<ITypographyProps> = ({
	as = "span",
	children,
	...rest
}) => {
	const theme = useTheme();
	return (
		<Styled.GenericTextComponent as={as} theme={theme} {...rest}>
			{children}
		</Styled.GenericTextComponent>
	);
};

export default Typography;
