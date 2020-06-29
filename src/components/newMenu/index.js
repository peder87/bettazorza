import React, {useState} from 'react'
import { Hamburger } from './hamburger' 
import { Menu } from './menu'
import { PageList } from './pageList'
import { HamburgerFixedWrapper, HamburgerFlexWrapper, ResetContainer, MenuContainer, FooterAnimation, GlobalMenu } from './style'
import { Footer } from '../footer'

export const NavMenu = ({isOpen, toggleMenu, color, bgcolor}) => {
  const [navbarFixed, setNavbarFixed] = useState(false)
  if(isOpen) {
    document.addEventListener('keydown', e => {
      e.keyCode === 27 && toggleMenu()
    })
  }
  document.addEventListener('scroll', e => {
    const isFixed = window.scrollY > 50
    setNavbarFixed(isFixed)
  })
  return (
    <div id="NAVIGATION_WRAPPER">
      <HamburgerFixedWrapper bgcolor={bgcolor} isOpen={isOpen} showBorder={navbarFixed}>
        <HamburgerFlexWrapper isOpen={isOpen} id="HAMBURGER_WRAPPER">
          <Hamburger isOpen={isOpen} onClick={toggleMenu} hambugerColor={color}>
            <div></div> {/* hamburger */}
          </Hamburger>
        </HamburgerFlexWrapper>
      </HamburgerFixedWrapper>
      <Menu isOpen={isOpen} id="BACKGROUND_MENU">
        <div /> {/* box giallo */}
      </Menu>
      <ResetContainer isOpen={isOpen} id="MENU_CONTENT-RESET"> {/* funziona da resettone che sostituscie il body */}
      { isOpen && 
      (
        <HamburgerFixedWrapper innerMenu>
          <HamburgerFlexWrapper isOpen={isOpen}  id="HAMBURGER_WRAPPER">
            <Hamburger isOpen={isOpen} onClick={toggleMenu} hambugerColor={color}>
              <div></div> {/* hamburger */}
            </Hamburger>
          </HamburgerFlexWrapper>
        </HamburgerFixedWrapper>
      )
      }
      <GlobalMenu id="MENU_CONTENT-GLOBAL">
        <MenuContainer id="MENU_CONTAINER-FLEX" inMenu>
          <PageList isOpen={isOpen} toggleMenu={toggleMenu}/>
            <FooterAnimation isOpen={isOpen}>
              <Footer menu/>
            </FooterAnimation>
          </MenuContainer>
        </GlobalMenu>
      </ResetContainer>
    </div>
  )
}