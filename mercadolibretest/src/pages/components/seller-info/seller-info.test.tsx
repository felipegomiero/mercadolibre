import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SellerInfo from "./seller-info";
import renderWithProviders from "../../../tests/render-with-providers";

describe("<SellerInfo />", () => {
	const mockProps = {
		title: "Super Loja",
		verified: true,
		qtyProducts: 1234,
		status: {
			title: "Excelente",
			desc: "Atende bem e entrega rápido",
			qtySold: 4321,
			csStatus: "Ótimo",
			deliverOnTime: true,
		},
	};

	it("renders seller info with verified badge and status", () => {
		renderWithProviders(<SellerInfo {...mockProps} />);

		expect(screen.getByText("Super Loja")).toBeInTheDocument();
		expect(screen.getByText("1234+")).toBeInTheDocument();
		expect(screen.getByText("Produtos")).toBeInTheDocument();
		expect(screen.getByText("Loja oficial")).toBeInTheDocument();
		expect(screen.getAllByTestId("verified-icon")).toHaveLength(2);

		expect(screen.getByText("Veja o site oficial")).toBeInTheDocument();
		expect(screen.getByTestId("separator")).toBeInTheDocument();

		expect(screen.getByText("Excelente")).toBeInTheDocument();
		expect(screen.getByText("Atende bem e entrega rápido")).toBeInTheDocument();
		expect(screen.getByText("4321+")).toBeInTheDocument();
		expect(screen.getByText("Ótimo")).toBeInTheDocument();
		expect(screen.getByText("Entregas no prazo")).toBeInTheDocument();
	});

	it("renders without verified badge when not verified", () => {
		render(<SellerInfo {...mockProps} verified={false} />);

		expect(screen.queryByText("Loja oficial")).not.toBeInTheDocument();
		expect(screen.getAllByTestId("verified-icon")).toHaveLength(1); // só nas entregas
	});
});
