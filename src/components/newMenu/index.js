import React from 'react'
import styled, { css } from 'styled-components'
import { Hamburger } from './hamburger' 
import { Menu } from './menu'
import { media } from '../../style/constants'
import { PageList } from './pageList'
import { PageContainer } from '../pageComponents/style'
import { Footer } from '../footer'

export const NavMenu = ({isOpen, toggleMenu, color}) => {
  if(isOpen) {
    document.addEventListener('keydown', e => {
      e.keyCode === 27 && toggleMenu()
    })
  }
  return (
    <div>
      <HamburgerWrapper isOpen={isOpen}>
        <Hamburger isOpen={isOpen} onClick={toggleMenu} hambugerColor={color}>
          <div></div> {/* hamburger */}
        </Hamburger>
      </HamburgerWrapper>
      <Menu isOpen={isOpen}>
        <div /> {/* box giallo */}
      </Menu>
      <ResetContainer isOpen={isOpen}>
        <MenuContainer>
          <PageList isOpen={isOpen}/>
          <FooterAnimation isOpen={isOpen}>
            <Footer menu/>
          </FooterAnimation>
        </MenuContainer>
      </ResetContainer>
    </div>
  )
}

const HamburgerWrapper = styled.div`
  ${props => props.isOpen && css`
    position: fixed;
  `}
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

const ResetContainer = styled.div`
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
`

const MenuContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2vh;
  ${media.sm`
    justify-content: center;
  `}
`

const FooterAnimation = styled.div`
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: ${props => props.isOpen ? 'opacity .4s ease .4s' : 'opacity .4s ease'};
  transition-delay: .5s;
`