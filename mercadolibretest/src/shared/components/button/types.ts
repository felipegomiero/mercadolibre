import type { ReactNode } from "react";

export type TButtonType = "button" | "submit" | "reset";

export type TButtonVariant = "secondary" | "outline" | "ghost" | "link";

export interface IButtonProps {
	children: ReactNode;
	onClick?: () => void;
	type?: TButtonType;
	variant?: TButtonVariant;
	width?: string;
	disabled?: boolean;
	className?: string;
}
