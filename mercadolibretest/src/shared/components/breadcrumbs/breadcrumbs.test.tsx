import { screen, fireEvent } from "@testing-library/react";
import Breadcrumbs, { type IBreadcrumbItem } from "./breadcrumbs.view";
import renderWithProviders from "../../../tests/render-with-providers";
import { describe, expect, it, vitest } from "vitest";

describe("Breadcrumbs component", () => {
	const mockItems: IBreadcrumbItem[] = [
		{ label: "Home", to: "/home" },
		{ label: "Category", to: "/category" },
		{ label: "Product" },
	];

	it("renders all breadcrumb items", () => {
		renderWithProviders(<Breadcrumbs items={mockItems} />);

		expect(screen.getByText("Home")).toBeTruthy();
		expect(screen.getByText("Category")).toBeTruthy();
		expect(screen.getByText("Product")).toBeTruthy();
	});

	it("renders correct number of separators", () => {
		renderWithProviders(<Breadcrumbs items={mockItems} />);

		const separators = screen.getAllByText(">");
		expect(separators).toHaveLength(2); // items.length - 1
	});

	it("renders custom separator", () => {
		renderWithProviders(<Breadcrumbs items={mockItems} separator="→" />);

		const customSeparators = screen.getAllByText("→");
		expect(customSeparators).toHaveLength(2);
	});

	it("calls onClick when breadcrumb item is clicked", () => {
		const handleClick = vitest.fn();
		const itemsWithClick: IBreadcrumbItem[] = [
			{ label: "Home", onClick: handleClick },
			{ label: "Product" },
		];

		renderWithProviders(<Breadcrumbs items={itemsWithClick} />);

		fireEvent.click(screen.getByText("Home"));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("does not render separator after the last item", () => {
		renderWithProviders(<Breadcrumbs items={mockItems} />);

		const lastItem = screen.getByText("Product");
		expect(lastItem.nextSibling).toBeNull();
	});
});
