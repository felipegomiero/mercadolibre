export interface IAcquisition {
	stock: number;
	shippingPromSecLeft: number;
}

export interface IEvaluation {
	stars: number;
	qty: number;
}

export interface ISeller {
	title: string;
	verified: boolean;
	qtyProducts: number;
	status: {
		title: string;
		desc: string;
		qtySold: number;
		csStatus: string;
		deliveOnTime: boolean;
	};
}

export interface IPaymentMethod {
	title?: string;
	desc?: string;
	installments?: number;
	companyLogo: string;
}

export interface IPaymentMethods {
	debit: IPaymentMethod[];
	credit: IPaymentMethod[];
	others: IPaymentMethod[];
}

export interface IDetail extends IAcquisition {
	title: string;
	price: string;
	image: string;
	evaluation: IEvaluation;
	seller: ISeller;
	qtySold: number;
	desc: string;
	paymentMethods: IPaymentMethods;
}
