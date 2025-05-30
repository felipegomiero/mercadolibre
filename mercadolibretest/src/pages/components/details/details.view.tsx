import { useTheme } from "@emotion/react";
import { Button, Separator, Typography } from "../../../shared/components";
import type { IDetail } from "../../types";
import StarRating from "../star-rating/star-rating";
import * as Styled from "./details.styled";
import { formatCompactValue } from "../../../shared/utils";

const Details: React.FC<IDetail> = ({ title, price, evaluation, qtySold }) => {
	const theme = useTheme();

	const qtySoldLbl = `${
		qtySold > 999 ? `+${formatCompactValue(qtySold)}` : qtySold
	} vendidos`;

	return (
		<Styled.Wrapper>
			<Typography as="h2" pxFontSize={null}>
				{title}
			</Typography>
			<Typography pxFontSize={32} margin="12px 0">
				{price}
			</Typography>
			<Button variant="link">Ver outras formas de pagamento</Button>

			<Styled.EvaluationWrapper>
				<StarRating value={evaluation.stars} qty={evaluation.qty} />
				<Separator />
				<Typography pxFontSize={14} color={theme.neutral[600]}>
					{qtySoldLbl}
				</Typography>
			</Styled.EvaluationWrapper>
		</Styled.Wrapper>
	);
};

export default Details;
