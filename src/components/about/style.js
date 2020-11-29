import styled, { css } from "styled-components"
import { media } from "../../style/constants"
import { Section } from "../pageComponents/style"

export const AboutSection = styled(Section)``

export const BzAboutGrid = styled.div`
  padding-bottom: 6.25em;

  display: grid;
  grid-template-columns: 35% 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 3rem;
  & div img {
    width: 100%;
  }
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
  & div:first-child {
  }
  & div:last-child {
  }
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
  padding-bottom: 6.25rem;
`
