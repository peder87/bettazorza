import styled from "styled-components"
import { media } from "../../style/constants"
import { math } from 'polished'

export const GlobalContainer = styled.div`
  /* PADDING */
  ${media.xl`
    padding: 3.5em 3.5em 0;
  `}
  ${media.lg`
    padding: 3.0em 3.0em 0;
  `}
  ${media.md`
    padding: 2.5em 2.5em 0;
  `}
  ${media.sm`
    padding: 2.0em 2.5em 0;
  `}
`

export const PageCenterContent = styled.div`
  color: ${props => props.color};
  margin: 0 auto;
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
  ${media.sm`
    width: 100%;
  `}
`

export const PageContainer = styled(PageCenterContent)`
    height: 100%;
  ${media.xl`
    padding-top: ${props => props.inMenu ? math('6em + 3em') : '4em'};
    padding-bottom: ${props => props.inMenu ? 0 : '2em'};
  `}
  ${media.lg`
    padding-top: ${props => props.inMenu ? math('6em + 3em') : '4em'};
    padding-bottom: ${props => props.inMenu ? 0 : '2em'};
  `}
  ${media.md`
    padding-top: ${props => props.inMenu ? math('2.5em + 3em') : '4em'};
    padding-bottom: ${props => props.inMenu ? 0 : '2em'};
  `}
  ${media.sm`
    padding-top: ${props => props.inMenu ? math('1.75em + 3em') : '4em'};
    padding-bottom: ${props => props.inMenu ? 0 : '2em'};
  `}
`

export const PageContainerFlex = styled(PageContainer)`
  display: flex;
  min-height: 99vh;
  flex-direction: column;
  & > div:first-child {
    flex-grow: 4;
  }
  & > div:last-child {
    flex-grow: 1;
  }
`

export const FooterContainer = styled(PageCenterContent)`
  position: relative;
`

export const HeaderContainer = styled(PageCenterContent)``
