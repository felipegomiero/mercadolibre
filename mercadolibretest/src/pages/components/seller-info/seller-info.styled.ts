import styled from "@emotion/styled";
import { Card } from "../../../shared/components";

export const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FlexItems = styled(FlexCol)`
	justify-content: space-between;
	> :not(:last-child) {
		display: flex;
		align-items: center;
		margin-bottom: 4px;
	}
`;

export const CustomCard = styled(Card)`
	display: flex;
	margin-top: 24px;
	> :first-child,
	> :last-child {
		width: 50%;
	}
`;

export const SellerStamps = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 8px;
`;

export const CenterFlexCol = styled(FlexCol)`
	align-items: center;
`;
