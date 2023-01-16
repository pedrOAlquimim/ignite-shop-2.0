import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ItemCard } from "../ItemCard";
import { Content, Title, Close, CartModalContainer, Products, CartDetails, Quantity, Total } from "./styles";

export function CartModal() {
  const {cartItems} = useContext(CartContext)

  return (
    <Dialog.Portal>
      <Content>
        <Title>Sacola de compras</Title>

        <Close>
          <X size={24} weight='bold' />
        </Close>

        <CartModalContainer>
          <Products>
            {cartItems?.map(cartItem => {
              return (
                <ItemCard key={cartItem.id} product={cartItem} />
              )
            })}
          </Products>

          <CartDetails>
            <div>
              <Quantity>
                <p>Quantidade</p>
                <span>3 itens</span>
              </Quantity>
              <Total>
                <p>Valor total</p>
                <span>R$ 270,00</span>
              </Total>
            </div>

            <button>
              Finalizar compra
            </button>
          </CartDetails>
        </CartModalContainer>

      </Content>
    </Dialog.Portal>
  )
}
