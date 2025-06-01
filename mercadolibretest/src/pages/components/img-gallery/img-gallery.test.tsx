import { describe, it, expect, beforeEach } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import ImgGallery from "./img-gallery.view";
import renderWithProviders from "../../../tests/render-with-providers";

// Mocks
const mockImages = [
	{ src: "https://example.com/image1.jpg", alt: "Imagem 1" },
	{ src: "https://example.com/image2.jpg", alt: "Imagem 2" },
];

describe("ImgGallery", () => {
	beforeEach(() => renderWithProviders(<ImgGallery images={mockImages} />));

	it("renders gallery section and thumbnails", () => {
		expect(screen.getByTestId("img-gallery")).toBeInTheDocument();
		expect(screen.getAllByLabelText(/Imagem/)).toHaveLength(mockImages.length);
	});

	it("displays the first image by default", () => {
		const displayed = screen.getByRole("img");
		expect(displayed).toHaveAttribute("src", mockImages[0].src);
	});

	it("updates displayed image on thumbnail click", () => {
		const secondThumbnail = screen.getByLabelText("Imagem 2");
		fireEvent.click(secondThumbnail);

		const displayed = screen.getByRole("img");
		expect(displayed).toHaveAttribute("src", mockImages[1].src);
	});
});
