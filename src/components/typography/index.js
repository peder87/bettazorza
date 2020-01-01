import styled from "styled-components"
import { media } from "../../style/constants"
import { HeaderContainer } from "../pageComponents/style"

export const Header = styled(HeaderContainer)``

export const PageTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
  color: ${props => props.color};
  ${media.sm`
    font-size: 1.5rem;
  `};
  padding-bottom: 4rem;
`

export const PageCopy = styled.p`
  font-size: 1.5rem;
  font-weight: ${props => (props.bold ? 500 : 400)};
`
