import { HeaderContainer } from "../pageComponents/style"
import styled from "styled-components"

export const Header = styled(HeaderContainer)``

export const PageTitle = styled.h2`
  font-size: 2.25rem;
`

export const PageCopy = styled.p`
  font-size: 1.5rem;
  font-weight: ${props => (props.bold ? 500 : 400)};
`
