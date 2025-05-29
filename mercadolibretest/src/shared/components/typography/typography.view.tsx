import React from "react";
import type { ITypographyProps } from "./types";
import * as Styled from "./typography.styled";

const Typography: React.FC<ITypographyProps> = ({
	as = "span",
	children,
	...rest
}) => {
	return (
		<Styled.GenericTextComponent as={as} {...rest}>
			{children}
		</Styled.GenericTextComponent>
	);
};

export default Typography;
