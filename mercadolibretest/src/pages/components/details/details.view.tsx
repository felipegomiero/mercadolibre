import { Button, Typography } from "../../../shared/components";
import type { IDetail } from "../../types";
import * as Styled from "./details.styled";

const Details: React.FC<IDetail> = ({ title, price }) => {
	return (
		<Styled.Wrapper>
			<Typography as="h2" pxFontSize={null}>
				{title}
			</Typography>
			<Typography pxFontSize={48} margin="12px 0">
				{price}
			</Typography>
			<Button variant="link">Ver outras formas de pagamento</Button>
		</Styled.Wrapper>
	);
};

export default Details;
