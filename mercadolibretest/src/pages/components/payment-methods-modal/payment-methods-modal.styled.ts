import styled from "@emotion/styled";

export const Flex = styled.div`
	display: flex;
	align-items: center;
`;

export const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	> :not(:last-of-type) {
		margin-bottom: 24px;
	}
`;

export const MethodWrapper = styled(Flex)`
	margin-top: 24px;
`;

export const MethodItemWrapper = styled(FlexCol)`
	align-items: center;
	min-width: 25%;
`;

export const OtherMethodWrapper = styled(FlexCol)`
	margin-left: 12px;
`;
