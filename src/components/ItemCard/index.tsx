import Image from 'next/image'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { priceFormatter } from '../../utils/formatter'
import { ImageContainer, ItemCardContainer, ItemDetails } from './styles'

interface ItemCardProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    defaultPriceId: string
  }
}

export function ItemCard({ product }: ItemCardProps) {
  const { removeItemsFromCart } = useContext(CartContext)

  function handleRemoveItemsFromCart() {
    const itemToRemove = product.id
    removeItemsFromCart(itemToRemove)
  }

  return (
    <ItemCardContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt="" width={100} height={100} />
      </ImageContainer>

      <ItemDetails>
        <div>
          <h2>{product.name}</h2>
          <strong>{priceFormatter.format(product.price)}</strong>
        </div>

        <button onClick={handleRemoveItemsFromCart}>Remover</button>
      </ItemDetails>
    </ItemCardContainer>
  )
}
