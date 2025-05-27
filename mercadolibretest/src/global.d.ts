import type { mercadoLibrePalette } from "./shared/theme/palettes";

declare module "@emotion/react" {
	export interface Theme {
		primary: typeof mercadoLibrePalette.primary;
		secondary: typeof mercadoLibrePalette.secondary;
		neutral: typeof mercadoLibrePalette.neutral;
	}
}
