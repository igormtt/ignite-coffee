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

  const { data, setData } = context;

  const [activeButton, setActiveButton] = useState<number | null>(
    data?.forma_pagament ? Number(data.forma_pagament) : null
  );

  const handleButtonClick = (index: number) => {
    setActiveButton(index);

    setData((prevData) => {
      if (!prevData) return null;

      return {
        ...prevData,
        forma_pagament: index.toString(),
      };
    });
  };

  return (
    <ButtonGroupComponent>
      <Button
        isActive={activeButton === 0}
        onClick={() => handleButtonClick(0)}
        icon={<CreditCard size={16} />}
        text="CARTÃO DE CRÉDITO"
        value="CARTÃO DE CRÉDITO"
      />

      <Button
        isActive={activeButton === 1}
        onClick={() => handleButtonClick(1)}
        icon={<Bank size={16} />}
        text="CARTÃO DE DÉBITO"
        value="CARTÃO DE DÉBITO"
      />

      <Button
        isActive={activeButton === 2}
        onClick={() => handleButtonClick(2)}
        icon={<Money size={16} />}
        text="DINHEIRO"
        value="DINHEIRO"
      />
    </ButtonGroupComponent>
  );
}
