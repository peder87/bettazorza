import styled from "styled-components"
import { media } from "../../style/constants"

export const PageContainer = styled.div`
  margin: 0 auto;
  height: auto;
  min-height: 100%;
  ${media.xl`
    width: 75%;
    /* background-color: blue; */
  `}
  ${media.lg`
    width: 80%;
    /* background-color: green; */
  `}
  ${media.md`
    width: 80%;
    /* background-color: pink; */
  `}
  ${media.sm`
    width: 60%;
    /* background-color: red; */
  `}
`

export const FooterContainer = styled(PageContainer)``

export const HeaderContainer = styled(PageContainer)``
