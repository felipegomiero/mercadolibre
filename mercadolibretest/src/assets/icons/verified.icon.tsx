interface VerifiedIconProps {
	size?: number;
	color?: string;
	label?: string;
	decorative?: boolean;
	className?: string;
}

const VerifiedIcon: React.FC<VerifiedIconProps> = ({
	size = 24,
	color = "#3b82f6",
	label = "Ícone de verificado",
	decorative = false,
	className,
}) => {
	const titleId = `verified-icon-title-${Math.random()
		.toString(36)
		.substring(2, 9)}`;

	return (
		<svg
			data-testid="verified-icon"
			className={className}
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill={color}
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-hidden={decorative}
			aria-labelledby={!decorative ? titleId : undefined}
			focusable="false">
			{!decorative && <title id={titleId}>{label}</title>}
			<path d="M12 2L15 4L19 3L20 7L22 10L20 13L21 17L17 18L14 21L12 19L9 21L6 18L2.5 17L4 13L2 10L4 7L5 3L9 4L12 2Z" />
			<path
				d="M10.5 13.5L8.5 11.5L7.5 12.5L10.5 15.5L16.5 9.5L15.5 8.5L10.5 13.5Z"
				fill="white"
			/>
		</svg>
	);
};

export default VerifiedIcon;
