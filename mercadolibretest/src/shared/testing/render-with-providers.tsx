import { render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import { mercadoLibrePalette } from "./shared/theme/palettes";

const renderWithProviders = (children: React.ReactNode) => {
	return render(
		<ThemeProvider theme={mercadoLibrePalette}>{children}</ThemeProvider>
	);
};

export default renderWithProviders;
