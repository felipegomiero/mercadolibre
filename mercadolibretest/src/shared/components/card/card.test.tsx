import { screen } from "@testing-library/react";
import Card from "./card.view";
import { describe, it, expect } from "vitest";
import renderWithProviders from "../../../tests/render-with-providers";

describe("Card component", () => {
	it("renders children correctly", () => {
		renderWithProviders(
			<Card>
				<p>Conteúdo do card</p>
			</Card>
		);
		expect(screen.getByText("Conteúdo do card")).toBeInTheDocument();
	});

	it("applies custom borderColor if provided", () => {
		const { container } = renderWithProviders(
			<Card borderColor="red">
				<p>Com borda vermelha</p>
			</Card>
		);
		const cardElement = container.firstChild as HTMLElement;
		expect(cardElement).toHaveStyle("border-color: red");
	});

	it("applies className if provided", () => {
		const { container } = renderWithProviders(
			<Card className="test-class">
				<p>Com classe</p>
			</Card>
		);
		const cardElement = container.firstChild as HTMLElement;
		expect(cardElement.classList.contains("test-class")).toBe(true);
	});
});
