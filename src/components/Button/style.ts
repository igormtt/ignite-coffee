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

  @media (max-width: 1260px) {
    width: 9rem;
    font-size: 0.7rem;
    font-weight: bold;
  }

  @media (max-width: 620px) {
    font-size: 0.5rem;
    width: 8rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex: 1;
  gap: 16px;
  flex-direction: row;

  @media (max-width: 1260px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme["error"]};
  font-size: 0.632rem;
  font-weight: 400;
  margin-top: 0.5rem;
`;

export const ErrorMessageWithNoBagItens = styled.p`
  color: ${(props) => props.theme["error"]};
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: 1.5rem;
`;
