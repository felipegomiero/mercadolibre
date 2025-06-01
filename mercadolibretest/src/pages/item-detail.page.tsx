import Breadcrumbs from "./components/breadcrumbs/breadcrumbs.view";
import ImgMagnifier from "./components/img-magnifier/img-magnifier.view";
import TopNav from "./components/top-nav/top-nav.view";
import Details from "./components/details/details.view";
import * as Styled from "./item-detail.page.styled";
import { Typography } from "../shared/components";
import mocks from "./services/mocks";
import { useTheme } from "@emotion/react";
import parse from "html-react-parser";

const ItemDetailPage = () => {
	const { mockBreadCrumbsItems: breadCrumbsItems, mockItem: item } = mocks;
	const theme = useTheme();
	return (
		<>
			<TopNav />
			<Styled.Content>
				<Breadcrumbs items={breadCrumbsItems} />

				<Styled.ItemWrapper>
					<Styled.Block>
						{item.image && <ImgMagnifier src={item.image} />}
					</Styled.Block>

					<Details {...item} />
				</Styled.ItemWrapper>

				<Typography as="h2" pxFontSize={null} margin="24px 0">
					Descrição
				</Typography>
				<Typography as="p" color={theme.neutral[700]}>
					{parse(item.desc)}
				</Typography>
			</Styled.Content>
		</>
	);
};

export default ItemDetailPage;
