import Stripe from 'stripe'
import { stripe } from '@/src/lib/stripe'
import { HomePage } from './home-page'

export const revalidate = 60

export default async function App() {
	const response = await stripe.products.list({
		expand: ['data.default_price'],
		active: true,
	})

	const products = response.data.map((product) => {
		const price = product.default_price as Stripe.Price

		return {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],
			price: price.unit_amount,
		}
	})

	return <HomePage products={products} />
}
