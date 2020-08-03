import React from 'react'
import { navigate } from 'gatsby'
import { Hamburger, IconContainer } from './hamburger' 
import { Logo } from '../logo'
import { Menu } from './menu'
import { PageList } from './pageList'
import { HamburgerFixedWrapper, HamburgerFlexWrapper, ResetContainer, MenuContainer, FooterAnimation, GlobalMenu } from './style'
import { Footer } from '../footer'

export const NavMenu = ({isOpen, toggleMenu, color, bgcolor, navList}) => {
  const portrait = window.innerHeight > window.innerWidth
  // const [navbarFixed, setNavbarFixed] = useState(false)
  if(isOpen) {
    document.addEventListener('keydown', e => {
      e.keyCode === 27 && toggleMenu()
    })
  }
  // document.addEventListener('scroll', e => {
  //   const isFixed = window.scrollY > 50
  //   setNavbarFixed(isFixed)
  // })
  const goHome = () => {
    navigate('/')
  }

  return (
    <div id="NAVIGATION_WRAPPER">
      <HamburgerFixedWrapper bgcolor={bgcolor} isOpen={isOpen} showBorder={false  }>
        <HamburgerFlexWrapper isOpen={isOpen} id="HAMBURGER_WRAPPER">
          <Hamburger isOpen={isOpen} onClick={toggleMenu} hambugerColor={color}>
            <div></div> {/* hamburger */}
          </Hamburger>
          <IconContainer disableHover={isOpen}>
            <Logo inMenu={isOpen} clickCallback={goHome} />
          </IconContainer>
        </HamburgerFlexWrapper>
      </HamburgerFixedWrapper>
      <Menu isOpen={isOpen} id="BACKGROUND_MENU" isPortrait={portrait}>
        <div /> {/* box giallo */}
      </Menu>
      <ResetContainer isOpen={isOpen} id="MENU_CONTENT-RESET"> {/* funziona da resettone che sostituscie il body */}
      {/* { isOpen && 
      (
        <HamburgerFixedWrapper innerMenu>
          <HamburgerFlexWrapper isOpen={isOpen}  id="HAMBURGER_WRAPPER">
            <Hamburger isOpen={isOpen} onClick={toggleMenu} hambugerColor={color}>
              <div></div> 
            </Hamburger>
          </HamburgerFlexWrapper>
        </HamburgerFixedWrapper>
      )
      } */}
      <GlobalMenu id="MENU_CONTENT-GLOBAL">
        <MenuContainer id="MENU_CONTAINER-FLEX" inMenu>
          <PageList isOpen={isOpen} toggleMenu={toggleMenu} src={navList} />
          <FooterAnimation isOpen={isOpen}>
            <Footer menu/>
          </FooterAnimation>
          </MenuContainer>
        </GlobalMenu>
      </ResetContainer>
    </div>
  )
}