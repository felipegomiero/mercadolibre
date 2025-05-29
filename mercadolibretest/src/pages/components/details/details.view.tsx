import Typography from "../../../shared/components/typography/typography.view";
import type { IDetail } from "../../types";
import * as Styled from "./details.styled";

const Details: React.FC<IDetail> = ({ title, price }) => {
	return (
		<Styled.Wrapper>
			<Typography as="h2" pxFontSize={null}>
				{title}
			</Typography>
			<Typography as="h1" pxFontSize={null} margin="12px 0 0 0">
				{price}
			</Typography>
		</Styled.Wrapper>
	);
};

export default Details;
