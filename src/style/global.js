import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import { colors, fonts, media } from "./constants"

export const GlobalStyle = createGlobalStyle`
  ${reset};

  html, body {
    height: 100%;
    font-size: 16px;
    ${media.xl`
      font-size: 14px;
    `}
  }

  body {
    color: ${colors.white};
    background-color: ${props => props.bgcolor};
    font-family: ${fonts.sansSerif};
    backface-visibility: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ease-in .2s;
    &:hover {
      color: #fff;
    }
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
    /* color: ${colors.yellow}; */
    background: transparent;
  }
`
