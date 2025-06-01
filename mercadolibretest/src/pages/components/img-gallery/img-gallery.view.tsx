import { useTheme } from "@emotion/react";
import * as Styled from "./img-gallery.styled";
import { useState } from "react";
import ImgMagnifier from "../img-magnifier/img-magnifier.view";
import type { IImg } from "../../types";

const ImgGallery: React.FC<{ images: IImg[] }> = ({ images }) => {
	const [displayImg, setDisplayImg] = useState<IImg>(images?.[0]);
	const theme = useTheme();
	return (
		<section
			data-testid="img-gallery"
			aria-labelledby="galeria-imagens"
			role="region">
			<ImgMagnifier src={displayImg?.src} />

			<Styled.Wrapper>
				{images?.map(({ alt, src }) => {
					return (
						<Styled.ImgCard
							key={alt}
							theme={theme}
							aria-label={alt}
							bgSrc={src}
							isCurrent={src === displayImg.src}
							onClick={() => setDisplayImg({ alt, src })}
						/>
					);
				})}
			</Styled.Wrapper>
		</section>
	);
};

export default ImgGallery;
