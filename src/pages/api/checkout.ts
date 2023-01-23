import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const priceId = [
    {
      price: 'price_1MKhSUApFQ7eg8XXLcaLGJ5j',
      quantity: 1,
    },
    {
      price: 'price_1MKhR7ApFQ7eg8XXly87XWlV',
      quantity: 1,
    },
  ]

  const successUrl = `${process.env.NEXT_URL}/success`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: priceId,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}