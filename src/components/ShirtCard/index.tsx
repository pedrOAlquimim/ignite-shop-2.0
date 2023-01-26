import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { priceFormatter } from '../../utils/formatter'
import { ProductContainer } from './styles'

export interface ShirtCardProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    defaultPriceId: string
  }
}

export function ShirtCard({ product }: ShirtCardProps) {
  const { addItemsToCart, orderAlreadyExist } = useContext(CartContext)

  function handleAddItemsToCart() {
    const addNewItemToCart = { ...product }
    addItemsToCart(addNewItemToCart)
  }

  const ifOrderAlreadyExists = orderAlreadyExist(product.id)

  return (
    <ProductContainer key={product.id} className="keen-slider__slide">
      <Link href={`/product/${product.id}`}>
        <Image src={product.imageUrl} alt="" width={520} height={480} />
      </Link>
      <footer>
        <div>
          <strong>{product.name}</strong>
          <p>{priceFormatter.format(product.price)}</p>
        </div>

        <button onClick={handleAddItemsToCart} disabled={ifOrderAlreadyExists}>
          <Handbag size={32} weight="bold" />
        </button>
      </footer>
    </ProductContainer>
  )
}
