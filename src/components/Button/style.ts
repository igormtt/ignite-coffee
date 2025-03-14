import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11.166875rem;
  height: 3.1875rem;
  gap: 11px;

  line-height: 1.6;
  font-size: 0.75rem;
  font-weight: 400;

  border: none;
  cursor: pointer;
  border-radius: 6px;
  outline: none;

  color: ${(props) => props.theme["gray-300"]};
  background-color: ${(props) => props.theme["white-500"]};

  svg {
    color: ${(props) => props.theme["purple-dark"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["gray-100"]};
  }

  &.active {
    background-color: #ebe5f9;
    border: 1px solid ${(props) => props.theme["purple-dark"]};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex: 1;
  gap: 16px;
  flex-direction: row;
`;
