export const defaultTheme = {
	colors: {
		white: '#FFFFFF',

		gray900: '#121214',
		gray800: '#202824',
		gray300: '#c4c4cc',
		gray100: '#e1e1e6',

		green500: '#00875f',
		green300: '#00b37e',
	},

	fontSizes: {
		md: '1.125rem',
		lg: '1.25rem',
		xl: '1.5rem',
		'2xl': '2rem',
	},

	space: {
		1: '0.25rem',
		2: '0.5rem',
		3: '0.75rem',
		4: '1rem',
		6: '1.5rem',
		8: '2rem',
		10: '2.5rem',
		12: '3rem',
	},

	radius: {
		sm: '4px',
		md: '6px',
		lg: '8px',
		full: '9999px',
	},
} as const

export type AppTheme = typeof defaultTheme
