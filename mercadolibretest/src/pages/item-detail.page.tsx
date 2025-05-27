import Breadcrumbs, {
	type IBreadcrumbItem,
} from "../shared/components/breadcrumbs/breadcrumbs.view";
import TopNav from "../shared/components/topnav/topnav.view";
import * as Styled from "./item-detail.page.styled";

const ItemDetailPage = () => {
	const breadrCrumbsItems: IBreadcrumbItem[] = [
		{ label: "Celulares e telefones" },
		{ label: "Celulares e smartphones" },
		{ label: "Samsung" },
	];
	return (
		<Styled.Wrapper>
			<TopNav />
			<Breadcrumbs items={breadrCrumbsItems} />
		</Styled.Wrapper>
	);
};

export default ItemDetailPage;
