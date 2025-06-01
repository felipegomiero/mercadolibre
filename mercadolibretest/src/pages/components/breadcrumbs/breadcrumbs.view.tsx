import React from "react";
import * as Styled from "./breadcrumbs.styled";
import { useTheme } from "@emotion/react";
import { Button, Separator, Typography } from "../../../shared/components";
import { useBreakpoint } from "../../../shared/hooks";
export interface IBreadcrumbItem {
	label: string;
	to?: string;
	onClick?: () => void;
}

interface IBreadcrumbsProps {
	items: IBreadcrumbItem[];
	separator?: React.ReactNode;
}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({
	items,
	separator = ">",
}) => {
	const theme = useTheme();
	const { isMobile } = useBreakpoint();
	return (
		<Styled.Wrapper data-testid="breadcrumbs">
			<Button variant="link">
				<Typography color={theme.secondary[500]}>Voltar para lista</Typography>
			</Button>
			<Separator />
			<nav aria-label="breadcrumb">
				<Styled.Ol>
					{items.map((item, index) => {
						const isLast = index === items.length - 1;
						return !isMobile ? (
							<Styled.Li key={index}>
								{!isLast ? (
									<Styled.LinkA to={item?.to || ""} onClick={item.onClick}>
										{item.label}
									</Styled.LinkA>
								) : (
									isLast && (
										<Styled.Text isLast={isLast} theme={theme}>
											{item.label}
										</Styled.Text>
									)
								)}
								{!isLast && (
									<Styled.BreadcrumbSeparator>
										{separator}
									</Styled.BreadcrumbSeparator>
								)}
							</Styled.Li>
						) : (
							<Styled.Li key={index}>
								{isLast && (
									<Styled.Text isLast={isLast} theme={theme}>
										{item.label}
									</Styled.Text>
								)}
							</Styled.Li>
						);
					})}
				</Styled.Ol>
			</nav>
		</Styled.Wrapper>
	);
};

export default Breadcrumbs;
