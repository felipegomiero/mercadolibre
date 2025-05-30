import React from "react";
import * as Styled from "./star-rating.styled";
import { StarIcon } from "../../../assets/icons";
import { useTheme } from "@emotion/react";
import { Typography } from "../../../shared/components";

interface StarRatingProps {
	value?: number;
	qty?: number;
	onChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ value = 0, qty = 0 }) => {
	const maxStars = 5;
	const theme = useTheme();

	return (
		<Styled.FlexAlignCenter>
			<Typography
				pxFontSize={14}
				color={theme.neutral[700]}
				margin="1px 8px 1px 0">
				{value}
			</Typography>
			<Styled.Wrapper>
				{Array.from({ length: maxStars }, (_, index) => {
					const trueValue = value - 1;
					const isFilled = trueValue >= index;
					const isHalf = index > trueValue && trueValue > index - 1;
					return (
						<StarIcon
							key={index}
							color={theme.secondary[400]}
							filled={isFilled}
							half={isHalf}
							label={`${value} de ${maxStars} estrelas`}
							decorative={false}
							size={16}
						/>
					);
				})}
			</Styled.Wrapper>
			<Styled.CustomLink variant="link">
				<Typography
					pxFontSize={14}
					color={theme.neutral[700]}
					margin="0 0 0 8px">{`(${qty})`}</Typography>
			</Styled.CustomLink>
		</Styled.FlexAlignCenter>
	);
};

export default StarRating;
