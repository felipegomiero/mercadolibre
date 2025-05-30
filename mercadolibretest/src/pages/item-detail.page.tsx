import Breadcrumbs, {
	type IBreadcrumbItem,
} from "./components/breadcrumbs/breadcrumbs.view";
import ImgMagnifier from "./components/img-magnifier/img-magnifier.view";
import TopNav from "./components/top-nav/top-nav.view";
import Details from "./components/details/details.view";
import * as Styled from "./item-detail.page.styled";
import type { IDetail } from "./types";
import Acquisition from "./components/acquisition/acquisition.view";
import { Separator } from "../shared/components";

const ItemDetailPage = () => {
	const breadCrumbsItems: IBreadcrumbItem[] = [
		{ label: "Celulares e telefones" },
		{ label: "Celulares e smartphones" },
		{ label: "Samsung" },
	];

	const item: IDetail = {
		title: "Samsung Galaxy S24 Galaxy Ai 256GB Preto 8GB RAM",
		price: "R$ 3.438",
		stock: 56,
		shippingPromSecLeft: 104500,
		evaluation: {
			stars: 2.5,
			qty: 34567,
		},
		qtySold: 100450,
		image:
			"https://a-static.mlcdn.com.br/800x560/smartphone-samsung-galaxy-s24-62-galaxy-ai-256gb-preto-5g-8gb-ram-cam-tripla-50mp-selfie-12mp-bateria-4000mah-dual-chip/magazineluiza/238095300/e7d6a769c701da9491194643ae02c865.jpg",
	};

	return (
		<>
			<TopNav />
			<Styled.Content>
				<Breadcrumbs items={breadCrumbsItems} />

				<Styled.ItemWrapper>
					{item.image && <ImgMagnifier src={item.image} />}

					<Details {...item} />

					<Separator margin="0" thickness="4px" />

					<Acquisition
						stock={item.stock}
						shippingPromSecLeft={item.shippingPromSecLeft}
					/>
				</Styled.ItemWrapper>
			</Styled.Content>
		</>
	);
};

export default ItemDetailPage;
