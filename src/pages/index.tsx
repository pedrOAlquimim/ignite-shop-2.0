import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { HomeContainer, ProductContainer } from '../styles/pages/home'
import { GetStaticProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Link from 'next/link'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      {products.map(product => {
        return (
          <Link href={`/product/${product.id}`} key={product.id}>
            <ProductContainer className='keen-slider__slide'>
              <Image src={product.imageUrl} alt='' width={520} height={480} />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <p>{product.price}</p>
                </div>

                <button>
                  <Handbag size={32} weight='bold' />
                </button>
              </footer>
            </ProductContainer>
          </Link>
        )
      })}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(item => {
    const price = item.default_price as Stripe.Price

    return {
      id: item.id,
      name: item.name,
      imageUrl: item.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100)
    }
  })
  
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2 // 2 hour
  }
}
