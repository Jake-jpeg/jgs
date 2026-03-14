module.exports = {
  theme: {
    typography: ({ theme }) => ({
      DEFAULT: {
        css: {
          '--tw-prose-body': theme('colors.zinc.700'),
          '--tw-prose-headings': theme('colors.zinc.900'),
          '--tw-prose-links': theme('colors.teal.500'),
          '--tw-prose-bold': theme('colors.zinc.900'),
          '--tw-prose-counters': theme('colors.zinc.500'),
          '--tw-prose-bullets': theme('colors.zinc.300'),
          '--tw-prose-hr': theme('colors.zinc.100'),
          '--tw-prose-quotes': theme('colors.zinc.900'),
          '--tw-prose-code': theme('colors.zinc.900'),
          '--tw-prose-pre-code': theme('colors.zinc.200'),
          '--tw-prose-pre-bg': theme('colors.zinc.800'),
          '--tw-prose-invert-body': theme('colors.zinc.400'),
          '--tw-prose-invert-headings': theme('colors.zinc.100'),
          '--tw-prose-invert-links': theme('colors.teal.400'),
          '--tw-prose-invert-bold': theme('colors.zinc.100'),
          '--tw-prose-invert-counters': theme('colors.zinc.400'),
          '--tw-prose-invert-bullets': theme('colors.zinc.600'),
          '--tw-prose-invert-hr': theme('colors.zinc.700'),
          '--tw-prose-invert-quotes': theme('colors.zinc.100'),
          '--tw-prose-invert-code': theme('colors.zinc.100'),
          '--tw-prose-invert-pre-code': theme('colors.zinc.300'),
          '--tw-prose-invert-pre-bg': 'transparent',
        },
      },
    }),
  },
}
