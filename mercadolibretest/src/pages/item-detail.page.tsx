import Breadcrumbs, {
	type IBreadcrumbItem,
} from "../shared/components/breadcrumbs/breadcrumbs.view";
import TopNav from "../shared/components/topnav/topnav.view";
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
		value: "R$ 3.438",
	};

	return (
		<>
			<TopNav />
			<Styled.Wrapper>
				<Styled.Content>
					<Breadcrumbs items={breadrCrumbsItems} />
					<Details {...item} />
				</Styled.Content>
			</Styled.Wrapper>
		</>
	);
};

export default ItemDetailPage;
