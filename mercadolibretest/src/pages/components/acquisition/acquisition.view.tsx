import React from "react";
import { useTheme } from "@emotion/react";
import { Button, Select, Typography } from "../../../shared/components";
import * as Styled from "./acquisition.styled";
import { roundDownTo50 } from "./utils/round-down-to-50";
import useCountDownTime from "./hooks/use-count-down-time";
import type { IAcquisition } from "../../types";

const Acquisition: React.FC<IAcquisition> = ({
	stock,
	shippingPromSecLeft,
}) => {
	const [qtd, setQtd] = React.useState<number>(1);
	const theme = useTheme();

	const stockLbl = `${
		stock > 50 ? `+${roundDownTo50(stock)}` : stock
	} disponíveis`;

	const qtdSelect = {
		label: "Quantidade",
		options: Array.from({ length: 6 }).map((_, index) => {
			return {
				value: index + 1,
				label: `${index + 1} un.`,
			};
		}),
		value: qtd,
		onChange: setQtd,
	};

	const timeLeft = useCountDownTime(shippingPromSecLeft);

	return (
		<Styled.Wrapper>
			<Styled.ShippingWrapper>
				<Styled.FlexCol>
					<Typography as="h3" color={theme.success[500]} margin="0 0 4px 0">
						Entrega em todo país
					</Typography>
					<Styled.ShippingTime>
						<Typography
							pxFontSize={14}
							color={theme.neutral[600]}
							margin="0 4px 0  0">
							Comprando nas próximas:
						</Typography>
						<Typography pxFontSize={14}>{timeLeft}</Typography>
					</Styled.ShippingTime>
				</Styled.FlexCol>
				<Button variant="link">
					<Typography color={theme.secondary[500]} pxFontSize={14}>
						Ver formas de entrega
					</Typography>
				</Button>
				<Styled.FlexCol>
					<Typography
						pxFontSize={12}
						margin="16px 0 0 0"
						color={theme.neutral[600]}>
						<Button variant="link">Devolução grátis</Button>. Você tem 30 dias a
						partir da data de recebimento.
					</Typography>
					<Typography
						pxFontSize={12}
						margin="8px 0 0 0"
						color={theme.neutral[600]}>
						<Button variant="link">Compra garantida</Button>, receba o produto
						que está esperando ou devolvemos o dinheiro.
					</Typography>
					<Typography
						pxFontSize={12}
						margin="8px 0 0 0"
						color={theme.neutral[600]}>
						12 meses de garantia de fabrica
					</Typography>
				</Styled.FlexCol>
			</Styled.ShippingWrapper>

			<Styled.FlexSpaceBetween>
				<Select {...qtdSelect} />
				<Typography margin="auto 0" color={theme.neutral[600]}>
					{stockLbl}
				</Typography>
			</Styled.FlexSpaceBetween>

			<Button width="100%">
				<Typography color="white">Comprar agora</Typography>
			</Button>

			<Button width="100%" variant="outline">
				<Typography>Adicionar ao carrinho</Typography>
			</Button>
		</Styled.Wrapper>
	);
};

export default Acquisition;
