import styled, { css } from 'styled-components'
import { PageCenterContent, PageContainer, GlobalContainer } from '../pageComponents/style'
import { media } from '../../style/constants'

export const NavigationWrapper = styled.div`
  /* BOTTOM_SPACING */
  ${media.xl`
    margin-bottom: 5rem;
  `}
  ${media.lg`
    margin-bottom: 3rem;
  `}
  ${media.md`
    margin-bottom: 1rem;
  `}
  ${media.sm`
    margin-bottom: 1rem;
  `}
  ${media.xs`
    margin-bottom: 0rem;
  `}
`

export const HamburgerFixedWrapper = styled.div`
  ${media.xl`
    padding: 1em 3.5em 1em;
  `}
  ${media.lg`
    padding: 1em 3.0em 1em;
  `}
  ${media.md`
    padding: 1em 2.5em 1em;
  `}
  ${media.sm`
    padding: 1em 2.5em 1em;
  `}
  ${media.sm`
    padding: 1em 2.5em 1em;
  `}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.bgcolor};
  border-bottom:1px solid black;
`

export const HamburgerFlexWrapper = styled.div`
  z-index: 999999;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
  ${media.md`
    flex-direction: row-reverse;
  `}
  ${media.sm`
    flex-direction: row-reverse;
  `}
`

export const ResetContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* visibility: ${props => props.isOpen ? 'visible' : 'hidden'}; */
  z-index: 99985;
  overflow: hidden;
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: ${props => props.isOpen ? 'opacity 0.3s ease 0.3s' : 'opacity: 0.3s ease'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  display: ${props => props.isOpen ? 'block' : 'none'};
`

export const MenuContainer = styled(PageContainer)`
  /* border:1px dotted black; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2vh;
  padding-top: 0;
  ${media.sm`
    justify-content: center;
  `}
`

export const FooterAnimation = styled.div`
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: ${props => props.isOpen ? 'opacity .4s ease .4s' : 'opacity .4s ease'};
  transition-delay: .5s;
`

export const GlobalMenu = styled(GlobalContainer)`
  height: 99vh;
`