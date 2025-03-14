import styled from "styled-components";

export const ConfirmationContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6.375rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h1 {
      color: ${(props) => props.theme["yellow-dark"]};
      font-family: "Baloo 2", sans-serif;
      font-weight: bolder;
      font-size: 2rem;
      line-height: 1.3;
    }

    p {
      color: ${(props) => props.theme["gray-400"]};
      font-size: 1.25rem;
      line-height: 1.3;
      font-weight: 400;
    }
  }
`;

export const DadosEntrega = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2.5rem;
  gap: 2rem;
  width: 32.875rem;
  height: 16.875rem;

  padding: 2.5rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    background: linear-gradient(to left, #dbac2c, #8047f8);
    border-radius: 6px 36px;

    mask: linear-gradient(white 0 0) content-box, linear-gradient(white 0 0);
    mask-composite: exclude;

    -webkit-mask: linear-gradient(white 0 0) content-box,
      linear-gradient(white 0 0);
    -webkit-mask-composite: destination-out;
  }
`;

const baseSuccessBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  gap: 12px;
  width: 22.125rem;
  height: 2.625rem;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;

  p {
    color: ${(props) => props.theme["gray-300"]};
  }
  span {
    font-weight: bold;
    color: ${(props) => props.theme["gray-300"]};
    line-height: 1.3;
  }
`;

export const LocalDeEntrega = styled(baseSuccessBox)`
  > div {
    display: flex;
    padding: 0.5rem;
    color: ${(props) => props.theme["white-100"]};
    border-radius: 1000px;
    background-color: ${(props) => props.theme["purple-dark"]};
  }
  .paragraph {
    font-size: 1rem;
  }
`;

export const PrevisaoDeEntrega = styled(baseSuccessBox)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > div {
    display: flex;
    padding: 0.5rem;
    color: ${(props) => props.theme["white-100"]};
    border-radius: 1000px;
    background-color: ${(props) => props.theme["yellow"]};
  }

  .col {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;

    p {
      font-size: 1rem;
    }
  }
`;

export const FormaDePagamento = styled(baseSuccessBox)`
  display: flex;
  justify-content: flex-start;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    color: ${(props) => props.theme["white-100"]};
    border-radius: 1000px;
    background-color: ${(props) => props.theme["purple-dark"]};
  }

  .col {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    align-items: baseline;

    p {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      font-size: 1rem;
    }
  }
`;
