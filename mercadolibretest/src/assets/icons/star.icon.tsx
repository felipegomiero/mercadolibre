import React from "react";

interface StarIconProps {
	filled?: boolean;
	half?: boolean;
	size?: number;
	color?: string;
	strokeColor?: string;
	label?: string;
	decorative?: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({
	filled = false,
	half = false,
	size = 24,
	color,
	strokeColor,
	label = "Icone de estrela",
	decorative = true,
}) => {
	const titleId = `star-icon-title-${Math.random()
		.toString(36)
		.substring(2, 9)}`;

	return (
		<svg
			width={size}
			height={size}
			viewBox={`0 0 24 24`}
			role="img"
			aria-hidden={decorative}
			aria-labelledby={!decorative ? titleId : undefined}
			focusable="false"
			xmlns="http://www.w3.org/2000/svg">
			{!decorative && <title id={titleId}>{label}</title>}

			{/* empty part */}
			<polygon
				points="12 2 15.1 8.3 22 9.2 17 14.1 18.2 21 12 17.8 
                5.8 21 7 14.1 2 9.2 8.9 8.3 12 2"
				fill="transparent"
				stroke={strokeColor || color}
				strokeWidth={1.5}
			/>

			{/* filled part */}
			{(filled || half) && (
				<>
					{half && (
						<defs>
							<linearGradient id="half-gradient">
								<stop offset="50%" stopColor={color} />
								<stop offset="50%" stopColor="transparent" />
							</linearGradient>
						</defs>
					)}
					<polygon
						points="12 2 15.1 8.3 22 9.2 17 14.1 18.2 21 
                    12 17.8 5.8 21 7 14.1 2 9.2 8.9 8.3 12 2"
						fill={filled ? color : "url(#half-gradient)"}
						stroke={strokeColor}
						strokeWidth={1.5}
					/>
				</>
			)}
		</svg>
	);
};

export default StarIcon;
