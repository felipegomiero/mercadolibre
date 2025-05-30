import styled from "@emotion/styled";

export const Card = styled.div`
	padding: 24px;
	border: solid 1px ${({ borderColor }: { borderColor: string }) => borderColor};
	border-radius: 8px;
`;
