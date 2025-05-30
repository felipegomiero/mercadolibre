import React from "react";

interface SvgShoppingCartIconProps {
	size?: number;
	color?: string;
	label?: string;
	decorative?: boolean;
}

const SvgShoppingCartIcon: React.FC<SvgShoppingCartIconProps> = ({
	size = 26,
	color = "currentColor",
	label = "Ícone de carrinho de compras",
	decorative = false,
}) => {
	const titleId = `shopping-cart-title-${Math.random()
		.toString(36)
		.substr(2, 9)}`;

	return (
		<svg
			data-testid="shopping-cart-icon"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 26 24"
			fill="none"
			stroke={color}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="img"
			aria-hidden={decorative}
			aria-labelledby={!decorative ? titleId : undefined}
			focusable="false">
			{!decorative && <title id={titleId}>{label}</title>}
			<circle cx="9" cy="21" r="1" />
			<circle cx="20" cy="21" r="1" />
			<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
		</svg>
	);
};

export default SvgShoppingCartIcon;
