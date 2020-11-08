import styled, { css } from "styled-components"
import { media, fonts, colors } from "../../style/constants"
import { HeaderContainer } from "../pageComponents/style"

export const Header = styled(HeaderContainer)``

export const PageTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
  color: ${props => props.color};
  ${media.sm`
    font-size: 1.5rem;
  `};
  padding-bottom: 2rem;
  &::first-letter {
    text-transform: uppercase;
  }
`

export const CopyWrapper = styled.div`
  padding-bottom: 3rem;
  ${media.md`
    padding-bottom: 2rem;
  `}
`

export const PageCopy = styled.p`
  padding: 0;
  margin: 0;
  text-align: left;
  ${media.sm`
    text-align: center;
    font-size: 1.125rem;
    font-style: normal; 
    line-height: 1.1;
  `}
  font-size: 1.5rem;
  line-height: 1.1;
  font-weight: ${props => (props.bold ? 500 : 400)};

  & span.bold {
    font-weight: 600;
    font-style: bold;
  }
`

export const BzTitle = styled.h2`
  font-size: 6.25rem;
  padding-bottom: 6.25rem;
  font-family: ${fonts.sansSerif};
  font-weight: 700;
  text-align: center;
  color: ${props => props.color || colors.purple};
  padding-top: ${props => (props.noPadding ? 0 : "6.25rem")};
`

export const BzCopy = styled.p`
  font-size: 1.5rem;
  padding-bottom: 1rem;
  line-height: 1;
  ${props =>
    props.bold &&
    css`
      font-weight: 700;
    `}
  ${props =>
    props.italic &&
    css`
      font-style: italic;
    `}
`
