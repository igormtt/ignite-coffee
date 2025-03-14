import { MapPin, ShoppingCart } from "phosphor-react";
import {
  HeaderContainer,
  Inform,
  Location,
  ButtonContainer,
  QuantidadeNoCarrinho,
} from "./style";
import Logo from "/Logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <Link to="/">
          <img src={Logo} />
        </Link>
      </div>

      <div>
        <Inform>
          <Location>
            <MapPin size={22} weight="fill" /> Porto Alegre, RS
          </Location>

          <Link to="/checkout">
            <ButtonContainer>
              <QuantidadeNoCarrinho>{0}</QuantidadeNoCarrinho>
              <ShoppingCart size={22} weight="fill" />
            </ButtonContainer>
          </Link>
        </Inform>
      </div>
    </HeaderContainer>
  );
}
