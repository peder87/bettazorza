import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import { fonts, media } from "./constants"
import { src_fonts } from "./font"

export const GlobalStyle = createGlobalStyle`
  ${reset};
  ${src_fonts};

  html, body {
    height: 100%;
    font-size: 16px;
    ${media.xl`
      font-size: 14px;
    `}
  }

  body {
    font-family: ${fonts.sansSerif};
    backface-visibility: hidden;
    width: '100vw'
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    line-height: 1.4em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: auto;
    font-weight: normal;
  }

  ::selection {
    background: transparent;
  }
}
`
