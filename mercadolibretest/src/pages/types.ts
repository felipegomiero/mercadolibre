export interface IAcquisition {
	stock: number;
	shippingPromSecLeft: number;
}
export interface IDetail extends IAcquisition {
	title: string;
	price: string;
	image: string;
}
