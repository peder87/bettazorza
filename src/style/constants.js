import { css } from "styled-components"

export const colors = {
  blue900: "#1e2733",
  gray500: "#94989E",
  gray700: "#656a73",
  yellow500: "#EBC86E",
  yellow700: "#6b6349",

  purple: "#781ED7",
  yellow: "#F1CA01",
  yellowMenu: "rgba(241, 206, 25, 0.95)",
  darkGray: "#38444B",
  cyan: "#04BFBF",
  red: "#FC5538",
  white: "#FFF",
  cardBg: "#F3F6F8",
}

export const fonts = {
  sansSerif: `'Larsseit', sans-serif`,
}

export const spaces = {
  p500: "5rem",
  p400: "4rem",
  p300: "3rem",
  p200: "2rem",
  p100: "1rem",
  p50: ".5rem",
  p25: ".25rem",
}

export const mq = {
  xs: "22em",
  sm: "40em",
  md: "54em",
  lg: "78em",
  xl: "125em",
  xxl: "220em",
}

export const media = {
  xs: (...a) => css`
    @media (max-width: ${mq.xs}) {
      ${css(...a)}
    }
  `,
  sm: (...a) => css`
    @media (max-width: ${mq.sm}) {
      ${css(...a)}
    }
  `,
  md: (...a) => css`
    @media (max-width: ${mq.md}) {
      ${css(...a)}
    }
  `,
  lg: (...a) => css`
    @media (max-width: ${mq.lg}) {
      ${css(...a)}
    }
  `,
  xl: (...a) => css`
    @media (max-width: ${mq.xl}) {
      ${css(...a)}
    }
  `,
  xxl: (...a) => css`
    @media (max-width: ${mq.xxl}) {
      ${css(...a)}
    }
  `,
  hover: (...a) => css`
    @media not all and (hover: none) {
      ${css(...a)}
    }
  `,
}

const rule = (d, v) => `${d}: ${v};`

export const getOuterSpace = p =>
  css`
    ${rule(p, spaces.p500)}
    ${media.lg`
      ${rule(p, spaces.p300)}
    `}
    ${media.md`
      ${rule(p, spaces.p300)}
    `}
    ${media.sm`
      ${rule(p, spaces.p200)}
    `}
  `

export const mediaChecker = css`
  ${media.xxl`
    background-color: red;
  `}
  ${media.xl`
    background-color: hotpink;
  `}
  ${media.lg`
    background-color: orange;
  `}
  ${media.md`
    background-color: yellow;
  `}
  ${media.sm`
    background-color: green;
  `}
  ${media.xs`
    background-color: #ccc;
  `}
`

export const paddingBottom = css`
  ${media.xxl`
    padding-bottom: 6.25rem;
  `}
  ${media.xl`
    padding-bottom: 4.25rem;
  `}
  ${media.lg`
    padding-bottom: 3.25rem;
  `}
  ${media.md`
    padding-bottom: 2.25rem;
  `}
  ${media.sm`
    padding-bottom: 2.25rem;
  `}
  ${media.xs`
    padding-bottom: 2.25rem;
  `}
`
