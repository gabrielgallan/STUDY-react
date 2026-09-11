import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	* {
		margin: 0;
		padding: 0;
	}

	html {
		color-scheme: dark;
	}

	body {
		min-height: 100vh;
		background: ${({ theme }) => theme.colors.gray900};
		color: ${({ theme }) => theme.colors.gray100};
		-webkit-font-smoothing: antialiased;
	}

	body,
	input,
	textarea,
	button {
		font-family: Roboto;
		font-size: ${({ theme }) => theme.fontSizes.md};
		font-weight: 400;
		line-height: 1.6;
	}

	button,
	input,
	textarea {
		color: inherit;
	}

	button {
		cursor: pointer;
	}

	button:disabled {
		cursor: not-allowed;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	img,
	picture,
	svg,
	canvas {
		display: block;
		max-width: 100%;
	}

	:focus-visible {
		outline: 2px solid ${({ theme }) => theme.colors.green500};
		outline-offset: 2px;
	}
`
