import styled from "styled-components"
import { media, fonts } from "../../style/constants"
import { colors } from "../../style/constants"

export const NoFoundPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  color: ${colors.white};

  & img {
    padding-bottom: 2rem;
  }

  ${media.lg`
    border-color: red;
  `}
  ${media.md`
    border-color: green;
  `}
  ${media.sm`
    border-color: yellow;
  `}
  ${media.xs`
    border-color: blue;
  `}
`

export const CenteredChild = styled.div`
  text-align: center;
  padding-bottom: 2rem;
  font-family: ${fonts.sansSerif};
`

export const DontPanic = styled.h3`
  width: 100%;
  font-size: 5rem;
  ${media.lg`
    font-size: 4rem;
  `}
  ${media.md`
    font-size: 3.8rem;
  `}
  ${media.sm`
    font-size: 2.8rem;
  `}
  ${media.xs`
    font-size: 2rem;
  `}
  font-weight: 600;
  font-family: ${fonts.sansSerif};
`

export const Payoff = styled.h5`
  font-size: 1.8rem;
  ${media.lg`
    font-size: 1.5rem;
  `}
  ${media.md`
    font-size: 1.48rem;
  `}
  ${media.sm`
    font-size: 1.1rem;
  `}
  ${media.xs`
    font-size: 1.2rem;
  `}
  font-weight: 500;
`

export const Status = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: .2rem;
  text-transform: uppercase;
  ${media.lg`
    font-size: 1.5rem;
  `}
  ${media.md`
    font-size: 1.48rem;
  `}
  ${media.sm`
    font-size: 1.1rem;
  `}
  ${media.xs`
    font-size: 1.2rem;
  `}
`

export default () => ``
