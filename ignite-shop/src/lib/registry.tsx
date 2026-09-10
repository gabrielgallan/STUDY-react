'use client'
import { useServerInsertedHTML } from 'next/navigation'

import { type ReactNode, useState } from 'react'
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components'

import { defaultTheme, GlobalStyle } from '../styles'

export default function StyledComponentsRegistry({ children }: { children: ReactNode }) {
	// Only create stylesheet once with lazy initial state
	// x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement()
		styledComponentsStyleSheet.instance.clearTag()
		return <>{styles}</>
	})

	const app = (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	)

	if (typeof window !== 'undefined') return app

	return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{app}</StyleSheetManager>
}
