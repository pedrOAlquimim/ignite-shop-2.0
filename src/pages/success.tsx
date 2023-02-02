import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { GetServerSideProps } from 'next'
import { stripe } from '../lib/stripe'
import {
  Details,
  RoundedCardsContainer,
  SuccessContainer,
} from '../styles/pages/success'
import Head from 'next/head'

interface SuccessProps {
  customerName: string
  orderQuantity: number
  productImages: string[]
}

export default function Success({
  customerName,
  orderQuantity,
  productImages,
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra | Ignite Shop 2.0</title>
      </Head>

      <SuccessContainer>
        <RoundedCardsContainer>
          {productImages.map((image, i) => {
            return (
              <div key={i}>
                <Image src={image} width={130} height={132} alt="" />
              </div>
            )
          })}
        </RoundedCardsContainer>

        <Details>
          <h2>Compra efetuada!</h2>
          <p>
            Uhuul <strong>{customerName}</strong>, sua compra de {orderQuantity}{' '}
            camiseta(s) já está a caminho da sua casa.
          </p>
        </Details>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items.data', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name
  const orderQuantity = session.line_items.data.length
  const productImages = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product
    return product.images[0]
  })

  return {
    props: {
      customerName,
      orderQuantity,
      productImages,
    },
  }
}
