import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useContext } from "react";
import Stripe from "stripe";
import { CartContext } from "../../context/CartContext";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";
import { priceFormatter } from "../../utils/formatter";

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addItemsToCart, orderAlreadyExist } = useContext(CartContext)

  function handleAddItemToCart() {
    const addNewItemToCart = {...product}
    addItemsToCart(addNewItemToCart)
  }

  const ifOrderAlreadyExists = orderAlreadyExist(product.id)

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt='' width={520} height={480} />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{priceFormatter.format(product.price)}</span>

        <p>{product.description}</p>

        <button onClick={handleAddItemToCart} disabled={ifOrderAlreadyExists}>
          {ifOrderAlreadyExists ?
            "Produto já está no carrinho"
            :
            "Colocar na sacola"
          }
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_N4rAlJeYjenkC5'} },
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const productId = String(params.id)

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        imageUrl: product.images[0],
        name: product.name,
        description: product.description,
        price: price.unit_amount / 100,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}
