import { createContext, ReactNode, useState } from "react";

interface CarrtContextProviderProps {
  children: ReactNode
}

interface ProductCartProps {
  id: string
  name: string
  imageUrl: string
  price: number
  description?: string
}

interface CartContextProps {
  cartItems: ProductCartProps[]
  addItemsToCart: (shirt: ProductCartProps) => void
  removeItemsFromCart: (id: string) => void
  orderAlreadyExist: (id: string) => boolean
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({children}: CarrtContextProviderProps) {
  const [cartItems, setCartItems] = useState<ProductCartProps[]>([])

  function addItemsToCart(shirt: ProductCartProps) {
    setCartItems(state => [...state, shirt])
  }

  function removeItemsFromCart(id: string) {
    const withoutDeletedOne = cartItems.filter(cartItem => {
      return cartItem.id !== id
    })

    setCartItems(withoutDeletedOne)
  }

  function orderAlreadyExist(id: string) {
    const orderAlreadyExist = cartItems.some(cartItem => cartItem.id === id)
    
    return orderAlreadyExist
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      addItemsToCart,
      removeItemsFromCart,
      orderAlreadyExist,
    }}>
      {children}
    </CartContext.Provider>
  )
}