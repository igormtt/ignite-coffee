import { useContext, useState } from "react";
import { QuantityButton, QuantityInput, QuantitySelector } from "./style";
import { Minus, Plus } from "phosphor-react";
import { CheckoutContext } from "../../contexts/CheckoutContext";

export default function CounterInput() {
  const [quantityCoffee, setQuantityCoffee] = useState<number>(0);

  const { setQuantityCart, quantityCart } = useContext(CheckoutContext);
  const sum = () => {
    setQuantityCoffee(quantityCoffee + 1);
    setQuantityCart(quantityCart + 1);
  };
  const decrease = () => {
    if (quantityCoffee < 1) {
      return;
    }
    setQuantityCoffee(quantityCoffee - 1);
    setQuantityCart(quantityCart - 1);
  };

  return (
    <QuantitySelector>
      <QuantityButton onClick={decrease}>
        <Minus size={14} />
      </QuantityButton>
      <QuantityInput>{quantityCoffee}</QuantityInput>
      <QuantityButton onClick={sum}>
        <Plus size={14} />
      </QuantityButton>
    </QuantitySelector>
  );
}
