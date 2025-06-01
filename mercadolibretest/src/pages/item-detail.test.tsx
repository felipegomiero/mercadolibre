import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ItemDetailPage from "./item-detail.page";
import renderWithProviders from "../tests/render-with-providers";

// Mocks dos componentes filhos
vi.mock("./components/top-nav/top-nav.view", () => ({
	default: () => <header data-testid="top-nav">TopNav</header>,
}));

vi.mock("./components/breadcrumbs/breadcrumbs.view", () => ({
	default: () => <nav data-testid="breadcrumbs">Breadcrumbs</nav>,
}));

vi.mock("./components/details/details.view", () => ({
	default: () => <section data-testid="details">Details</section>,
}));

vi.mock("./components/key-features/key-features.view", () => ({
	default: () => <section data-testid="key-features">Key features</section>,
}));

vi.mock("./components/img-gallery/img-gallery.view", () => ({
	default: () => <div data-testid="img-gallery">Gallery</div>,
}));

// Mock de dados
vi.mock("./services/mocks", () => ({
	default: {
		mockBreadCrumbsItems: [{ label: "Home", link: "/" }],
		mockItem: {
			title: "Item Teste",
			desc: "<strong>Descrição</strong> do item.",
			images: [{ src: "/image.jpg", alt: "Imagem do item" }],
		},
	},
}));

describe("ItemDetailPage", () => {
	it("renders the main sections correctly", () => {
		renderWithProviders(<ItemDetailPage />);

		expect(screen.getByTestId("top-nav")).toBeInTheDocument();
		expect(screen.getByTestId("breadcrumbs")).toBeInTheDocument();
		expect(screen.getByTestId("img-gallery")).toBeInTheDocument();
		expect(screen.getByTestId("details")).toBeInTheDocument();
		expect(screen.getByTestId("details")).toBeInTheDocument();

		// Verifica título "Descrição"
		expect(
			screen.getByRole("heading", { name: /descrição/i })
		).toBeInTheDocument();

		// Verifica conteúdo renderizado do HTML sanitizado
		expect(screen.getByText(/descrição/i)).toBeInTheDocument();
		expect(screen.getByText(/do item/i)).toBeInTheDocument();
	});

	it("uses semantic landmarks and aria-labels", () => {
		render(<ItemDetailPage />);

		expect(
			screen.getByRole("main", { name: /detalhes do item/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("navigation", { name: /trilha de páginas/i })
		).toBeInTheDocument();
	});
});
