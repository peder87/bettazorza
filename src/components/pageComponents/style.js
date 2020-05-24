import styled from "styled-components"
import { media } from "../../style/constants"
import { math } from 'polished'

export const GlobalContainer = styled.div`
  ${media.xl`
    padding: 3.5em 5vh 0 3.5em;
  `}
  ${media.lg`
    padding: 3.0em 5vh 0 3.0em;
  `}
  ${media.md`
    padding: 2.5em 5vh 0 2.5em;
  `}
  ${media.sm`
    padding: 2.0em 5vh 0 2.5em;
  `}
`


const PageCenterContent = styled.div`
  color: ${props => props.color};
  margin: 0 auto;
  /* height: auto;
  min-height: 100%; */
  /* background: blue; */
  
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


export const PageContainer = styled(PageCenterContent)`
    height: 100%;
  ${media.xl`
    padding-top: 10vh;
    min-height: 86vh;
    /* padding-top: 4.125em; */
  `}
  ${media.lg`
    padding-top: 10vh;
    /* padding-top: 3.5em; */
  `}
  ${media.md`
    padding-top: 2.5em;
    /* padding-top: 10vh; */
  `}
  ${media.sm`
    padding-top: 1.75em;
    /* padding-top: 10vh; */
  `}
`

export const FooterContainer = styled(PageCenterContent)`
  /* background: red; */
  position: relative;
  
`

export const HeaderContainer = styled(PageCenterContent)``
