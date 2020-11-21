import styled from "styled-components"
import {
  colors,
  paddingBottom,
  media,
  mediaChecker,
} from "../../style/constants"

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10.5em;
    ${media.md`
      height: 12em;
    `}
    ${media.sm`
      height: 12em;
    `}
    ${media.xs`
      height: 12em;
    `}
  & div {
    ${mediaChecker};
    padding-bottom: 1em;
    object-fit: cover;
  }
  & span {
    text-transform: uppercase;
    color: ${colors.darkGray};
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
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
      font-size: 0.8rem;
      letter-spacing: 0.1rem;
    `}
    ${media.xs`
      font-size: 1rem;
    letter-spacing: 0.1rem;
    `}
  }
`
