import { AppProps } from 'next/app'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'

import igniteLogo from '../assets/ignite-logo.svg'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyle } from '../styles'

export default function App({ Component, pageProps }: AppProps) {
	return <ThemeProvider theme={defaultTheme}>
		<GlobalStyle />

		<Container>
						<Header>
							<Image src={igniteLogo} alt="" />
						</Header>

						<Component {...pageProps} />
					</Container>
					</ThemeProvider>
}
