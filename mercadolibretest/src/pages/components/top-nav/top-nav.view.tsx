import { SvgShoppingCartIcon } from "../../../assets/icons";
import Button from "../../../shared/components/button/button.view";
import * as Styled from "./top-nav.styled";

const TopNav = () => {
	return (
		<Styled.TopNav data-testid="top-nav" role="banner">
			<Styled.TopNavWrapper>
				<Styled.Logo data-testid="logo" />

				<Styled.ActionsWrapper>
					<Button variant="ghost">Minha conta</Button>
					<Button disabled variant="ghost">
						Compras
					</Button>
					<Button variant="ghost">
						<SvgShoppingCartIcon />
					</Button>
				</Styled.ActionsWrapper>
			</Styled.TopNavWrapper>
		</Styled.TopNav>
	);
};

export default TopNav;
