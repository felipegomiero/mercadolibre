import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { mediaMobile } from "../../theme/media-sizes";

export const Overlay = styled.div`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;

	@media (${mediaMobile}) {
		align-items: flex-end;
	}
`;

export const Content = styled.div`
	background: white;
	border-radius: 12px;
	max-width: 500px;
	width: 90%;
	max-height: 80vh;
	padding: 20px;
	position: relative;
	animation: slideUp 0.3s ease-out;
	overflow-y: auto;

	@media (${mediaMobile}) {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;
		width: 100%;
		max-width: none;
	}
`;

export const TopContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 24px;
`;

/* Close button */
export const CloseWrapper = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 32px;
	height: 32px;
	background: none;
	border: none;
	border-radius: 50%;
	cursor: pointer;
	:hover {
		background: ${({ theme }) => theme.neutral[400]};
	}
`;

export const slideUp = keyframes`
	from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
