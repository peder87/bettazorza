import styled, {css} from "styled-components"
import { media } from "../../style/constants"

export const StuffGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2.2rem;
  grid-row-gap: 2.2rem;
  padding-bottom: 2.2rem;
  background-color:red;
  /* & .full {
     grid-column: 1/3;
  } */

  ${media.xl`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 2.2rem;
    grid-row-gap: 2.2rem;
    padding-bottom: 2.2rem;

  `}

  ${media.lg`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 2.2rem;
    grid-row-gap: 2.2rem;
    padding-bottom: 2.2rem;

  `}

  ${media.md`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 2.2rem;
    grid-row-gap: 2.2rem;
    padding-bottom: 2.2rem;

  `}

  ${media.sm`
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 1rem;
    padding-bottom: 1rem;
  `}
`

export const full = css`
  grid-column: 1/3;
  ${media.sm`
    grid-column: 1/2;
  `}
  ${media.xs`
    grid-column: 1/2;
  `}
`
