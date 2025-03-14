import { MapPin, Money, Timer } from "phosphor-react";
import {
  ConfirmationContainer,
  DadosEntrega,
  FormaDePagamento,
  LocalDeEntrega,
  PrevisaoDeEntrega,
} from "./style";
import { useContext, useEffect } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";

export default function Confirmation() {
  const checkoutContext = useContext(CheckoutContext);

  const data = checkoutContext?.data;

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <ConfirmationContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <DadosEntrega>
          <LocalDeEntrega>
            <div>
              <MapPin weight="fill" size={16} />
            </div>
            {data && (
              <p className="paragraph">
                Entrega em <span>{data.rua}</span> {data.bairro} - {data.cidade}
                , {data.uf}
              </p>
            )}
          </LocalDeEntrega>

          <PrevisaoDeEntrega>
            <div>
              <Timer size={16} />
            </div>

            <div className="col">
              <p>previsao de entrega</p>
              <span>20 min - 30 min</span>
            </div>
          </PrevisaoDeEntrega>

          <FormaDePagamento>
            <div>
              <Money size={16} />
            </div>

            <div className="col">
              <p>Pagamento na Entrega</p>
              <span>{data?.forma_pagament}</span>
            </div>
          </FormaDePagamento>
        </DadosEntrega>
      </div>

      <div>
        <img src="/Illustration.svg" />
      </div>
    </ConfirmationContainer>
  );
}
