import { stripe } from "@/src/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/products";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Stripe from "stripe";

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function ProductPage({ product }: ProductProps) {
    return <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: { id: 'prod_VEPwd79gDbWqIB' }
            }
        ],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params ? params.id : ''

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount ? (price.unit_amount / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }) : null,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1 hours
  }
}