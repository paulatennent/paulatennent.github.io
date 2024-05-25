/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: { 
        'ubuntu': ['"ubuntu"'],
      },
      typography: ({ theme }) => ({
        basic: {
          css: {
            h1: {
              color: theme('colors.indigo[600]'),
            },
            '--tw-prose-headings': theme('colors.pink[600]'),
            '--tw-prose-links': theme('colors.indigo[600]'),
            '--tw-prose-bold': theme('colors.indigo[600]'),
            '--tw-prose-hr': theme('colors.indigo[600]'),
            'a:hover': {
              color: theme('colors.pink[600]'),
            },
          },
        },
      }),
    },
	},
	plugins: [
    require('@tailwindcss/typography'),
  ],
}
