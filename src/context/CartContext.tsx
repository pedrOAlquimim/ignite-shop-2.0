import { createContext, ReactNode, useState } from "react";

interface CartContextProps {
  addItemsToCart: (shirt: ProductCartProps) => void
  removeItemsFromCart: (id: string) => void
  orderAlreadyExist: (id: string) => void
}

interface CarrtContextProviderProps {
  children: ReactNode
}

interface ProductCartProps {
  id: string
  price: number
  imageUrl: string
  name: string
}

export const CartContext = createContext({} as CartContextProps)

export function CarrtContextProvider({children}: CarrtContextProviderProps) {
  const [cartItems, setCartItems] = useState<ProductCartProps[]>([])

  function addItemsToCart(shirt: ProductCartProps) {
    setCartItems(state => [...state, shirt])
  }

  function removeItemsFromCart(id: string) {
    const withoutDeletedOne = cartItems.filter(cartItem => {
      return cartItem.id !== id
    })
  }

  function orderAlreadyExist(id: string) {
    const orderAlreadyExist = cartItems.find(cartItem => {
      return cartItem.id === id
    })

    return orderAlreadyExist
  }


  return (
    <CartContext.Provider value={{
      addItemsToCart,
      removeItemsFromCart,
      orderAlreadyExist,
    }}>
      {children}
    </CartContext.Provider>
  )
}