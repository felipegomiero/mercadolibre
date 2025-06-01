import Separator from "./separator.view";
import { describe, it, expect } from "vitest";
import renderWithProviders from "../../../tests/render-with-providers";
import { mercadoLibrePalette } from "../../theme/palettes";
import type { ISeparator } from "./types";

const renderWithTheme = (props: ISeparator) =>
	renderWithProviders(<Separator {...props} />);

describe("Separator", () => {
	it("renderiza com valores padrão", () => {
		const { container } = renderWithTheme({});
		const separator = container.firstChild as HTMLElement;

		expect(separator).toHaveStyle("width: 1px");
		expect(separator).toHaveStyle("margin: 0 12px");
		expect(separator).toHaveStyle(
			`background-color: ${mercadoLibrePalette.neutral[600]}`
		);
	});

	it("renderiza como horizontal quando vertical=false", () => {
		const { container } = renderWithTheme({ vertical: false });
		const separator = container.firstChild as HTMLElement;

		expect(separator).toHaveStyle("width: 100%;");
	});

	it("aplica cor customizada quando fornecida", () => {
		const customColor = "#ff0000";
		const { container } = renderWithTheme({ color: customColor });
		const separator = container.firstChild as HTMLElement;

		expect(separator).toHaveStyle(`background-color: ${customColor}`);
	});

	it("aplica margem e espessura customizadas", () => {
		const { container } = renderWithTheme({ margin: "8px", thickness: "4px" });
		const separator = container.firstChild as HTMLElement;

		expect(separator).toHaveStyle("margin: 8px");
		expect(separator).toHaveStyle("width: 4px");
	});

	it("aplica className se fornecida", () => {
		const { container } = renderWithTheme({ className: "custom-separator" });
		const separator = container.firstChild as HTMLElement;

		expect(separator.className).toContain("custom-separator");
	});
});
