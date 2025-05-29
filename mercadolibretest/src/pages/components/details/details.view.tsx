import Typography from "../../../shared/components/typography/typography.view";
import type { IDetail } from "../../types";

const Details: React.FC<IDetail> = ({ title, value }) => {
	return (
		<>
			<Typography as="h2" pxFontSize={null}>
				{title}
			</Typography>
			<Typography as="h1" pxFontSize={null}>
				{value}
			</Typography>
		</>
	);
};

export default Details;
