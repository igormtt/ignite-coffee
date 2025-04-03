import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;

  flex-direction: row;

  .title h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    margin-bottom: 0.9375rem;
    color: ${(props) => props.theme["gray-400"]};
  }
`;

export const GeralForm = styled.form`
  display: flex;
  gap: 2rem;
  flex: 1;
  justify-content: center;

  margin-top: 2.2rem;

  @media (max-width: 1030px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Formulario = styled.div`
  display: flex;
  padding: 2.5rem;
  width: 40rem;
  height: auto;
  flex-direction: column;

  border-radius: 6px;

  background-color: ${(props) => props.theme["white-300"]};

  .dados {
    display: flex;
    gap: 8px;
  }

  .dados-ext span {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.3;

    color: ${(props) => props.theme["gray-400"]};
  }

  .dados-ext p {
    line-height: 1.3;
    font-weight: 400;
    font-size: 0.875rem;
  }

  @media (max-width: 1260px) {
    width: 35rem;
    padding: 1.5rem;
  }

  @media (max-width: 630px) {
    width: 30rem;
  }

  @media (max-width: 520px) {
    width: 26rem;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;

  input[type="text"] {
    background-color: ${(props) => props.theme["white-400"]};
    border-radius: 4px;
    height: 2.625rem;
    outline: none;
    padding: 11px;
    color: ${(props) => props.theme["gray-400"]};
    line-height: 1.3;
    font-size: 0.875rem;
    font-weight: 400;

    border: 1px solid ${(props) => props.theme["white-500"]};
    &::placeholder {
      @media (max-width: 1030px) {
        font-size: 0.75rem;
      }
      color: ${(props) => props.theme["gray-200"]};
    }

    @media (max-width: 1260px) {
      width: 100%;
      padding: 0.5rem;
    }
  }

  #cep {
    width: 12.5rem;
  }
`;

export const NumeroEComplemento = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 1260px) {
    width: 100%;
  }

  #numero {
    width: 12.5rem;
  }

  #complemento {
    flex: 1;
  }
`;

export const BairroCidadeUF = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 1260px) {
    justify-content: center;
  }

  #bairro {
    width: 12.5rem;

    @media (max-width: 620px) {
      width: 11rem;
    }

    @media (max-width: 520px) {
      width: 9rem;
    }
  }

  #cidade {
    width: 17rem;

    @media (max-width: 1260px) {
      width: 15rem;
    }

    @media (max-width: 620px) {
      width: 11rem;
    }
    @media (max-width: 520px) {
      width: 9rem;
    }
  }

  #uf {
    width: 3.75rem;

    @media (max-width: 1260px) {
      width: 3rem;
    }

    @media (max-width: 620px) {
      width: 3.5rem;
    }
  }
`;

export const PaymentMethod = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  width: 40rem;
  height: 12.9375rem;
  background-color: ${(props) => props.theme["white-300"]};
  border-radius: 6px;

  margin-top: 12px;

  .dados {
    display: flex;
    gap: 8px;

    @media (max-width: 1260px) {
      gap: 1rem;
    }
  }

  .dados-ext span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme["gray-400"]};
  }

  .dados-ext p {
    line-height: 1.3;
    font-weight: 400;
    font-size: 0.875rem;
  }

  @media (max-width: 1260px) {
    width: 35rem;
    align-items: center;
    padding: 1.5rem;
  }

  @media (max-width: 620px) {
    width: 30rem;
  }

  @media (max-width: 520px) {
    width: 26rem;
  }
`;

export const PaymantOptions = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: row;
  gap: 12px;
`;

export const CheckContainer = styled.div`
  .titleCart h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    color: ${(props) => props.theme["gray-400"]};
  }

  @media (max-width: 1030px) {
    width: 35rem;
    height: 30rem;
  }

  @media (max-width: 620px) {
    width: 30rem;
  }

  @media (max-width: 520px) {
    width: 26rem;
  }
`;

export const CarrinhoDoCheckout = styled.div`
  display: flex;
  width: 28rem;
  height: 31.125rem;
  flex-direction: column;
  margin-top: 0.9375rem;
  padding: 2.5rem;

  border-radius: 6px 44px 44px 6px;
  background-color: ${(props) => props.theme["white-300"]};

  @media (max-width: 1260px) {
    width: 25rem;
    height: 21rem;
    padding: 1.5rem;
  }

  @media (max-width: 1030px) {
    width: 35rem;
    height: 25rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 620px) {
    width: 30rem;
  }

  @media (max-width: 520px) {
    width: 26rem;
  }
`;

export const ItemsDoCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 18rem;
  overflow-y: scroll;
  scrollbar-width: none;

  @media (max-width: 1260px) {
    height: 7rem;
    width: 100%;
  }

  @media (max-width: 1030px) {
    height: 11rem;
  }

  .item {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    width: 23rem;
    height: 5rem;

    @media (max-width: 1260px) {
      width: 21rem;
    }

    @media (max-width: 1030px) {
      width: 100%;
    }

    .price {
      display: flex;
      flex: 1;
      justify-content: flex-end;

      p {
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.3;
      }
    }

    .item-image img {
      width: 4rem;
    }

    .item-name-and-actions {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .conter-and-button {
        display: flex;
        gap: 0.5rem;
      }
    }
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3125rem;
  border-radius: 6px;
  border: none;
  outline: none;
  padding: 4px;
  cursor: pointer;

  background-color: ${(props) => props.theme["white-500"]};
  color: ${(props) => props.theme["gray-300"]};

  svg {
    color: ${(props) => props.theme["purple-dark"]};
  }

  width: 5.6875rem;
  height: 2rem;

  &:hover {
    background-color: ${(props) => props.theme["gray-100"]};
  }
`;

export const Separator = styled.div`
  width: 23rem;
  height: 2px;

  background-color: ${(props) => props.theme["white-400"]};
`;

export const ConfirmacaoDoPedido = styled.div`
  display: flex;
  flex-direction: column;
  width: 23rem;
  height: 5.75rem;
  margin-top: 24px;

  button {
    width: 23rem;
    height: 2.875rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    outline: 0;
    border-radius: 6px;

    padding: 14px 8px;

    font-weight: 1.6;
    font-size: 0.875rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 1.5rem;

    background-color: ${(props) => props.theme["yellow"]};
    color: ${(props) => props.theme["white-100"]};

    &:hover {
      background-color: ${(props) => props.theme["yellow-dark"]};
    }
  }

  @media (max-width: 1260px) {
    width: 100%;
    gap: 10px;

    button {
      align-self: center;
      width: 20rem;
    }
  }
`;

export const ConfirmarItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FindByCepButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => props.theme["yellow"]};
  width: 3.125rem;
  height: 2.625rem;
  margin-left: -4px;
  svg {
    color: ${(props) => props.theme["white-100"]};
  }
  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const CepGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
