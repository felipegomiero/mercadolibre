import { useTheme } from "@emotion/react";
import { Button, Separator, Typography } from "../../../shared/components";
import type { IDetail } from "../../types";
import StarRating from "../star-rating/star-rating";
import * as Styled from "./details.styled";
import { formatCompactValue } from "../../../shared/utils";
import { useState } from "react";
import PaymentMethodsModal from "../payment-methods-modal/payment-methods-modal.view";

const Details: React.FC<IDetail> = ({
	title,
	price,
	evaluation,
	qtySold,
	paymentMethods,
}) => {
	const theme = useTheme();
	const [paymentPopup, setPaymentPopUp] = useState<boolean>(false);

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
			<Button variant="link" onClick={() => setPaymentPopUp(true)}>
				<Typography pxFontSize={14} color={theme.secondary[500]}>
					Ver outras formas de pagamento
				</Typography>
			</Button>

			<Styled.EvaluationWrapper>
				<StarRating value={evaluation.stars} qty={evaluation.qty} />
				<Separator />
				<Typography pxFontSize={14} color={theme.neutral[600]}>
					{qtySoldLbl}
				</Typography>
			</Styled.EvaluationWrapper>

			<PaymentMethodsModal
				isOpen={paymentPopup}
				setOpen={setPaymentPopUp}
				{...paymentMethods}
			/>
		</Styled.Wrapper>
	);
};

export default Details;
