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

				{verified && (
					<Styled.Flex>
						<VerifiedIcon size={20} />
						<Typography
							color={theme.neutral[600]}
							pxFontSize={12}
							margin="0 0 0 8px">
							Loja oficial
						</Typography>
					</Styled.Flex>
				)}

				<Button variant="link">
					<Typography pxFontSize={12} color={theme.secondary[500]}>
						Veja o site oficial
					</Typography>
				</Button>
			</Styled.FlexItems>

			<Separator thickness="2px" margin="0 12px" />

			<Styled.SellerStatus>
				<Typography as="h5" color={theme.success[500]} pxFontSize={null}>
					{status.title}
				</Typography>
				<Typography color={theme.neutral[600]} pxFontSize={12}>
					{status.desc}
				</Typography>

				<Styled.SellerStamps>
					<Styled.Stamp>
						<Typography color={theme.success[500]} pxFontSize={12}>
							{formatCompactValue(status.qtySold)}
						</Typography>
						<Typography color={theme.neutral[600]} pxFontSize={12}>
							Vendas
						</Typography>
					</Styled.Stamp>

					<Styled.Stamp>
						<Typography color={theme.success[500]} pxFontSize={12}>
							{status.csStatus}
						</Typography>
						<Typography color={theme.neutral[600]} pxFontSize={12}>
							Atendimento
						</Typography>
					</Styled.Stamp>

					<Styled.Stamp>
						<Styled.IconWrapper>
							<VerifiedIcon size={20} color={theme.success[500]} />
						</Styled.IconWrapper>
						<Typography color={theme.neutral[600]} pxFontSize={12}>
							Entregas no prazo
						</Typography>
					</Styled.Stamp>
				</Styled.SellerStamps>
			</Styled.SellerStatus>
		</Styled.CustomCard>
	);
};

export default SellerInfo;
