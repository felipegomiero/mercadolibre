import styled from "@emotion/styled";
import { mediaMobile } from "../../../shared/theme/media-sizes";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 50%;

	@media (${mediaMobile}) {
		width: 100%;
		margin-top: 24px;
	}
`;

export const EvaluationWrapper = styled.div`
	display: flex;
	margin-top: 16px;
`;
