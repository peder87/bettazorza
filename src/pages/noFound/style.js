import styled from 'styled-components'
import { media, fonts } from '../../style/constants'

export const Container = styled.div`
  border: 3px solid hotpink;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
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
  font-weight: 500;
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
  font-weight: 400;
` 

export const Status = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
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