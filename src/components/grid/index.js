import styled, { css } from "styled-components"
import { media, paddingBottom } from "../../style/constants"

export const StuffGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 2.2rem;
  grid-row-gap: 2.2rem;

  ${media.xxl`
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 2.2rem;
    grid-row-gap: 2.2rem;
  `}
  ${media.xl`
    grid-template-columns: repeat(4, 1fr);
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
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 2.2rem;
    grid-row-gap: 2.2rem;
  `}

  ${media.sm`
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1.8rem;
  `}
  ${paddingBottom};
`

export const ProjectGrid = styled.div`
  display: grid;
  grid-column-gap: 2.2em;
  grid-row-gap: 2.2em;
  grid-template-columns: repeat(2, 1fr);
  ${paddingBottom};

  ${media.sm`
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1.8rem;
  `}
  ${media.xs`
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1.8rem;
  `}
`

export const Item = styled.div`
  ${props =>
    props.full &&
    css`
      grid-column: 1/3;
      ${media.sm`
      grid-column: 1/2;
    `}
      ${media.xs`
      grid-column: 1/2;
    `}
    `}

  & img {
    width: 100%;
  }
`
