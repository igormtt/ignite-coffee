import { useContext } from "react";
import { QuantityButton, QuantityInput, QuantitySelector } from "./style";
import { Minus, Plus } from "phosphor-react";
import { CheckoutContext } from "../../contexts/CheckoutContext";

interface CounterInputProps {
  coffeeId: string;
}

export default function CounterInput({ coffeeId }: CounterInputProps) {
  const { updateQuantity, cart, removeFromCart } = useContext(CheckoutContext);
  const coffee = cart.find((item) => item.id === coffeeId);
  const quantity = coffee ? coffee.quantity : 0;

  const plusButton = () => {
    updateQuantity(coffeeId, quantity + 1);
  };

  const decreaseButton = () => {
    if (quantity > 1) {
      updateQuantity(coffeeId, quantity - 1);
    } else {
      removeFromCart(coffeeId);
    }
  };

  return (
    <QuantitySelector>
      {quantity > 0 && (
        <>
          <QuantityButton
            type="button"
            onClick={decreaseButton}
            disabled={quantity === 0}
          >
            <Minus size={14} type="button" />
          </QuantityButton>
          <QuantityInput>{quantity}</QuantityInput>
          <QuantityButton type="button" onClick={plusButton}>
            <Plus size={14} />
          </QuantityButton>
        </>
      )}
    </QuantitySelector>
  );
}
