import { Route, Routes } from "react-router-dom";
import { ItemDetailPage } from "./lazy-routes";

const ItemDetailRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<ItemDetailPage />} />
		</Routes>
	);
};

export default ItemDetailRoutes;
