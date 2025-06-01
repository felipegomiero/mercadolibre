import styled from "@emotion/styled";
import { mediaMobile } from "../shared/theme/media-sizes";

export const ItemWrapper = styled.div`
	width: 100%;
	display: flex;
	margin: 24px 0;
	flex-direction: row;
	> :not(:last-of-type) {
		margin-right: 32px;
	}

	@media (${mediaMobile}) {
		flex-direction: column;
	}
`;

export const Content = styled.div`
	padding: 24px 0;
	width: 100%;
	max-width: 90vw;
	margin: auto;
`;

export const Block = styled.div`
	display: block;
	width: 100%;
`;
