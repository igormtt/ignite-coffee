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
import { toast } from "react-toastify";

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
            <MapPin size={22} weight="fill" /> Rio de Janeiro, RJ
          </Location>

          {quantityCart > 0 ? (
            <Link to="/checkout">
              <ButtonContainer>
                <QuantidadeNoCarrinho>{quantityCart}</QuantidadeNoCarrinho>
                <ShoppingCart size={22} weight="fill" />
              </ButtonContainer>
            </Link>
          ) : (
            <ButtonContainer
              onClick={() =>
                toast.warning("Adicione itens ao carrinho", {
                  autoClose: 3000,
                  position: "top-right",
                  theme: "colored",
                })
              }
            >
              <QuantidadeNoCarrinho>{quantityCart}</QuantidadeNoCarrinho>
              <ShoppingCart size={22} weight="fill" />
            </ButtonContainer>
          )}
        </Inform>
      </div>
    </HeaderContainer>
  );
}
