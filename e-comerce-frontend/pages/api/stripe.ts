const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
import type { NextApiRequest, NextApiResponse } from "next";

type cartproduct = {
  id: string;
  name: string;
  quantity: number;
  imageURL: string;
  price: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const params = {
        submit_type: "pay",
        payment_method_types: ["card"],
        billing_address_collection: "required",
        shipping_options: [
          { shipping_rate: "shr_1MVEcHIbiBr2aIewpTSA63ey" },
          { shipping_rate: "shr_1MVEbjIbiBr2aIewGM35q7WG" },
        ],
        line_items: req.body.map((product: cartproduct) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: product.name,
              },
              unit_amount: product.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: product.quantity,
          };
        }),
        mode: "payment",
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      };
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
