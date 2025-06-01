import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../../tests/render-with-providers";
import PaymentMethodsModal from "./payment-methods-modal.view";
import { mercadoLibrePalette } from "../../../shared/theme/palettes";

// Mock do tema
vi.mock("@emotion/react", async () => {
	const actual = await vi.importActual("@emotion/react");
	return {
		...actual,
		useTheme: () => mercadoLibrePalette,
	};
});

// Mocks de dados
const mockSetOpen = vi.fn();

const mockProps = {
	isOpen: true,
	setOpen: mockSetOpen,
	credit: [
		{
			title: "Visa",
			installments: 10,
			companyLogo: "visa.png",
		},
	],
	debit: [
		{
			title: "Mastercard Débito",
			companyLogo: "mastercard.png",
		},
	],
	others: [
		{
			title: "Boleto",
			desc: "Pagamento em até 3 dias",
			companyLogo: "boleto.png",
		},
	],
};

describe("<PaymentMethodsModal />", () => {
	it("renders credit, debit and other payment methods", () => {
		renderWithProviders(<PaymentMethodsModal {...mockProps} />);

		// Modal title
		expect(screen.getByText("Formas de pagamento")).toBeInTheDocument();

		// Credit
		expect(screen.getByText("Cartão de crédito")).toBeInTheDocument();
		expect(screen.getByText("até 10x")).toBeInTheDocument();
		expect(screen.getByAltText("Método de crédito: Visa")).toBeInTheDocument();

		// Debit
		expect(screen.getByText(/mastercard débito/i)).toBeInTheDocument();
		expect(
			screen.getByAltText(/método de débito: mastercard débito/i)
		).toBeInTheDocument();

		// Others
		expect(screen.getByText(/boleto/i)).toBeInTheDocument();
		expect(screen.getByText(/pagamento em até 3 dias/i)).toBeInTheDocument();
		expect(
			screen.getByAltText(/método de débito: boleto/i)
		).toBeInTheDocument(); // mesmo alt dos demais
	});

	it("does not render sections with empty arrays", () => {
		renderWithProviders(
			<PaymentMethodsModal {...mockProps} credit={[]} debit={[]} others={[]} />
		);

		expect(screen.queryByText(/cartão de crédito/i)).not.toBeInTheDocument();
		expect(
			screen.queryByText(/outras formas de pagamento/i)
		).not.toBeInTheDocument();
	});
});
