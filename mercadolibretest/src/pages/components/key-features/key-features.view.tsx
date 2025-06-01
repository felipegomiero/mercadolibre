import { Typography } from "../../../shared/components";
import type { IKeyFeature } from "../../types";
import * as Styled from "./key-features.styled";

const KeyFeatures: React.FC<{ keyFeatures: IKeyFeature[] }> = ({
	keyFeatures,
}) => {
	return (
		<section
			data-testid="key-features"
			aria-labelledby="caracteriscas-chave-produto">
			<Typography as="h4" pxFontSize={null} margin="24px 0 8px 0">
				O que você precisa saber sobre este produto
			</Typography>
			<Styled.Ul>
				{keyFeatures?.map(({ desc }) => {
					return (
						<Styled.Li>
							<Typography pxFontSize={12}>{desc}</Typography>
						</Styled.Li>
					);
				})}
			</Styled.Ul>
		</section>
	);
};

export default KeyFeatures;
