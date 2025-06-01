import { useTheme } from "@emotion/react";
import type { IPaymentMethods } from "../../types";
import { Popup } from "../../../shared/components/popup/popup.view";
import { Card, Separator, Typography } from "../../../shared/components";
import * as Styled from "./payment-methods-modal.styled";

interface IPaymentMethodModal extends IPaymentMethods {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PaymentMethodsModal: React.FC<IPaymentMethodModal> = ({
	credit,
	debit,
	others,
	isOpen,
	setOpen,
}) => {
	const theme = useTheme();

	return (
		<Popup
			title="Formas de pagamento"
			isOpen={isOpen}
			onClose={() => setOpen(false)}>
			<Styled.Wrapper>
				{credit.length > 0 && (
					<Card borderColor={theme.neutral[500]}>
						<Typography as="h4" pxFontSize={null}>
							Cartão de crédito
						</Typography>
						<Typography pxFontSize={14} color={theme.neutral[600]}>
							Aprovação imediata
						</Typography>

						<Styled.MethodWrapper>
							{credit.map(({ title, installments, companyLogo }) => {
								return (
									<Styled.MethodItemWrapper>
										<img
											src={companyLogo}
											alt={`Método de crédito: ${title}`}
											role="img"
											aria-label={`Logo da empresa ${title}, método de crédito`}
										/>
										<Typography pxFontSize={14}>até {installments}x</Typography>
									</Styled.MethodItemWrapper>
								);
							})}
						</Styled.MethodWrapper>
					</Card>
				)}

				{debit.length > 0 && (
					<Card borderColor={theme.neutral[500]}>
						<Typography as="h4" pxFontSize={null}>
							Cartão de débito
						</Typography>
						<Typography pxFontSize={14} color={theme.neutral[600]}>
							Aprovação imediata
						</Typography>

						<Styled.MethodWrapper>
							{debit.map(({ title, companyLogo }) => {
								return (
									<Styled.MethodItemWrapper>
										<img
											src={companyLogo}
											alt={`Método de débito: ${title}`}
											role="img"
											aria-label={`Logo da empresa ${title}, método de débito`}
										/>
										<Typography pxFontSize={14}>{title}</Typography>
									</Styled.MethodItemWrapper>
								);
							})}
						</Styled.MethodWrapper>
					</Card>
				)}

				{others.length > 0 && (
					<Card borderColor={theme.neutral[500]}>
						<Typography as="h4" pxFontSize={null} margin="0 0 24px 0">
							Outras formas de pagamento
						</Typography>

						{others.map(({ title, desc, companyLogo }, index) => {
							const isLast = others.length - 1 === index;
							return (
								<>
									<Styled.FlexCol>
										<Typography as="strong" pxFontSize={14} margin="0 0 8px 0">
											{title}
										</Typography>
										<Typography margin="0 0 8px 0" pxFontSize={12}>
											{desc}
										</Typography>
										<img
											width="20%"
											src={companyLogo}
											alt={`Método de débito: ${title}`}
											role="img"
											aria-label={`Logo da empresa ${title}, método de débito`}
										/>
									</Styled.FlexCol>
									{!isLast && (
										<Separator
											color={theme.neutral[500]}
											vertical={false}
											margin="12px 0"
										/>
									)}
								</>
							);
						})}
					</Card>
				)}
			</Styled.Wrapper>
		</Popup>
	);
};

export default PaymentMethodsModal;
