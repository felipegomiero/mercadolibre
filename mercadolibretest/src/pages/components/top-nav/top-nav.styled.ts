import type { Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const TopNav = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }: { theme: Theme }) => theme.primary[500]};
	width: 100%;
	padding: 8px 0;
`;

export const TopNavWrapper = styled.div`
	width: 100%;
	max-width: 90vw;
	display: flex;
	align-items: center;
`;

export const Logo = styled.a`
	background-repeat: no-repeat;
	overflow: hidden;
	background-image: url("https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.125/mercadolibre/logo_large_plus.webp");
	height: 34px;
	width: 134px;
	display: flex;
	position: static;
	left: 0;
	top: 0;
	background-size: contain;
`;

export const ActionsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;

	*:not(:last-of-type) {
		margin-right: 8px;
	}
`;
