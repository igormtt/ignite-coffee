import { createContext, ReactNode, useState } from "react";
import { CheckoutFormData } from "../pages/Checkout/Checkout";

interface CheckoutContextType {
  data: CheckoutFormData | null;
  setData: React.Dispatch<React.SetStateAction<CheckoutFormData | null>>;
}

export const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
);

interface CheckoutProviderProps {
  children: ReactNode;
}

export function CheckoutProvider({ children }: CheckoutProviderProps) {
  const [data, setData] = useState<CheckoutFormData | null>(null);

  return (
    <CheckoutContext.Provider value={{ data, setData }}>
      {children}
    </CheckoutContext.Provider>
  );
}
