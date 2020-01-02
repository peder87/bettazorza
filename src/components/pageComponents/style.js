import styled from "styled-components"
import { media } from "../../style/constants"

export const PageContainer = styled.div`
  color: ${props => props.color};
  margin: 0 auto;
  height: auto;
  min-height: 100%;
  padding-top: 4em;
  ${media.xl`
    width: 75%;
  `}
  ${media.lg`
    width: 80%;
  `}
  ${media.md`
    width: 100%;
  `}
  ${media.sm`
    width: 100%;
  `}
`

export const FooterContainer = styled(PageContainer)``

export const HeaderContainer = styled(PageContainer)``
