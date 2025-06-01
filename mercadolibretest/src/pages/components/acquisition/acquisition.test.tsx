import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import Acquisition from "./acquisition.view";
import renderWithProviders from "../../../tests/render-with-providers";

// Mock para o hook de contagem regressiva
vi.mock("./hooks/use-count-down-time", () => ({
	default: () => "00:59:59",
}));

const renderComponent = (stock = 150, seconds = 3600) =>
	renderWithProviders(
		<Acquisition stock={stock} shippingPromSecLeft={seconds} />
	);

describe("Acquisition", () => {
	it("renders main labels and countdown", () => {
		renderComponent();

		expect(screen.getByTestId("acquisition")).toBeInTheDocument();

		expect(
			screen.getByRole("heading", { name: /Entrega em todo país/i })
		).toBeInTheDocument();

		expect(screen.getByText(/Comprando nas próximas:/i)).toBeInTheDocument();
		expect(screen.getByText("00:59:59")).toBeInTheDocument();
	});

	it("renders return and warranty info", () => {
		renderComponent();

		expect(screen.getByText(/Devolução grátis/i)).toBeInTheDocument();
		expect(screen.getByText(/Compra garantida/i)).toBeInTheDocument();
		expect(screen.getByText(/12 meses de garantia/i)).toBeInTheDocument();
	});

	it("renders quantity selector and stock", () => {
		renderComponent(40); // estoque menor que 99

		expect(screen.getByText("+40 disponíveis")).toBeInTheDocument();
		expect(screen.getByRole("combobox")).toBeInTheDocument();
	});

	it("renders action buttons", () => {
		renderComponent();

		expect(
			screen.getByRole("button", { name: /comprar agora/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /adicionar ao carrinho/i })
		).toBeInTheDocument();
	});

	it("changes quantity when selected", () => {
		renderComponent();

		const select = screen.getByRole("combobox");
		fireEvent.change(select, { target: { value: "3" } });

		expect((select as HTMLSelectElement).value).toBe("3");
	});
});
