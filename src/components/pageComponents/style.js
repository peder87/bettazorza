import styled from "styled-components"
import { media, mq } from "../../style/constants"
import { math } from "polished"

export const GlobalContainer = styled.div`
  /* PADDING */
  ${media.xxl`
    padding: 3.5em 3.5em 3.5em;
  `}
  ${media.xl`
    padding: 3.5em 3.5em 3.5em;
  `}
  ${media.lg`
    padding: 3.0em 3.0em 3.0em;
  `}
  ${media.md`
    padding: 2.5em 2.5em 2.5em;
  `}
  ${media.sm`
    padding: 2.0em 2.5em 2.0em;
  `}
`

export const PageCenterContent = styled.div`
  color: ${props => props.color};
  margin: 0 auto;
  ${media.xxl`
    width: ${mq.xl};
  `}
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
  ${media.xs`
    width: 100%;
  `}
`

export const PageContainer = styled(PageCenterContent)`
    height: 100%;
  ${media.xl`
    padding-top: ${props => (props.inMenu ? math("6em + 3em") : "4em")};
    padding-bottom: ${props => (props.inMenu ? 0 : "2em")};
  `}
  ${media.lg`
    padding-top: ${props => (props.inMenu ? math("6em + 3em") : "4em")};
    padding-bottom: ${props => (props.inMenu ? 0 : "2em")};
  `}
  ${media.md`
    padding-top: ${props => (props.inMenu ? math("2.5em + 3em") : "4em")};
    padding-bottom: ${props => (props.inMenu ? 0 : "2em")};
  `}
  ${media.sm`
    padding-top: ${props => (props.inMenu ? math("1.75em + 3em") : "4em")};
    padding-bottom: ${props => (props.inMenu ? 0 : "2em")};
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

export const Section = styled.div`
  height: ${props => (props.full ? "100vh" : "auto")};
  background-color: ${props => props.bgcolor || "#fff"};
  color: ${props => props.color || "#000"};
`

export const SectionCenteredContent = styled(PageCenterContent)`
  ${media.xxl`
    padding-left: 3.5em;
    padding-right: 3.5em;
  `}
  ${media.xl`
    padding-left: 3.5em;
    padding-right: 3.5em;
  `}
  ${media.lg`
    padding-left: 3.0em;
    padding-right: 3.0em;
  `}
  ${media.md`
    padding-left: 2.5em;
    padding-right: 2.5em;
  `}
  ${media.sm`
    padding-left: 2.0em;
    padding-right: 2.0em;
  `}
  ${media.xs`
    padding-left: 2.0em;
    padding-right: 2.0em;
  `}
`
