import {
  Coffee as CoffeeIcon,
  Package,
  ShoppingCart,
  Timer,
} from "phosphor-react";
import Coffee from "../../components/Coffee/Coffee";
import {
  TopContent,
  HomeContainer,
  FirstSectionTitle,
  Items,
  Item,
  OurCoffees,
  CoffeList,
} from "./style";

import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <HomeContainer>
      <ToastContainer />

      <TopContent>
        <FirstSectionTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <Items>
            <Item bgcolor="yellow_dark">
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              Compra simples e segura
            </Item>

            <Item bgcolor="yellow">
              <div>
                <Package size={16} weight="fill" />
              </div>
              Embalagem mantém o café intacto
            </Item>

            <Item bgcolor="gray">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              Entrega rápida e ratreada
            </Item>

            <Item bgcolor="purple">
              <div>
                <CoffeeIcon size={16} weight="fill" />
              </div>
              O Café chega fresquinho até você
            </Item>
          </Items>
        </FirstSectionTitle>

        <div className="img-coffee">
          <img src="/Coffee.svg" />
        </div>
      </TopContent>

      <OurCoffees>
        <h1>Nossos cafés</h1>

        <CoffeList>
          <Coffee
            id="1"
            img="/xpresso.svg"
            name="Expresso Tradicional"
            tag="TRADICIONAL"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="2"
            img="/Americano.svg"
            name="Expresso Americano"
            tag="TRADICIONAL"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="3"
            img="/Expresso Cremoso.svg"
            name="Expresso Cremoso"
            tag="TRADICIONAL"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="4"
            img="/Café Gelado.svg"
            name="Expresso Gelado"
            tag="TRADICIONAL"
            tag2="GELADO"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="5"
            img="/Café com Leite.svg"
            name="Expresso Caé com leite"
            tag="TRADICIONAL"
            tag2="COM LEITE"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="6"
            img="/Latte.svg"
            name="Expresso Latte"
            tag="TRADICIONAL"
            tag2="COM LEITE"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="7"
            img="/Capuccino.svg"
            name="Café Capuccino"
            tag="TRADICIONAL"
            tag2="COM LEITE"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="8"
            img="/Macchiato.svg"
            name="Expresso Macchiato"
            tag="TRADICIONAL"
            tag2="COM LEITE"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="9"
            img="/Mochaccino.svg"
            name="Expresso Mochaccino"
            tag="TRADICIONAL"
            tag2="COM LEITE"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="10"
            img="/Chocolate Quente.svg"
            name="Chocolate quente"
            tag="TRADICIONAL"
            tag2="COM LEITE"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="11"
            img="/Cubano.svg"
            name="Expresso Cubano"
            tag="ESPECIAL"
            tag2="ALCOÓLICO"
            tag3="GELADO"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="12"
            img="/Havaiano.svg"
            name="Expresso Havaiono"
            tag="ESPECIAL"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="13"
            img="/Árabe.svg"
            name="Expresso Árabe"
            tag="ESPECIAL"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="14"
            img="/Irlandês.svg"
            name="Expresso Irlandês"
            tag="ESPECIAL"
            tag2="ALCOÓLICO"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />
        </CoffeList>
      </OurCoffees>
    </HomeContainer>
  );
}
