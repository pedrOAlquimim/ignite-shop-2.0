import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'
import { GetStaticProps } from 'next'
import { stripe } from '../lib/stripe'
import { useKeenSlider } from 'keen-slider/react'
import { ShirtCard } from '../components/ShirtCard'
import { HomeContainer } from '../styles/pages/home'
import Head from 'next/head'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
    defaultPriceId: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.8,
      spacing: 48,
    },
    breakpoints: {
      '(max-width: 950px)': {
        slides: {
          perView: 1.5,
          spacing: 48,
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: 1.3,
          spacing: 24,
        },
      },
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop 2.0</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return <ShirtCard key={product.id} product={product} />
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((item) => {
    const price = item.default_price as Stripe.Price

    return {
      id: item.id,
      name: item.name,
      imageUrl: item.images[0],
      price: price.unit_amount / 100,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hour
  }
}
