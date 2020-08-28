module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/components/*.svelte',
      './src/routes/*.svelte',
    ]
  },
  theme: {},
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true
  }
}
