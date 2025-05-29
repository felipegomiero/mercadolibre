import Breadcrumbs, {
	type IBreadcrumbItem,
} from "./components/breadcrumbs/breadcrumbs.view";
import ImgMagnifier from "./components/img-magnifier/img-magnifier.view";
import TopNav from "./components/topnav/topnav.view";
import Details from "./components/details/details.view";
import * as Styled from "./item-detail.page.styled";
import type { IDetail } from "./types";

const ItemDetailPage = () => {
	const breadrCrumbsItems: IBreadcrumbItem[] = [
		{ label: "Celulares e telefones" },
		{ label: "Celulares e smartphones" },
		{ label: "Samsung" },
	];

	const item: IDetail = {
		title: "Samsung Galaxy S24 Galaxy Ai 256GB Preto 8GB RAM",
		price: "R$ 3.438",
		image:
			"https://http2.mlstatic.com/D_NQ_NP_715415-MLA83864720212_042025-O.webp",
	};

	return (
		<>
			<TopNav />
			<Styled.Content>
				<Breadcrumbs items={breadrCrumbsItems} />

				<Styled.Wrapper>
					{item.image && <ImgMagnifier alt={item.title} src={item.image} />}
					<Details {...item} />
				</Styled.Wrapper>
			</Styled.Content>
		</>
	);
};

export default ItemDetailPage;
