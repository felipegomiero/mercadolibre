interface CrossIconProps {
	size?: number;
	color?: string;
	ariaLabel?: string;
}

const CrossIcon: React.FC<CrossIconProps> = ({
	size = 24,
	color = "#000",
	ariaLabel = "Fechar",
}) => {
	return (
		<svg
			data-testid="cross-icon"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			role="img"
			aria-label={ariaLabel}
			xmlns="http://www.w3.org/2000/svg">
			<title>{ariaLabel}</title>
			<line
				x1="18"
				y1="6"
				x2="6"
				y2="18"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<line
				x1="6"
				y1="6"
				x2="18"
				y2="18"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export default CrossIcon;
