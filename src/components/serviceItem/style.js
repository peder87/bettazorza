import styled from "styled-components"
import { colors, paddingBottom, media } from "../../style/constants"

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  & div {
    padding-bottom: 1em;
    object-fit: cover;
  }
  & span {
    text-transform: uppercase;
    color: ${colors.darkGray};
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
  ${media.xxl`
    font-size: 1.2rem;
  `}
  ${media.xl`
    font-size: 1.2rem;
  `}
  ${media.lg`
    font-size: 1.2rem;
  `}
  ${media.md`
    font-size: 1.2rem;
  `}
  ${media.sm`
    font-size: 1rem;
  `}
  ${media.xs`
    font-size: 1rem;
  `}
  }
`
