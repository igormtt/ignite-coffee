import { Button as ButtonComponent } from "./style";
import { ReactNode } from "react";

interface ButtonProps {
  text?: string;
  icon?: ReactNode;
  isActive: boolean;
  onClick: () => void;
  value: string;
  getPayment?: (index: number) => void;
}

export default function Button({
  icon,
  text,
  isActive,
  onClick,
  value,
}: ButtonProps) {
  return (
    <ButtonComponent
      onClick={onClick}
      className={isActive ? "active" : ""}
      type="button"
      value={value}
    >
      {icon}
      {text}
    </ButtonComponent>
  );
}
