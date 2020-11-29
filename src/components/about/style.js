import styled, { css } from "styled-components"
import { media } from "../../style/constants"
import { paddingV2, paddingV } from "../../style/shared"
import { Section } from "../pageComponents/style"

export const AboutSection = styled(Section)`
  height: 100%;
  min-height: 100vh;
`

export const BzAboutGrid = styled.div`
  display: grid;
  /* grid-template-columns: 35% 1fr;
  grid-template-rows: 1fr;
  gr  id-column-gap: 3rem; */
  & div.imageWrapper {
    margin: 0 auto;
    ${media.xxl`
      width: 30%;
    `}
    ${media.xl`
      width: 40%;
    `}
    ${media.lg`
      width: 40%;
    `}
    ${media.md`
      width: 40%;
    `}
    ${media.sm`
      width: 65%;
    `}
    ${media.xs`
      width: 65%;
    `}
  }
  & div.copyWrapper {
    margin: 0 auto;
    ${media.xxl`
      width: 60%;
    `}
    ${media.xl`
      width: 60%;
    `}
    ${media.lg`
      width: 70%;
    `}
    ${media.md`
      width: 70%;
    `}
    ${media.sm`
      width: 100%;
    `}
    ${media.xs`
      width: 100%;
    `}

  }
  & div img {
    width: 100%;
    border-radius: 50%;
  }
  ${media.xxl`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 100%;
    grid-row-gap: 2rem;
    grid-column-gap: 0;
  `}
  ${media.xl`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 100%;
    grid-row-gap: 2rem;
    grid-column-gap: 0;
  `}
  ${media.lg`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 100%;
    grid-row-gap: 2rem;
    grid-column-gap: 0;
  `}
  ${media.md`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 100%;
    grid-row-gap: 2rem;
    grid-column-gap: 0;
  `}
  ${media.sm`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 100%;
    grid-row-gap: 2rem;
    grid-column-gap: 0;
  `}
  ${media.xs`
    grid-template-columns: 1fr;
    grid-template-rows: 100% 100%;
    grid-row-gap: 2rem;
    grid-column-gap: 0;
  `}
`

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-row-gap: 0px;
  grid-column-gap: 20px;
  grid-template-areas: "img testo";

  ${media.md`
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 20px;
    grid-template-areas: "testo" "img";
  `}

  & > div {
    &:first-child {
      min-height: 55vh;
      height: auto;
      background-image: url(${props => props.img});
      background-position: right top;
      background-repeat: no-repeat;
      background-size: contain;
      ${media.md`
        background-position: top center;
      `}
    }
    &:last-child {
      grid-area: testo;
      padding: 0 1em 0 1em;
      & p:first-child {
        padding-bottom: 1em;
      }
    }
  }
`

export const AboutFooter = styled.div`
  text-align: center;
  ${media.xl`
    padding-top: ${paddingV2.xl};
    padding-bottom: ${paddingV2.xl}
  `}
  ${media.lg`
    padding-top: ${paddingV2.lg};
    padding-bottom: ${paddingV2.lg}
  `}
  ${media.md`
    padding-top: 2.25rem;
    padding-bottom: 2.25rem;
  `}
  ${media.sm`
    padding-top: 2.25rem;
    padding-bottom: 2.25rem;
  `}
  ${media.xs`
    padding-top: 2.25rem;
    padding-bottom: 2.25rem;
  `}
`
