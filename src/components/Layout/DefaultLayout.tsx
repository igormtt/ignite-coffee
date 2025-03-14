import { GlobalStyle } from "../../themes/global-style";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styled";

export default function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <GlobalStyle />

      <Outlet />
    </LayoutContainer>
  );
}
