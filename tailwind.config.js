/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('/arquivos/imagens/capa_mobile.jpg')",
        'desktop': "url('/arquivos/imagens/capa_desktop.jpg')",
      }
    },
  },
  plugins: [],
}
