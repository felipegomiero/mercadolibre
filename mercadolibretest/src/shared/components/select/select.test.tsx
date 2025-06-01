import { screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Select from "./select.view";
import renderWithProviders from "../../../tests/render-with-providers";

describe("Select component", () => {
	const mockOptions = [
		{ label: "Option 1", value: "1" },
		{ label: "Option 2", value: "2" },
		{ label: "Option 3", value: "3" },
	];

	it("renders with given options", () => {
		renderWithProviders(
			<Select
				options={mockOptions}
				value={"1"}
				onChange={() => {}}
				label="Test Label"
			/>
		);

		expect(screen.getByText(/test label/i)).toBeInTheDocument();
		expect(screen.getByRole("combobox")).toBeInTheDocument();
		expect(screen.getAllByRole("option")).toHaveLength(mockOptions.length);
	});

	it("renders with selected value", () => {
		renderWithProviders(
			<Select options={mockOptions} value={"2"} onChange={() => {}} />
		);

		const select = screen.getByRole("combobox") as HTMLSelectElement;
		expect(select.value).toBe("2");
	});

	it("calls onChange with the selected value", () => {
		const handleChange = vi.fn();
		renderWithProviders(
			<Select options={mockOptions} value={"1"} onChange={handleChange} />
		);

		const select = screen.getByRole("combobox");
		fireEvent.change(select, { target: { value: "3" } });

		expect(handleChange).toHaveBeenCalledWith("3");
	});

	it("disables the select when disabled prop is true", () => {
		renderWithProviders(
			<Select options={mockOptions} value={"1"} onChange={() => {}} disabled />
		);

		expect(screen.getByRole("combobox")).toBeDisabled();
	});
});
