import styled from "@emotion/styled";
import { Card } from "../../../shared/components";
import { mediaDesktop } from "../../../shared/theme/media-sizes";

export const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FlexItems = styled(FlexCol)`
	width: 50%;
	@media (${mediaDesktop}) {
		width: 100%;
	}
	justify-content: space-between;
	> :not(:last-child) {
		display: flex;
		align-items: center;
		margin-bottom: 8px;
	}
`;

export const CustomCard = styled(Card)`
	display: flex;
	margin-top: 24px;
`;

export const SellerStamps = styled.div`
	display: block;
	width: 100%;
	margin-top: 8px;
	> :not(:last-of-type) {
		margin-bottom: 8px;
	}
`;

export const Flex = styled.div`
	display: flex;
	align-items: center;
`;

export const SellerStatus = styled(FlexCol)`
	width: 50%;
	@media (${mediaDesktop}) {
		width: 100%;
	}
`;

export const Stamp = styled.div`
	display: flex;
	> :first-child {
		width: 40px;
	}
`;

export const IconWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
`;
