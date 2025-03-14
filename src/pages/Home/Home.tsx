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
            img="/xpresso.svg"
            name="Expresso Tradicional"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={(9.9).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          />

          <Coffee
            img="/Americano.svg"
            name="Expresso Tradicional"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={(9.9).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          />

          <Coffee
            img="/Expresso Cremoso.svg"
            name="Expresso Tradicional"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={(9.9).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          />

          <Coffee
            img="/Café Gelado.svg"
            name="Expresso Tradicional"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={(9.9).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          />

          <Coffee
            img="/Café com Leite.svg"
            name="Expresso Tradicional"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={(9.9).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          />

          <Coffee
            img="/Latte.svg"
            name="Expresso Tradicional"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={(9.9).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          />

          <Coffee
            img="/Capuccino.svg"
            name="Expresso Tradicional"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={(9.9).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          />

          <Coffee
            img="/Macchiato.svg"
            name="Expresso Tradicional"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={(9.9).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          />

          <Coffee
            img="/Mochaccino.svg"
            name="Expresso Tradicional"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={(9.9).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          />

          <Coffee
            img="/Chocolate quente.svg"
            name="Expresso Tradicional"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={(9.9).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          />

          <Coffee
            img="/Cubano.svg"
            name="Expresso Tradicional"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={(9.9).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          />

          <Coffee
            img="/Havaiano.svg"
            name="Expresso Tradicional"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={(9.9).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          />

          <Coffee
            img="/Árabe.svg"
            name="Expresso Tradicional"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={(9.9).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          />

          <Coffee
            img="/Irlandês.svg"
            name="Expresso Tradicional"
            tag="Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            value={(9.9).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          />
        </CoffeList>
      </OurCoffees>
    </HomeContainer>
  );
}
