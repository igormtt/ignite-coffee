import { createContext, useState, ReactNode } from "react";
import { CheckoutFormData } from "../pages/Checkout/Checkout";

interface Coffee {
  id: string;
  name: string;
  img: string;
  value: number;
  quantity: number;
}

interface CheckoutContextType {
  cart: Coffee[];
  addToCart: (coffee: Coffee) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  quantityCart: number;
  totalValue: number;
  itemQuantity: number;
  formData: CheckoutFormData | undefined;
  setFormData: React.Dispatch<
    React.SetStateAction<CheckoutFormData | undefined>
  >;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

export const CheckoutContext = createContext({} as CheckoutContextType);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Coffee[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formData, setFormData] = useState<CheckoutFormData>();

  const quantityCart = cart.length;
  const itemQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalValue = cart.reduce(
    (acc, item) => acc + item.value * item.quantity,
    0
  );

  const addToCart = (coffee: Coffee) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === coffee.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === coffee.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...coffee, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <CheckoutContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        quantityCart,
        totalValue,
        itemQuantity,
        formData,
        setFormData,
        paymentMethod,
        setPaymentMethod,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
