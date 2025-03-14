import { useForm } from "react-hook-form";
import { CurrencyDollar, MapPinLine, Trash } from "phosphor-react";
import {
  CheckoutContainer,
  Formulario,
  InputArea,
  NumeroEComplemento,
  BairroCidadeUF,
  PaymentMethod,
  PaymantOptions,
  CarrinhoDoCheckout,
  CheckContainer,
  ItemsDoCarrinho,
  RemoveButton,
  Separator,
  ConfirmacaoDoPedido,
  ConfirmarItem,
  GeralForm,
} from "./style";
import { useContext } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";

import ButtonGroup from "../../components/Button/ButtonGroup";
import CounterInput from "../../components/CounterInput/CounterInput";
import { useNavigate } from "react-router-dom";

export interface CheckoutFormData {
  cep: string;
  rua: string;
  numero: number;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
  forma_pagament: string;
}

export default function Checkout() {
  const { register, handleSubmit } = useForm<CheckoutFormData>();

  const navigate = useNavigate();

  const checkoutContext = useContext(CheckoutContext);

  if (!checkoutContext) {
    throw new Error("CheckoutContext must be used within a CheckoutProvider");
  }

  const { setData } = checkoutContext;

  const onSubmitForm = (data: CheckoutFormData) => {
    setData(data);
    navigate("/success");
  };

  return (
    <CheckoutContainer>
      <GeralForm onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <div className="formz">
            <div className="title">
              <h3>Complete seu pedido</h3>
            </div>

            <Formulario onSubmit={handleSubmit(onSubmitForm)}>
              <div className="dados">
                <MapPinLine color="#C47F17" size={22} />

                <div className="dados-entrega">
                  <span>Endereço de entrega</span>
                  <p>Informe o endereço de entrega</p>
                </div>
              </div>
              {/* FAZER A BUSCA PELO CEP */}

              <InputArea>
                <input
                  {...register("cep")}
                  type="text"
                  placeholder="CEP"
                  id="cep"
                />
                <input
                  {...register("rua")}
                  type="text"
                  placeholder="Rua"
                  id="rua"
                />

                <NumeroEComplemento>
                  <input
                    {...register("numero")}
                    type="text"
                    placeholder="Número"
                    id="numero"
                  />
                  <input
                    {...register("complemento")}
                    type="text"
                    placeholder="Complemento"
                    id="complemento"
                  />
                </NumeroEComplemento>

                <BairroCidadeUF>
                  <input
                    {...register("bairro")}
                    type="text"
                    placeholder="Bairro"
                    id="bairro"
                  />
                  <input
                    {...register("cidade")}
                    type="text"
                    placeholder="Cidade"
                    id="cidade"
                  />
                  <input
                    {...register("uf")}
                    type="text"
                    placeholder="UF"
                    id="uf"
                  />
                </BairroCidadeUF>
              </InputArea>
            </Formulario>
          </div>

          <PaymentMethod>
            <div className="dados">
              <CurrencyDollar color="#4B2995" size={22} />

              <div className="dados-ext">
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>

            <PaymantOptions>
              <ButtonGroup />
            </PaymantOptions>
          </PaymentMethod>
        </div>

        <CheckContainer>
          <div className="titleCart">
            <h3>Cafés selecionados</h3>
          </div>

          <CarrinhoDoCheckout>
            <ItemsDoCarrinho>
              <div className="item">
                <div className="item-image">
                  <img src="/xpresso.svg" />
                </div>

                <div className="item-name-and-actions">
                  <p>Expresso Tradicional</p>
                  <div className="conter-and-button">
                    <CounterInput />
                    <RemoveButton>
                      <Trash />
                      REMOVER
                    </RemoveButton>
                  </div>
                </div>

                <div className="price">
                  <p>R$9,90</p>
                </div>
              </div>
              <Separator />

              <div className="item">
                <div className="item-image">
                  <img src="/xpresso.svg" />
                </div>

                <div className="item-name-and-actions">
                  <p>Expresso Tradicional</p>
                  <div className="conter-and-button">
                    <CounterInput />
                    <RemoveButton>
                      <Trash />
                      REMOVER
                    </RemoveButton>
                  </div>
                </div>

                <div className="price">
                  <p>R$9,90</p>
                </div>
              </div>

              <Separator />
            </ItemsDoCarrinho>

            <ConfirmacaoDoPedido>
              <ConfirmarItem>
                <p>Total de items</p>
                <p>R$ 29,70</p>
              </ConfirmarItem>

              <ConfirmarItem>
                <p>Entrega</p>
                <p>R$ 3.50</p>
              </ConfirmarItem>

              <ConfirmarItem>
                <p>Total</p>
                R$ 33,20
              </ConfirmarItem>

              <button type="submit">CONFIRMAR PEDIDO</button>
            </ConfirmacaoDoPedido>
          </CarrinhoDoCheckout>
        </CheckContainer>
      </GeralForm>
    </CheckoutContainer>
  );
}
