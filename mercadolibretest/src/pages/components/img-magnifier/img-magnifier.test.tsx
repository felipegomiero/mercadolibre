import { screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import ImgMagnifier from "./img-magnifier.view";
import renderWithProviders from "../../../tests/render-with-providers";

const imgSrc = "https://example.com/image.jpg";

describe("ImgMagnifier Component", () => {
	beforeEach(() =>
		renderWithProviders(
			<ImgMagnifier
				src={imgSrc}
				imgSize={{ width: "400px", height: "300px" }}
			/>
		)
	);

	it("renders the image", () => {
		const image = screen.getByRole("img");
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute("src", imgSrc);
	});

	it("does not show magnifier by default", () => {
		const magnifier = screen.getByTestId("magnifier-glass");
		expect(magnifier).toHaveStyle("display: none");
	});

	it("shows magnifier on mouse enter and hides on leave", () => {
		const image = screen.getByRole("img");
		const magnifier = screen.getByTestId("magnifier-glass");

		// Trigger mouse enter
		fireEvent.mouseEnter(image);
		expect(magnifier).toHaveStyle("display: block");

		// Trigger mouse leave
		fireEvent.mouseLeave(image);
		expect(magnifier).toHaveStyle("display: none");
	});

	it("updates magnifier position on mouse move", () => {
		const image = screen.getByRole("img");

		fireEvent.mouseEnter(image);
		fireEvent.mouseMove(image, { pageX: 150, pageY: 100 });

		// We can't assert the exact position without mocking getBoundingClientRect,
		// but we can at least verify no crash and magnifier is shown
		const magnifier = screen.getByTestId("magnifier-glass");
		expect(magnifier).toBeVisible();
	});
});
