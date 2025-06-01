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
		deliverOnTime: boolean;
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

export interface IImg {
	alt: string;
	src: string;
}

export interface IKeyFeature {
	desc: string;
}

export interface IDetail extends IAcquisition {
	title: string;
	price: string;
	images: IImg[];
	evaluation: IEvaluation;
	seller: ISeller;
	qtySold: number;
	desc: string;
	paymentMethods: IPaymentMethods;
	keyFeatures: IKeyFeature[];
}
