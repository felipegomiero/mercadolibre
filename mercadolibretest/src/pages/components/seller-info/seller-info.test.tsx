import { screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import renderWithProviders from "../../../tests/render-with-providers";
import type { ISeller } from "../../types";
import SellerInfo from "./seller-info";

const mockSeller: ISeller = {
	title: "Loja Exemplo",
	verified: true,
	qtyProducts: 1024,
	status: {
		title: "Excelente",
		desc: "Avaliação positiva dos clientes",
		qtySold: 15000,
		csStatus: "Ótimo",
		deliverOnTime: true,
	},
};

describe("SellerInfo Component", () => {
	beforeEach(() => renderWithProviders(<SellerInfo {...mockSeller} />));

	it("renders seller title and product count", () => {
		expect(screen.getByText("Loja Exemplo")).toBeInTheDocument();
		expect(screen.getByText(/produtos/i)).toBeInTheDocument();
		expect(screen.getByText(/1k/)).toBeInTheDocument(); // resultado de formatCompactValue
	});

	it("shows verified badge if seller is verified", () => {
		expect(screen.getByText("Loja oficial")).toBeInTheDocument();
	});

	it("renders the link to official site", () => {
		expect(screen.getByText("Veja o site oficial")).toBeInTheDocument();
	});

	it("renders seller status section correctly", () => {
		expect(screen.getByText("Excelente")).toBeInTheDocument();
		expect(
			screen.getByText("Avaliação positiva dos clientes")
		).toBeInTheDocument();
		expect(screen.getByText("15k")).toBeInTheDocument();
		expect(screen.getByText("Vendas")).toBeInTheDocument();
		expect(screen.getByText("Ótimo")).toBeInTheDocument();
		expect(screen.getByText("Atendimento")).toBeInTheDocument();
		expect(screen.getByText("Entregas no prazo")).toBeInTheDocument();
	});
});
