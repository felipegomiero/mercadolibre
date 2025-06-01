import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import StarRating from "./star-rating";
import renderWithProviders from "../../../tests/render-with-providers";

describe("<StarRating />", () => {
	it("renders with default props", () => {
		renderWithProviders(<StarRating />);

		expect(screen.getByTestId("star-rating")).toBeInTheDocument();
		expect(screen.getByText("0")).toBeInTheDocument(); // default value
		expect(screen.getByText("(0)")).toBeInTheDocument(); // default qty

		// All stars should be empty by default
		expect(screen.getAllByTestId("star-empty")).toHaveLength(5);
	});

	it("renders correct number of filled and half stars", () => {
		render(<StarRating value={3.5} qty={123} />);

		expect(screen.getByText("3.5")).toBeInTheDocument();
		expect(screen.getByText("(123)")).toBeInTheDocument();

		expect(screen.getAllByTestId("star-filled")).toHaveLength(3);
		expect(screen.getAllByTestId("star-half")).toHaveLength(1);
		expect(screen.getAllByTestId("star-empty")).toHaveLength(1);
	});

	it("has accessible labels on stars", () => {
		render(<StarRating value={4} />);

		const stars = screen.getAllByLabelText(/de 5 estrelas/i);
		expect(stars).toHaveLength(5);
	});
});
