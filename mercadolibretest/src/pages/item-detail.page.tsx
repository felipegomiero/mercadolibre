import Breadcrumbs from "./components/breadcrumbs/breadcrumbs.view";
import TopNav from "./components/top-nav/top-nav.view";
import Details from "./components/details/details.view";
import * as Styled from "./item-detail.page.styled";
import { Typography } from "../shared/components";
import mocks from "./services/mocks";
import { useTheme } from "@emotion/react";
import parse from "html-react-parser";
import ImgGallery from "./components/img-gallery/img-gallery.view";
import DOMPurify from "dompurify";
import KeyFeatures from "./components/key-features/key-features.view";

const ItemDetailPage = () => {
	const { mockBreadCrumbsItems: breadCrumbsItems, mockItem: item } = mocks;
	const theme = useTheme();
	return (
		<>
			<TopNav />
			<Styled.Content role="main" aria-label="Detalhes do Item">
				<Breadcrumbs items={breadCrumbsItems} />

				<Styled.ItemWrapper>
					<Styled.Block>
						<ImgGallery images={item.images} />

						{item.keyFeatures && <KeyFeatures keyFeatures={item.keyFeatures} />}
					</Styled.Block>

					<Details {...item} />
				</Styled.ItemWrapper>

				<section aria-labelledby="descricao-produto">
					<Typography as="h2" pxFontSize={null} margin="24px 0">
						Descrição
					</Typography>
					<Typography as="p" color={theme.neutral[700]}>
						{parse(DOMPurify.sanitize(item.desc))}
					</Typography>
				</section>
			</Styled.Content>
		</>
	);
};

export default ItemDetailPage;
