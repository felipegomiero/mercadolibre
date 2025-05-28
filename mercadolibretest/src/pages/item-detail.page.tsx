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
		<>
			<TopNav />
			<Styled.Wrapper>
				<Styled.Content>
					<Breadcrumbs items={breadrCrumbsItems} />
				</Styled.Content>
			</Styled.Wrapper>
		</>
	);
};

export default ItemDetailPage;
