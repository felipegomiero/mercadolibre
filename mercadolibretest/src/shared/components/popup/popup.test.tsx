import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { Popup } from "./popup.view";
import renderWithProviders from "../../../tests/render-with-providers";

beforeEach(() => {
	const portalRoot = document.createElement("div");
	portalRoot.setAttribute("id", "portal-root");
	document.body.appendChild(portalRoot);
});

afterEach(() => {
	const portalRoot = document.getElementById("portal-root");
	if (portalRoot) {
		portalRoot.remove();
	}
	document.body.style.overflow = "";
});

describe("Popup component", () => {
	it("does not render when isOpen is false", () => {
		renderWithProviders(
			<Popup isOpen={false} onClose={() => {}} title="Test Popup">
				<p>Content</p>
			</Popup>
		);
		expect(screen.queryByText("Test Popup")).not.toBeInTheDocument();
	});

	it("renders when isOpen is true", () => {
		renderWithProviders(
			<Popup isOpen={true} onClose={() => {}} title="Test Popup">
				<p>Popup content</p>
			</Popup>
		);
		expect(screen.getByText("Test Popup")).toBeInTheDocument();
		expect(screen.getByText("Popup content")).toBeInTheDocument();
	});

	it("calls onClose when close icon is clicked", () => {
		const handleClose = vi.fn();
		renderWithProviders(
			<Popup isOpen={true} onClose={handleClose} title="Closable Popup">
				<p>Some content</p>
			</Popup>
		);

		fireEvent.click(screen.getByLabelText(/fechar popup/i));
		expect(handleClose).toHaveBeenCalledTimes(1);
	});

	it("calls onClose when overlay is clicked", () => {
		const handleClose = vi.fn();
		renderWithProviders(
			<Popup isOpen={true} onClose={handleClose} title="Overlay Test">
				<p>Overlay content</p>
			</Popup>
		);

		const overlay = screen.getByTestId("popup-overlay");
		fireEvent.click(overlay);
		expect(handleClose).toHaveBeenCalledTimes(1);
	});

	it("does not call onClose when content is clicked", () => {
		const handleClose = vi.fn();
		renderWithProviders(
			<Popup isOpen={true} onClose={handleClose} title="Popup Title">
				<p>Content</p>
			</Popup>
		);

		const content = screen.getByTestId("popup-content");
		fireEvent.click(content);
		expect(handleClose).not.toHaveBeenCalled();
	});

	it("calls onClose when ESC is pressed", () => {
		const handleClose = vi.fn();
		renderWithProviders(
			<Popup isOpen={true} onClose={handleClose} title="ESC Close">
				<p>ESC content</p>
			</Popup>
		);

		fireEvent.keyDown(document, { key: "Escape" });
		expect(handleClose).toHaveBeenCalledTimes(1);
	});

	it("sets body overflow to hidden when open", () => {
		renderWithProviders(
			<Popup isOpen={true} onClose={() => {}} title="Scroll Lock">
				<p>Body scroll</p>
			</Popup>
		);
		expect(document.body.style.overflow).toBe("hidden");
	});

	it("clears body overflow when unmounted", () => {
		const { unmount } = renderWithProviders(
			<Popup isOpen={true} onClose={() => {}} title="Unmount Test">
				<p>Unmounting</p>
			</Popup>
		);
		unmount();
		expect(document.body.style.overflow).toBe("");
	});
});
