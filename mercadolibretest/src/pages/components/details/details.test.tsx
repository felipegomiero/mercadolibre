import { describe, it, expect, beforeEach } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import renderWithProviders from "../../../tests/render-with-providers";
import Details from "./details.view";

// Mock para o IDetail
const mockDetail = {
	title: "Produto Teste",
	price: "R$ 1.234,56",
	evaluation: {
		stars: 4.5,
		qty: 89,
	},
	qtySold: 1532,
	stock: 5,
	shippingPromSecLeft: 3600,
	images: [],
	desc: "Descrição teste",
	keyFeatures: [],
	seller: {
		title: "Loja Teste",
		verified: true,
		qtyProducts: 2000,
		status: {
			title: "Top vendedor",
			desc: "Ótimo atendimento e entrega rápida.",
			qtySold: 5500,
			csStatus: "Excelente",
			deliverOnTime: true,
		},
	},
	paymentMethods: {
		credit: [
			{
				title: "Visa",
				installments: 12,
				companyLogo: "visa.png",
			},
		],
		debit: [],
		others: [],
	},
};

describe("Details", () => {
	beforeEach(() => renderWithProviders(<Details {...mockDetail} />));

	it("renders product title and price", () => {
		expect(
			screen.getByRole("heading", { name: /Produto Teste/i })
		).toBeInTheDocument();
		expect(screen.getByText(/R\$ 1.234,56/i)).toBeInTheDocument();
	});

	it("renders star rating and sold quantity", () => {
		expect(screen.getByTestId("star-rating")).toBeInTheDocument();
		expect(screen.getByText(/\+1,5k vendidos/i)).toBeInTheDocument();
	});

	it("opens the payment modal on button click", () => {
		const paymentBtn = screen.getByRole("button", {
			name: /ver formas de pagamento/i,
		});
		expect(paymentBtn).toBeInTheDocument();

		fireEvent.click(paymentBtn);

		// Verifica se a modal abre com título
		expect(screen.getByText("Formas de pagamento")).toBeInTheDocument();
	});

	it("renders SellerInfo component", () => {
		expect(screen.getByText(/Loja Teste/i)).toBeInTheDocument();
		expect(screen.getByText(/Top vendedor/i)).toBeInTheDocument();
	});

	it("renders Acquisition component", () => {
		expect(screen.getByTestId("acquisition")).toBeInTheDocument();
	});
});
