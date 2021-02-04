import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  body {
    background: rgb(235,240,245);
    background: radial-gradient(circle, rgba(235,240,245,1) 0%, rgba(207,214,218,1) 100%);
  }
`

export default GlobalStyle
