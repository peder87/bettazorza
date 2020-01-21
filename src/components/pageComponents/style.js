import styled from "styled-components"
import { media } from "../../style/constants"

export const PageContainer = styled.div`
  color: ${props => props.color};
  margin: 0 auto;
  height: auto;
  min-height: 100%;
  ${media.xl`
    padding-top: 4.125em;
    width: 75%;
  `}
  ${media.lg`
    width: 80%;
    padding-top: 3.5em;
  `}
  ${media.md`
    width: 100%;
    padding-top: 2.5em;
  `}
  ${media.sm`
    width: 100%;
    padding-top: 1.75em;
  `}
`

export const FooterContainer = styled(PageContainer)``

export const HeaderContainer = styled(PageContainer)``
