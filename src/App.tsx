import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { GlobalStyle } from "./themes/global-style";
import { Router } from "./Router";
import { CheckoutProvider } from "./contexts/CheckoutContext";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CheckoutProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CheckoutProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
