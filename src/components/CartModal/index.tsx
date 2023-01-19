import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { usePrice } from "../../hooks/usePrice";
import { priceFormatter } from "../../utils/formatter";
import { ItemCard } from "../ItemCard";
import { Content, Title, Close, CartModalContainer, Products, CartDetails, Quantity, Total } from "./styles";

export function CartModal() {
  const { cartItems, quantity } = useContext(CartContext)
  const price = usePrice()

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
                <span>{quantity} itens</span>
              </Quantity>
              <Total>
                <p>Valor total</p>
                <span>{priceFormatter.format(price.total)}</span>
              </Total>
            </div>

            <button disabled={quantity == 0}>
              Finalizar compra
            </button>
          </CartDetails>
        </CartModalContainer>

      </Content>
    </Dialog.Portal>
  )
}
