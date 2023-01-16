import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'
import Stripe from 'stripe'
import { Handbag } from 'phosphor-react'
import { GetStaticProps } from 'next'
import { stripe } from '../lib/stripe'
import { useKeenSlider } from 'keen-slider/react'
import { ShirtCard } from '../components/ShirtCard'
import { HomeContainer} from '../styles/pages/home'

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
         <ShirtCard key={product.id} product={product} />
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
