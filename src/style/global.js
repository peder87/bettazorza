import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import { fonts, media, colors } from "./constants"
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

  .bzBannerContainer {
    font-family: ${fonts.sansSerif};
    & .bzBannerButton {
      font-family: ${fonts.sansSerif};
      border: 0;
      line-height: 1.7;
      white-space: nowrap;
      border-radius: 0.25rem;
      text-decoration: none;
      cursor: pointer;
      text-align: center;
      font-weight: 600;
      padding-left: 1.5rem;
      padding-right: 1.5rem;

      font-size: 1rem !important;
      border: 2px solid !important;
      border-radius: 1.8rem !important;
      color: ${colors.white} !important;
      background-color: ${colors.purple} !important;
      border-color: ${colors.white} !important;
      transition: background-color 150ms ease-in !important;
      transition: color 200ms ease-in !important;

      &:hover {
        cursor: pointer !important;
        background-color: ${colors.white} !important;
        color: ${colors.purple} !important;
        border-color: ${colors.white} !important;
      }

    }
  }
}
`
