import Typography from "../../../shared/components/typography/typography.view";
import type { IDetail } from "../../types";

const Details: React.FC<IDetail> = ({ title, price }) => {
	return (
		<>
			<Typography as="h2" pxFontSize={null}>
				{title}
			</Typography>
			<Typography as="h1" pxFontSize={null}>
				{price}
			</Typography>
		</>
	);
};

export default Details;
