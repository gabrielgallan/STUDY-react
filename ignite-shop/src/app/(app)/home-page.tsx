'use client'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { HomeContainer, Product } from './styles'

import 'keen-slider/keen-slider.min.css'
import Link from 'next/link'

interface ProductProps {
	id: string
	name: string
	imageUrl: string
	price: number | null
}

interface HomePageProps {
	products: ProductProps[]
}

export const HomePage = ({ products }: HomePageProps) => {
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 3,
			spacing: 48,
		},
	})

	return (
		<HomeContainer ref={sliderRef} className="keen-slider">
			{products.map((product) => {
				return (
					<Link href={`/products/${product.id}`} key={product.id}>
						<Product className="keen-slider__slide">
							<Image src={product.imageUrl} width={520} height={480} alt="" />

							<footer>
								<span>{product.name}</span>
								<strong>
									{product.price &&
										(product.price / 100).toLocaleString('pt-BR', {
											style: 'currency',
											currency: 'BRL',
										})}
								</strong>
							</footer>
						</Product>
					</Link>
				)
			})}
		</HomeContainer>
	)
}
