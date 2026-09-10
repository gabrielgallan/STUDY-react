'use client'

import { ImageContainer, ProductContainer, ProductDetails } from './styles'

interface ProductPageComponentProps {
	productId: string
}

export const ProductPageComponent = ({ productId }: ProductPageComponentProps) => {
	return (
		<ProductContainer>
			<ImageContainer></ImageContainer>

			<ProductDetails>
				<h1>Camiseta 1</h1>

				<span>R$ 79,00</span>

				<p>alsjhds</p>

				<button>Compre agora</button>
			</ProductDetails>
		</ProductContainer>
	)
}
