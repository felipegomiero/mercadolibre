import { useTheme } from "@emotion/react";
import { VerifiedIcon } from "../../../assets/icons";
import { Button, Separator, Typography } from "../../../shared/components";
import { formatCompactValue } from "../../../shared/utils";
import type { ISeller } from "../../types";
import * as Styled from "./seller-info.styled";

const SellerInfo = ({ title, verified, qtyProducts, status }: ISeller) => {
	const theme = useTheme();
	return (
		<Styled.CustomCard>
			<Styled.FlexItems>
				<Typography as="h4">{title}</Typography>
				{verified && (
					<Typography color={theme.neutral[600]} pxFontSize={12}>
						<VerifiedIcon size={16} /> Loja oficial do Mercado Libre
					</Typography>
				)}
				<Typography color={theme.neutral[600]} pxFontSize={12}>
					+
					<Typography
						color={theme.neutral[900]}
						pxFontSize={12}
						margin="0 2px 0 0">
						{formatCompactValue(qtyProducts)}
					</Typography>
					Produtos
				</Typography>

				<Button variant="link">
					<Typography pxFontSize={12} color={theme.secondary[500]}>
						Veja o site oficial
					</Typography>
				</Button>
			</Styled.FlexItems>

			<Separator margin="0 24px" />

			<Styled.CenterFlexCol>
				<Typography color={theme.success[500]} pxFontSize={14}>
					{status.title}
				</Typography>
				<Typography color={theme.neutral[600]} pxFontSize={12}>
					{status.desc}
				</Typography>

				<Styled.SellerStamps>
					<Styled.CenterFlexCol>
						<Typography color={theme.success[500]} pxFontSize={14}>
							{formatCompactValue(status.qtySold)}
						</Typography>
						<Typography color={theme.neutral[600]} pxFontSize={12}>
							Vendas
						</Typography>
					</Styled.CenterFlexCol>

					<Styled.CenterFlexCol>
						<Typography color={theme.success[500]} pxFontSize={14}>
							{status.csStatus}
						</Typography>
						<Typography color={theme.neutral[600]} pxFontSize={12}>
							Atendimento
						</Typography>
					</Styled.CenterFlexCol>

					<Styled.CenterFlexCol>
						<VerifiedIcon size={16} color={theme.success[500]} />
						<Typography color={theme.neutral[600]} pxFontSize={12}>
							No prazo
						</Typography>
					</Styled.CenterFlexCol>
				</Styled.SellerStamps>
			</Styled.CenterFlexCol>
		</Styled.CustomCard>
	);
};

export default SellerInfo;
