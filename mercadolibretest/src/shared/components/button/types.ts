import type { ReactNode } from "react";

export type TButtonType = "button" | "submit" | "reset";

export type TButtonVariant = "secondary" | "outline" | "ghost";

export interface IButtonProps {
	children: ReactNode;
	onClick?: () => void;
	type?: TButtonType;
	variant?: TButtonVariant;
	disabled?: boolean;
}
