module.exports = {
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    // safelist para nao dar erro ao subir o codigo e conseguir interpolar as cores no botao.tsx
    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/,
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}