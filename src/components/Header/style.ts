import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
`;

export const Location = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-weight: 500;
  font-size: 14px;
  gap: 4px;
  flex: 1;
  background-color: ${(props) => props.theme["purple-ligt"]};
  color: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;
  width: 153px;
  height: 38px;
  padding: 8px;
`;

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;

  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};

  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
`;

export const QuantidadeNoCarrinho = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;

  display: flex;
  align-items: center;

  justify-content: center;

  background-color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 1000px;

  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1.3;
  color: ${(props) => props.theme["white-100"]};

  width: 20px;
  height: 20px;
`;

export const Inform = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
