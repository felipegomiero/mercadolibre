import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { mercadoLibrePalette } from "./shared/theme/palettes.ts";
import { BrowserRouter } from "react-router-dom";
import ItemDetailRoutes from "./pages/routes/routes.tsx";
import { ThemeProvider } from "@emotion/react";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<ThemeProvider theme={mercadoLibrePalette}>
		<StrictMode>
			<BrowserRouter>
				<ItemDetailRoutes />
			</BrowserRouter>
		</StrictMode>
	</ThemeProvider>
);
