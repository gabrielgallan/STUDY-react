import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import igniteLogo from '../assets/ignite-logo.svg'
import StyledComponentsRegistry from '../lib/registry'
import { Container, Header } from './styles'

export const metadata: Metadata = {
	title: 'ignite-shop.app',
}

const roboto = Roboto({
	subsets: ['latin'],
})

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html lang="en" className={`${roboto.className}`}>
			<body>
				<StyledComponentsRegistry>
					<Container>
						<Header>
							<Image src={igniteLogo} alt="" />
						</Header>

						{children}
					</Container>
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}
