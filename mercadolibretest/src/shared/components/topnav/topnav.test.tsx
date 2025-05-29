import { screen } from "@testing-library/react";
import TopNav from "./topnav.view";
import { describe, it, expect } from "vitest";
import renderWithProviders from "../../../tests/render-with-providers";

describe("TopNav component", () => {
	it("renders all 3 buttons", () => {
		renderWithProviders(<TopNav />);

		expect(screen.getByTestId("logo")).toBeInTheDocument();
		expect(screen.getByText("Minha conta")).toBeInTheDocument();
		expect(screen.getByText("Compras")).toBeDisabled();
		expect(screen.getByTestId("shopping-cart-icon")).toBeInTheDocument();
	});
});
