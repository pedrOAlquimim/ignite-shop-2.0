import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export function usePrice() {
  const { cartItems } = useContext(CartContext)

  const price = cartItems.reduce(
    (acc, cartItem) => {
      acc.total += cartItem.price

      return acc
    },
    { total: 0 },
  )

  return price
}
