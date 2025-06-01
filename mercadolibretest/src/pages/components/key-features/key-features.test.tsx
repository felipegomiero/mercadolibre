import { screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import KeyFeatures from "./key-features.view";
import renderWithProviders from "../../../tests/render-with-providers";

const mockKeyFeatures = [
	{ desc: "Tela AMOLED de 6.5 polegadas" },
	{ desc: "Processador Octa-Core de última geração" },
	{ desc: "Bateria de longa duração com 5000mAh" },
];

describe("KeyFeatures Component", () => {
	beforeEach(() =>
		renderWithProviders(<KeyFeatures keyFeatures={mockKeyFeatures} />)
	);

	it("renders section with accessible attributes", () => {
		const section = screen.getByTestId("key-features");
		expect(section).toBeInTheDocument();
		expect(section).toHaveAttribute(
			"aria-labelledby",
			"caracteriscas-chave-produto"
		);
	});

	it("renders title correctly", () => {
		expect(
			screen.getByText("O que você precisa saber sobre este produto")
		).toBeInTheDocument();
	});

	it("renders all feature descriptions", () => {
		mockKeyFeatures.forEach(({ desc }) => {
			expect(screen.getByText(desc)).toBeInTheDocument();
		});
	});
});
