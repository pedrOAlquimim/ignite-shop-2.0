import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ProductContainer } from "./styles";

interface ShirtCardProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
  }
}

export function ShirtCard({product}: ShirtCardProps) {
  const {addItemsToCart} = useContext(CartContext)

  function handleAddItemsToCart() {
    const addNewItemToCart = {...product}

    addItemsToCart(addNewItemToCart)
  }

  return (
    <ProductContainer key={product.id} className='keen-slider__slide'>
      <Link href={`/product/${product.id}`} >
        <Image src={product.imageUrl} alt='' width={520} height={480} />
      </Link>
      <footer>
        <div>
          <strong>{product.name}</strong>
          <p>{product.price}</p>
        </div>

        <button onClick={handleAddItemsToCart}>
          <Handbag size={32} weight='bold' />
        </button>
      </footer>
    </ProductContainer>
  )
}