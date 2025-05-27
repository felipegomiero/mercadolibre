import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { mercadoLibrePalette } from "./shared/theme/palettes.ts";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import ItemDetailRoutes from "./pages/routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
	<ThemeProvider theme={mercadoLibrePalette}>
		<StrictMode>
			<BrowserRouter>
				<ItemDetailRoutes />
			</BrowserRouter>
		</StrictMode>
	</ThemeProvider>
);
