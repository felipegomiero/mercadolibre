import { fireEvent, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Breadcrumbs, { type IBreadcrumbItem } from "./breadcrumbs.view";
import renderWithProviders from "../../../tests/render-with-providers";

// Mocks padrão
const mockItems: IBreadcrumbItem[] = [
	{ label: "Home", to: "/home" },
	{ label: "Categoria", to: "/categoria" },
	{ label: "Produto" },
];

// Helper para mockar useBreakpoint
const mockUseBreakpoint = vi.fn();
vi.mock("../../../shared/hooks", async () => {
	const actual = await vi.importActual("../../../shared/hooks");
	return {
		...actual,
		useBreakpoint: () => mockUseBreakpoint(),
	};
});

describe("Breadcrumbs - Desktop", () => {
	beforeEach(() => {
		mockUseBreakpoint.mockReturnValue({ isMobile: false });
	});

	it("renderiza todos os itens de breadcrumb", () => {
		renderWithProviders(<Breadcrumbs items={mockItems} />);
		expect(screen.getByText("Home")).toBeInTheDocument();
		expect(screen.getByText("Categoria")).toBeInTheDocument();
		expect(screen.getByText("Produto")).toBeInTheDocument();
	});

	it("renderiza separadores padrão corretamente", () => {
		renderWithProviders(<Breadcrumbs items={mockItems} />);
		const separators = screen.getAllByText(">");
		expect(separators).toHaveLength(2);
	});

	it("usa separador customizado quando informado", () => {
		renderWithProviders(<Breadcrumbs items={mockItems} separator="→" />);
		const customSeparators = screen.getAllByText("→");
		expect(customSeparators).toHaveLength(2);
	});

	it("executa onClick quando item é clicado", () => {
		const handleClick = vi.fn();
		const itemsWithClick: IBreadcrumbItem[] = [
			{ label: "Home", onClick: handleClick },
			{ label: "Produto" },
		];

		renderWithProviders(<Breadcrumbs items={itemsWithClick} />);
		fireEvent.click(screen.getByText("Home"));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("não renderiza separador após o último item", () => {
		renderWithProviders(<Breadcrumbs items={mockItems} />);
		const allLabels = screen.getAllByRole("listitem");
		const last = allLabels[allLabels.length - 1];
		expect(last.textContent).toBe("Produto");
	});
});

describe("Breadcrumbs - Mobile", () => {
	beforeEach(() => {
		mockUseBreakpoint.mockReturnValue({ isMobile: true });
	});

	it("renderiza apenas o último item no mobile", () => {
		renderWithProviders(<Breadcrumbs items={mockItems} />);
		expect(screen.getByText("Produto")).toBeInTheDocument();
		expect(screen.queryByText("Home")).not.toBeInTheDocument();
		expect(screen.queryByText("Categoria")).not.toBeInTheDocument();
	});

	it("não renderiza nenhum separador no mobile", () => {
		renderWithProviders(<Breadcrumbs items={mockItems} />);
		expect(screen.queryByText(">")).not.toBeInTheDocument();
	});
});
