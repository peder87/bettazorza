import styled from 'styled-components'
import { colors, media } from '../../style/constants'

export const Button = styled.button`
  text-transform: uppercase;
  background-color: ${colors.white};
  color: ${colors.purple};
  border-radius: 30px;
  outline:none;
  border: none;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 3rem;
  margin: 0 auto;
  width: 50%;
  ${media.lg`
    width: 90%;
  `}
  ${media.md`
    width: 90%;
    font-size: 1.3rem;
  `}
  ${media.sm`
    font-size: 1.1rem;
  `}
  ${media.xs`
    font-size: 2rem;
  `}
  transition: background-color .15s ease;
  &:hover {
    cursor: pointer;
    background-color: ${colors.yellow};
    /* border: 1px solid ${colors.white}; */
  }
`