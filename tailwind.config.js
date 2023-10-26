/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('https://gustavo-consoni.github.io/Site_Neto_Seratti_Personal/arquivos/imagens/capa_mobile.jpg')",
        'desktop': "url('https://gustavo-consoni.github.io/Site_Neto_Seratti_Personal/arquivos/imagens/capa_desktop.jpg')",
      }
    },
  },
  plugins: [],
}
