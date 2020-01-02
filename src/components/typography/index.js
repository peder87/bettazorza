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
  padding-bottom: 2rem;
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
  ${media.md`
    text-align: center;
    font-size: 1.125rem;
  `}
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: ${props => (props.bold ? 500 : 400)};
`
