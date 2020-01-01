import styled from "styled-components"
import { media } from "../../style/constants"

export const StuffGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2.2rem;
  grid-row-gap: 2.2rem;

  ${media.xl`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 2.2rem;
    grid-row-gap: 2.2rem;
  `}

  ${media.lg`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 2.2rem;
    grid-row-gap: 2.2rem;
  `}

  ${media.md`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 2.2rem;
    grid-row-gap: 2.2rem;
  `}

  ${media.sm`
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 2.2rem;
    grid-row-gap: 2.2rem;
  `}
`
