import styled from "styled-components";

export const Coffee = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 16rem;
  height: 19.575rem;
  background-color: ${(props) => props.theme["white-300"]};

  border-radius: 6px 36px;

  > div > img {
    margin-top: -20px;
    width: 120px;
  }

  img {
    display: flex;
    justify-self: center;
  }

  font-family: "Baloo 2", sans-serif;
`;

export const CoffeeTags = styled.div`
  display: flex;
  justify-content: center;

  span {
    color: ${(props) => props.theme["yellow-dark"]};
    background-color: ${(props) => props.theme["yellow-light"]};
    padding: 4px 8px;
    font-size: 0.8rem;
    line-height: 1.3;
    font-weight: bold;
    border-radius: 999px;
  }
  font-family: "Baloo 2", sans-serif;
`;

export const CoffeeName = styled.div`
  display: flex;
  align-self: center;
  font-family: "Baloo 2", sans-serif;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.3;

  color: ${(props) => props.theme["gray-400"]};
`;

export const CoffeeDescription = styled.span`
  text-align: center;
  font-family: "Baloo 2", sans-serif;
`;

export const BuyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.3;
    font-family: "Roboto", sans-serif;
  }

  span {
    font-weight: bolder;
    line-height: 1.3;
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-300"]};
  }

  .group {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .shopping-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    cursor: pointer;

    color: ${(props) => props.theme["white-100"]};
    background-color: ${(props) => props.theme["purple-dark"]};
  }

  font-family: "Baloo 2", sans-serif;
`;
