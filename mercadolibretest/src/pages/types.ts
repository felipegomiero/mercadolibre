export interface IAcquisition {
	stock: number;
	shippingPromSecLeft: number;
}

export interface IEvaluation {
	stars: number;
	qty: number;
}
export interface IDetail extends IAcquisition {
	title: string;
	price: string;
	image: string;
	evaluation: IEvaluation;
	qtySold: number;
}
