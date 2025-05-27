import { SvgShoppingCartIcon } from "../../../assets/icons";
import Button from "../button/button.view";
import * as Styled from "./topnav.styled";

const TopNav = () => {
	return (
		<Styled.TopNav>
			<Styled.TopNavWrapper>
				<Styled.Logo />

				<Styled.ActionsWrapper>
					<Button disabled variant="ghost">
						Minha conta
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
