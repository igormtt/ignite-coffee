import { createContext, ReactNode, useState } from "react";
import { CheckoutFormData } from "../pages/Checkout/Checkout";

interface CheckoutContextType {
  data: CheckoutFormData | null;
  setData: React.Dispatch<React.SetStateAction<CheckoutFormData | null>>;
  quantityCart: number;
  setQuantityCart: React.Dispatch<React.SetStateAction<number>>;
}

export const CheckoutContext = createContext<CheckoutContextType>({
  data: null,
  setData: () => {},
  quantityCart: 0,
  setQuantityCart: () => {},
});

interface CheckoutProviderProps {
  children: ReactNode;
}

export function CheckoutProvider({ children }: CheckoutProviderProps) {
  const [data, setData] = useState<CheckoutFormData | null>(null);
  const [quantityCart, setQuantityCart] = useState<number>(0);

  return (
    <CheckoutContext.Provider
      value={{ data, setData, quantityCart, setQuantityCart }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
