import { useContext, useState } from "react";
import Button from "../Button/Button";
import { CreditCard, Bank, Money } from "phosphor-react";
import { ButtonGroup as ButtonGroupComponent } from "./style";
import { CheckoutContext } from "../../contexts/CheckoutContext";

export default function ButtonGroup() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("ButtonGroup deve estar dentro de um CheckoutProvider");
  }

  const { paymentMethod, setPaymentMethod } = context;

  const [activeButton, setActiveButton] = useState<string | null>(
    paymentMethod
  );

  const handleButtonClick = (method: string) => {
    setActiveButton(method);
    setPaymentMethod(method);
    console.log(`Método de pagamento selecionado: ${method}`);
  };

  return (
    <ButtonGroupComponent>
      <Button
        isActive={activeButton === "CARTÃO DE CRÉDITO"}
        onClick={() => handleButtonClick("CARTÃO DE CRÉDITO")}
        icon={<CreditCard size={16} />}
        text="CARTÃO DE CRÉDITO"
        value="CARTÃO DE CRÉDITO"
      />

      <Button
        isActive={activeButton === "CARTÃO DE DÉBITO"}
        onClick={() => handleButtonClick("CARTÃO DE DÉBITO")}
        icon={<Bank size={16} />}
        text="CARTÃO DE DÉBITO"
        value="CARTÃO DE DÉBITO"
      />

      <Button
        isActive={activeButton === "DINHEIRO"}
        onClick={() => handleButtonClick("DINHEIRO")}
        icon={<Money size={16} />}
        text="DINHEIRO"
        value="DINHEIRO"
      />
    </ButtonGroupComponent>
  );
}
