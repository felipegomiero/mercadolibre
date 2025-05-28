import { render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import { mercadoLibrePalette } from "../shared/theme/palettes";
import { MemoryRouter } from "react-router-dom";

const renderWithProviders = (children: React.ReactNode) => {
	return render(
		<MemoryRouter>
			<ThemeProvider theme={mercadoLibrePalette}>{children}</ThemeProvider>
		</MemoryRouter>
	);
};

export default renderWithProviders;
