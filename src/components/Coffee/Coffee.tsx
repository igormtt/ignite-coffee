import { ShoppingCart } from "phosphor-react";
import {
  Coffee as CoffeeComponente,
  CoffeeTags,
  CoffeeName,
  BuyContainer,
  CoffeeDescription,
} from "./style";
import CounterInput from "../CounterInput/CounterInput";
import { useContext } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";

export interface CoffeeProps {
  id: string;
  img: string;
  tag: string;
  tag2?: string;
  tag3?: string;
  name: string;
  description: string;
  value: number;
}

export default function Coffee({
  id,
  img,
  tag,
  tag2,
  tag3,
  name,
  description,
  value,
}: CoffeeProps) {
  const { addToCart, cart } = useContext(CheckoutContext);

  // Verifica se o item já está no carrinho
  const coffeeInCart = cart.find((item) => item.id === id);

  const handleAddToCart = () => {
    if (!coffeeInCart) {
      addToCart({ id, img, name, value, quantity: 1 });
    }
  };

  return (
    <CoffeeComponente>
      <div>
        <img src={img} alt={name} />
      </div>

      <CoffeeTags>
        <span>{tag}</span>
        {tag2 && <span>{tag2}</span>}
        {tag3 && <span>{tag3}</span>}
      </CoffeeTags>

      <CoffeeName>{name}</CoffeeName>

      <CoffeeDescription>{description}</CoffeeDescription>

      <BuyContainer>
        <div>
          <p>
            R$<span>{value.toFixed(2)}</span>
          </p>
        </div>

        <div className="group">
          {coffeeInCart && <CounterInput coffeeId={id} />}
          <div className="shopping-cart" onClick={handleAddToCart}>
            <ShoppingCart weight="fill" />
          </div>
        </div>
      </BuyContainer>
    </CoffeeComponente>
  );
}
