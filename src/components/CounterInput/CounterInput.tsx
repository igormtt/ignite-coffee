import { useState } from "react";
import { QuantityButton, QuantityInput, QuantitySelector } from "./style";
import { Minus, Plus } from "phosphor-react";

export default function CounterInput() {
  const [quantity, setQuantity] = useState<number>(0);
  const sum = () => {
    setQuantity(quantity + 1);
  };
  const decrease = () => {
    if (quantity < 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  return (
    <QuantitySelector>
      <QuantityButton onClick={decrease}>
        <Minus size={14} />
      </QuantityButton>
      <QuantityInput>{quantity}</QuantityInput>
      <QuantityButton onClick={sum}>
        <Plus size={14} />
      </QuantityButton>
    </QuantitySelector>
  );
}
