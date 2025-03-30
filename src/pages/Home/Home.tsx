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

export default function Home() {
  return (
    <HomeContainer>
      <TopContent>
        <FirstSectionTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <Items>
            <Item bgColor="yellow_dark">
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              Compra simples e segura
            </Item>

            <Item bgColor="yellow">
              <div>
                <Package size={16} weight="fill" />
              </div>
              Embalagem mantém o café intacto
            </Item>

            <Item bgColor="gray">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              Entrega rápida e ratreada
            </Item>

            <Item bgColor="purple">
              <div>
                <CoffeeIcon size={16} weight="fill" />
              </div>
              O Café chega fresquinho até você
            </Item>
          </Items>
        </FirstSectionTitle>

        <div>
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
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="2"
            img="/Americano.svg"
            name="Expresso Americano"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="3"
            img="/Expresso Cremoso.svg"
            name="Expresso Cremoso"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="4"
            img="/Café Gelado.svg"
            name="Expresso Gelado"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="5"
            img="/Café com Leite.svg"
            name="Expresso Caé com leite"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="6"
            img="/Latte.svg"
            name="Expresso Latte"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="7"
            img="/Capuccino.svg"
            name="Café Capuccino"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="8"
            img="/Macchiato.svg"
            name="Expresso Macchiato"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="9"
            img="/Mochaccino.svg"
            name="Expresso Mochaccino"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="10"
            img="/Chocolate Quente.svg"
            name="Chocolate quente"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="11"
            img="/Cubano.svg"
            name="Expresso Cubano"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="12"
            img="/Havaiano.svg"
            name="Expresso Havaiono"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="13"
            img="/Árabe.svg"
            name="Expresso Árabe"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />

          <Coffee
            id="14"
            img="/Irlandês.svg"
            name="Expresso Irlandês"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={9.9}
          />
        </CoffeList>
      </OurCoffees>
    </HomeContainer>
  );
}
