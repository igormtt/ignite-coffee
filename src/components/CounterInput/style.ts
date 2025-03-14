import styled from "styled-components";

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme["white-500"]};
  border-radius: 6px;
  padding: 4px;
`;

export const QuantityButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme["purple-dark"]};
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QuantityInput = styled.span`
  padding: 0 8px;
  font-weight: bold;
  font-size: 1rem;
  color: ${(props) => props.theme["gray-500"]};
`;
