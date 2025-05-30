import styled from "@emotion/styled";
import { Button } from "../../../shared/components";

export const FlexAlignCenter = styled.div`
	display: flex;
	align-items: center;
`;

export const Wrapper = styled(FlexAlignCenter)`
	gap: 2px;
	cursor: pointer;
`;

export const CustomLink = styled(Button)`
	display: flex;
	align-items: center;
`;
