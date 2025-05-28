import { screen } from "@testing-library/react";
import Typography from "./typography.view";
import renderWithProviders from "../../../tests/render-with-providers";
import { describe, expect, it } from "vitest";

describe("Typography component", () => {
	it("renders children correctly", () => {
		renderWithProviders(<Typography>Test Text</Typography>);
		expect(screen.getByText("Test Text")).toBeTruthy();
	});

	it('renders with correct HTML tag when "as" prop is used', () => {
		renderWithProviders(<Typography as="h1">Heading</Typography>);
		const element = screen.getByText("Heading");
		expect(element.tagName.toLowerCase()).toBe("h1");
	});

	it('uses default "span" tag if "as" is not provided', () => {
		renderWithProviders(<Typography>Span Text</Typography>);
		const element = screen.getByText("Span Text");
		expect(element.tagName.toLowerCase()).toBe("span");
	});
});
