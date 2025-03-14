import { ShoppingCart } from "phosphor-react";
import {
  Coffee as CoffeeComponente,
  CoffeeTags,
  CoffeeName,
  BuyContainer,
  CoffeeDescription,
} from "./style";
import CounterInput from "../CounterInput/CounterInput";

interface CoffeComponenteProps {
  img: string;
  tag: string;
  tag2?: string;
  tag3?: string;
  name: string;
  description: string;
  value: string;
}

export default function Coffee({
  img,
  tag,
  tag2,
  tag3,
  name,
  description,
  value,
}: CoffeComponenteProps) {
  return (
    <CoffeeComponente>
      <div>
        <img src={img} alt="" />
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
            R$
            <span>{value}</span>
          </p>
        </div>

        <div className="group">
          <CounterInput />
          <div className="shopping-cart">
            <ShoppingCart weight="fill" />
          </div>
        </div>
      </BuyContainer>
    </CoffeeComponente>
  );
}
