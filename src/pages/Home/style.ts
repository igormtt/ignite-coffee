import { styled } from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding-inline: 10rem;
`;

export const TopContent = styled.div`
  display: flex;
  height: 34rem;
  align-items: center;
  justify-content: space-between;
  gap: 26px;
`;

export const FirstSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  gap: 16px;

  max-width: 36rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: bolder;
    line-height: 1.3;
    color: ${(props) => props.theme["gray-500"]};
  }

  p {
    color: ${(props) => props.theme["gray-400"]};
    font-size: 1.25rem;
    font-weight: 400;
  }
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 283.5px 283.5px;
  margin-top: 3.75rem;
  grid-template-rows: 1fr 1fr;
  gap: 20px;

  max-width: 567px;
`;

const Colors = {
  yellow_dark: "#C47F17",
  yellow: "#DBAC2C",
  gray: "#574F4D",
  purple: "#8047F8",
};

export const Item = styled.div<{ bgColor: keyof typeof Colors }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 12px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background-color: ${(props) => Colors[props.bgColor]};
    border-radius: 999px;
    color: ${(props) => props.theme["white-100"]};
  }
`;

export const Title = styled.h1``;

export const OurCoffees = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme["gray-400"]};
    font-weight: bolder;
    line-height: 1.3;

    margin-bottom: 3.375rem;
  }
`;

export const CoffeList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem 2rem;
  margin-bottom: 10rem;
  flex-wrap: wrap;
`;
