import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
	width: 100%;
	display: flex;
	margin: 24px 0;
	> :not(:last-of-type) {
		margin-right: 24px;
	}
`;

export const Content = styled.div`
	padding: 24px 0;
	width: 100%;
	max-width: 90vw;
	margin: auto;
`;
