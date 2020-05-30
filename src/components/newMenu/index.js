import React from 'react'
import { Hamburger } from './hamburger' 
import { Menu } from './menu'
import { PageList } from './pageList'
import { NavigationWrapper, HamburgerWrapper, ResetContainer, MenuContainer, FooterAnimation } from './style'
import { Footer } from '../footer'
import { GlobalContainer } from '../pageComponents/style'
export const NavMenu = ({isOpen, toggleMenu, color}) => {
  if(isOpen) {
    document.addEventListener('keydown', e => {
      e.keyCode === 27 && toggleMenu()
    })
  }
  return (
    <NavigationWrapper id="NAVIGATION_WRAPPER">
      <HamburgerWrapper isOpen={isOpen} Id="HAMBURGER_WRAPPER">
        <Hamburger isOpen={isOpen} onClick={toggleMenu} hambugerColor={color}>
          <div></div> {/* hamburger */}
        </Hamburger>
      </HamburgerWrapper>
      <Menu isOpen={isOpen} id="BACKGROUND_MENU">
        <div /> {/* box giallo */}
      </Menu>
      <ResetContainer isOpen={isOpen} id="MENU_CONTENT-RESET"> {/* funziona da resettone che sostituscie il body */}
        <GlobalContainer id="MENU_CONTENT-GLOBAL">
          <MenuContainer id="MENU_CONTAINER-FLEX" inMenu>
            <PageList isOpen={isOpen} toggleMenu={toggleMenu}/>
            <FooterAnimation isOpen={isOpen}>
              <Footer menu/>
            </FooterAnimation>
          </MenuContainer>
        </GlobalContainer>
      </ResetContainer>
    </NavigationWrapper>
  )
}