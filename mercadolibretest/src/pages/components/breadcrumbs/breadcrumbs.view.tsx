import React from "react";
import * as Styled from "./breadcrumbs.styled";
import { useTheme } from "@emotion/react";
import Button from "../../../shared/components/button/button.view";
import Typography from "../../../shared/components/typography/typography.view";
import Separator from "../../../shared/components/separator/separator.view";

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
	return (
		<Styled.Wrapper>
			<Button variant="ghost" hasHover={false} onlyText>
				<Typography color={theme.secondary[500]}>Voltar para lista</Typography>
			</Button>
			<Separator />
			<nav aria-label="breadcrumb">
				<Styled.Ol>
					{items.map((item, index) => {
						const isLast = index === items.length - 1;

						return (
							<Styled.Li key={index}>
								{!isLast ? (
									<Styled.LinkA to={item?.to || ""} onClick={item.onClick}>
										{item.label}
									</Styled.LinkA>
								) : (
									<Styled.Text isLast={isLast} theme={theme}>
										{item.label}
									</Styled.Text>
								)}
								{!isLast && (
									<Styled.BreadcrumbSeparator>
										{separator}
									</Styled.BreadcrumbSeparator>
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
