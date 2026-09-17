import { AppProps } from 'next/app'
import Image from 'next/image'
import { ThemeProvider } from 'styled-components'

import igniteLogo from '../assets/ignite-logo.svg'
import { defaultTheme, GlobalStyle } from '../styles'
import { Container, Header } from '../styles/pages/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />

			<Container>
				<Header>
					<Image src={igniteLogo} alt="" />
				</Header>

				<Component {...pageProps} />
			</Container>
		</ThemeProvider>
	)
}
