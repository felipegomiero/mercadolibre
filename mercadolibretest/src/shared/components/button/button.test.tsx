import { screen, fireEvent } from "@testing-library/react";
import Button from "./button.view";
import renderWithProviders from "../../testing/render-with-providers";

describe("Button component", () => {
	it("renders with children text", () => {
		renderWithProviders(<Button>Click me</Button>);

		expect(screen.getByText("Click me")).toBeTruthy();
	});

	it("renders disabled when specified", () => {
		renderWithProviders(<Button disabled>Disabled</Button>);

		const button = screen.getByRole("button");
		expect(button).toHaveProperty("disabled", "");
	});

	it("calls onClick when clicked", () => {
		const handleClick = jest.fn();

		renderWithProviders(<Button onClick={handleClick}>Click me</Button>);

		const button = screen.getByRole("button");
		fireEvent.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("renders with type='submit' when specified", () => {
		renderWithProviders(<Button type="submit">Submit</Button>);
		const button = screen.getByRole("button");
		expect(button).toHaveProperty("type", "submit");
	});
});
