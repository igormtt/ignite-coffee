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
import { CheckoutContext } from "../../contexts/CheckoutContext";
import { useContext } from "react";

export default function Header() {
  const { quantityCart } = useContext(CheckoutContext);

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
              <QuantidadeNoCarrinho>{quantityCart}</QuantidadeNoCarrinho>
              <ShoppingCart size={22} weight="fill" />
            </ButtonContainer>
          </Link>
        </Inform>
      </div>
    </HeaderContainer>
  );
}
