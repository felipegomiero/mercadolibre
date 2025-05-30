import styled from "@emotion/styled";
import pxToRem from "../../utils/px-to-rem";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	font-size: ${pxToRem(16)};
	> label {
		margin-right: 4px;
	}
`;

export const Select = styled.select`
	border: none;
	background: none;
	padding: 8px;
	border-radius: 8px;
	font-size: ${pxToRem(14)};
	:hover {
		background: ${({ theme }) => theme.neutral[500]};
	}
	:picker(select) {
		border: none;
	}
`;

export const Option = styled.option`
	font-size: ${pxToRem(16)};
`;
