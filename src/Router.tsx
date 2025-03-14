import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import DefaultLayout from "./components/Layout/DefaultLayout.tsx";
import Checkout from "./pages/Checkout/Checkout.tsx";
import Confirmation from "./pages/Confirmation/Confirmation.tsx";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Confirmation />} />
      </Route>
    </Routes>
  );
}
