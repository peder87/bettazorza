import styled from "styled-components"
import { media } from "../../style/constants"
import { Section } from "../pageComponents/style"

export const AboutSection = styled(Section)``

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
