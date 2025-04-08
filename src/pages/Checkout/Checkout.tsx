import { useForm } from "react-hook-form";
import {
  CurrencyDollar,
  MagnifyingGlass,
  MapPinLine,
  Trash,
} from "phosphor-react";
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
  FindByCepButton,
  CepGroup,
} from "./style";
import { useContext, useEffect, useState } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";

import ButtonGroup from "../../components/Button/ButtonGroup";
import CounterInput from "../../components/CounterInput/CounterInput";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ErrorMessage,
  ErrorMessageWithNoBagItens,
} from "../../components/Button/style";

const sendFormDataSchema = z.object({
  cep: z.string().min(1, "Campo CEP obrigatório").max(8),
  rua: z.string().min(1, "Campo rua obrigatório"),
  numero: z.coerce.number().optional(),
  complemento: z.string().optional(),
  bairro: z.string().min(1, "Campo bairro obrigatório"),
  cidade: z.string().min(1, "Campo cidade obrigatório"),
  uf: z.string().min(1, "UF obrigatório").max(2),
  forma_pagament: z.string().min(1, "Selecione a forma de pagamento"),
});

export interface CheckoutFormData {
  cep: string;
  rua: string;
  numero?: number;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
  forma_pagament: string;
}

export default function Checkout() {
  const [cep, setCep] = useState<string>("");
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(sendFormDataSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: undefined,
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
      forma_pagament: "",
    },
  });

  const navigate = useNavigate();

  const checkoutContext = useContext(CheckoutContext);

  useEffect(() => {
    if (checkoutContext.itemQuantity <= 0) {
      navigate("/");
    }
  }, []);

  if (!checkoutContext) {
    throw new Error("CheckoutContext must be used within a CheckoutProvider");
  }

  async function handleFindCep() {
    const dataForm = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await dataForm.json();
    setValue("rua", data.logradouro);
    setValue("bairro", data.bairro);
    setValue("cidade", data.localidade);
    setValue("uf", data.uf);
    setValue("complemento", data.complemento);
  }

  const { cart, removeFromCart } = checkoutContext;

  const onSubmitForm = (data: CheckoutFormData) => {
    if (checkoutContext.itemQuantity <= 0) {
      setFormError(
        "Carrinho vazio! Adicione itens antes de finalizar o pedido."
      );
      return;
    }

    setFormError(null);

    checkoutContext.setFormData(data);
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
                <div>
                  <CepGroup>
                    <input
                      {...register("cep")}
                      type="text"
                      placeholder="CEP"
                      id="cep"
                      maxLength={8}
                      onChange={(e) => setCep(e.target.value)}
                    />
                    <FindByCepButton type="button" onClick={handleFindCep}>
                      <MagnifyingGlass size={22} weight="bold" />
                    </FindByCepButton>
                  </CepGroup>
                  {errors.cep && (
                    <ErrorMessage>{errors.cep.message}</ErrorMessage>
                  )}
                </div>

                <div
                  style={{ display: "flex", flexDirection: "column", flex: 1 }}
                >
                  <input
                    {...register("rua")}
                    type="text"
                    placeholder="Rua"
                    id="rua"
                  />
                  {errors.rua && (
                    <ErrorMessage>{errors.rua.message}</ErrorMessage>
                  )}
                </div>

                <NumeroEComplemento>
                  <div>
                    <input
                      {...register("numero")}
                      type="text"
                      placeholder="Número. Vazio para S/N"
                      id="numero"
                    />
                    {errors.numero && (
                      <ErrorMessage>{errors.numero.message}</ErrorMessage>
                    )}
                  </div>

                  <input
                    {...register("complemento")}
                    type="text"
                    placeholder="Complemento"
                    id="complemento"
                  />
                </NumeroEComplemento>

                <BairroCidadeUF>
                  <div>
                    <input
                      {...register("bairro")}
                      type="text"
                      placeholder="Bairro"
                      id="bairro"
                    />

                    {errors.bairro && (
                      <ErrorMessage>{errors.bairro.message}</ErrorMessage>
                    )}
                  </div>

                  <div>
                    <input
                      {...register("cidade")}
                      type="text"
                      placeholder="Cidade"
                      id="cidade"
                    />
                    {errors.cidade && (
                      <ErrorMessage>{errors.cidade.message}</ErrorMessage>
                    )}
                  </div>

                  <div>
                    <input
                      {...register("uf")}
                      type="text"
                      placeholder="UF"
                      id="uf"
                    />
                    {errors.uf && (
                      <ErrorMessage>{errors.uf.message}</ErrorMessage>
                    )}
                  </div>
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
              <ButtonGroup
                error={
                  errors.forma_pagament?.message
                    ? "Selecione uma forma de pagamento"
                    : null
                }
                setValue={setValue}
              />
            </PaymantOptions>
          </PaymentMethod>
        </div>

        <CheckContainer>
          <div className="titleCart">
            <h3>Cafés selecionados</h3>
          </div>

          <CarrinhoDoCheckout>
            <ItemsDoCarrinho>
              {cart.map((coffee) => (
                <div className="item" key={coffee.id}>
                  <div className="item-image">
                    <img src={coffee.img} />
                  </div>

                  <div className="item-name-and-actions">
                    <p>{coffee.name}</p>
                    <div className="conter-and-button">
                      <CounterInput coffeeId={coffee.id} />
                      <RemoveButton onClick={() => removeFromCart(coffee.id)}>
                        <Trash />
                        REMOVER
                      </RemoveButton>
                    </div>
                  </div>

                  <div className="price">
                    <p>R${coffee.value.toFixed(2)}</p>
                  </div>
                </div>
              ))}

              <Separator />
            </ItemsDoCarrinho>

            <ConfirmacaoDoPedido>
              <ConfirmarItem>
                <p>Total de items</p>
                <p>{checkoutContext.itemQuantity}</p>
              </ConfirmarItem>

              <ConfirmarItem>
                <p>Entrega</p>
                {checkoutContext.itemQuantity <= 0 ? (
                  <p>R$0,00</p>
                ) : (
                  <p>R$ 3.50</p>
                )}
              </ConfirmarItem>

              <ConfirmarItem>
                <p>Total</p>
                R${checkoutContext.totalValue.toFixed(2)}
              </ConfirmarItem>

              <button type="submit">CONFIRMAR PEDIDO</button>
              {formError && (
                <ErrorMessageWithNoBagItens>
                  {formError}
                </ErrorMessageWithNoBagItens>
              )}
            </ConfirmacaoDoPedido>
          </CarrinhoDoCheckout>
        </CheckContainer>
      </GeralForm>
    </CheckoutContainer>
  );
}
