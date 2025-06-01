import styled from "@emotion/styled";

export const Wrapper = styled.div`
	display: block;
	height: 100%;
	width: 100%;
	margin-top: 24px;
	> :not(:last-child) {
		margin-bottom: 16px;
	}
`;

export const FlexSpaceBetween = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ShippingWrapper = styled.div`
	display: block;
	> :not(:last-child) {
		margin-bottom: 8px;
	}
`;

export const ShippingTime = styled.div`
	display: flex;
	align-items: center;
`;
