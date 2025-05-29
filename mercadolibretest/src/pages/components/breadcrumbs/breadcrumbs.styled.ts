import type { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Typography from "../../../shared/components/typography/typography.view";
import pxToRem from "../../../shared/utils/px-to-rem";

export const Wrapper = styled.div`
	display: flex;
`;

export const Ol = styled.ol`
	list-style: none;
	display: flex;
	padding: 0;
	margin: 0;
	font-size: ${pxToRem(14)};
`;

export const Li = styled.li`
	display: flex;
	align-items: center;
`;

export const LinkA = styled(Link)`
	text-decoration: none;
	color: ${({ theme }: { theme: Theme }) => theme.secondary[500]};
`;

export const BreadcrumbSeparator = styled.span`
	margin: 0 0.5rem;
	color: ${({ theme }: { theme: Theme }) => theme.neutral[900]};
`;

export const Text = styled(Typography)`
	font-size: ${pxToRem(14)};
	color: ${({ theme, isLast }: { theme: Theme; isLast: boolean }) =>
		!isLast ? theme.secondary[500] : theme.neutral[900]};
`;
