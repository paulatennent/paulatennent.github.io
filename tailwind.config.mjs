/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: { 
        'ubuntu': ['"ubuntu"', '"noto color emoji"'],
        'noto': ['"noto sans"', '"noto color emoji"'],
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
            '--tw-prose-bullets': theme('colors.pink[600]'),
            '--tw-prose-counters': theme('colors.pink[600]'),
            'a:hover': {
              color: theme('colors.pink[600]'),
            },
            'code::before': {
              content: 'none'
            },
            'code::after': {
              content: 'none'
            },
            'p > code, li > code, dd > code, td > code': {
              color: theme('colors.stone[200]'),
              backgroundColor: theme('colors.gray[700]'),
              borderRadius: theme('borderRadius.DEFAULT'),
              fontWeight: 'normal',
              paddingLeft: theme('spacing[1.5]'),
              paddingRight: theme('spacing[1.5]'),
              paddingTop: theme('spacing.7px'),
              paddingBottom: theme('spacing.7px'),
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
