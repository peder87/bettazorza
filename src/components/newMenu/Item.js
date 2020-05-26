import styled from 'styled-components'
import { colors, media } from '../../style/constants'


export const MenuItem = styled.div`
  margin-bottom: 2em;
  ${media.sm`
    text-align: center;
  `}

  & a {
    font-size: 3rem;
    color: ${colors.purple};
    font-weight: 700;
    letter-spacing: 0.06em;
    &:hover {
      text-decoration: underline;
      color: ${colors.purple};
      cursor: pointer;
    }
    &::first-letter {
      text-transform: uppercase;
    }

    &:focus {
      outline: none;
    }
  }
`