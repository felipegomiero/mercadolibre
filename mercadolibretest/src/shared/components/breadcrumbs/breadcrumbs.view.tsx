import React from "react";
import * as Styled from "./breadcrumbs.styled";
import { useTheme } from "@emotion/react";

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
							{!isLast && <Styled.Separator>{separator}</Styled.Separator>}
						</Styled.Li>
					);
				})}
			</Styled.Ol>
		</nav>
	);
};

export default Breadcrumbs;
