import { screen } from "@testing-library/react";
import TopNav from "./top-nav.view";
import { describe, it, expect } from "vitest";
import renderWithProviders from "../../../tests/render-with-providers";

describe("TopNav component", () => {
	it("renders the logo, 3 buttons, and the shopping cart icon", () => {
		renderWithProviders(<TopNav />);

		// Acessibilidade AAA: verificar região semântica
		expect(screen.getByRole("banner")).toBeInTheDocument();

		expect(screen.getByTestId("logo")).toBeInTheDocument();

		// Usar getByRole com name para acessibilidade
		expect(
			screen.getByRole("button", { name: /minha conta/i })
		).toBeInTheDocument();
		expect(screen.getByRole("button", { name: /compras/i })).toBeDisabled();

		// Verifica ícone de carrinho se tiver data-testid
		expect(screen.getByTestId("shopping-cart-icon")).toBeInTheDocument();
	});
});
