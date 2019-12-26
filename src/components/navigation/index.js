import React from "react"
import { navigate } from "gatsby"
import { Wrapper, NavigationWrapper } from "./style"
import { MenuClosed, MenuOpen, LogoIcon } from "./components/icons"
import Menu from "../menu"
// import Logo from "./components/logo.svg"

export default ({ isOpen, toggleMenu }) => {
  const redirectHome = () => {
    navigate("/")
  }
  if (isOpen) {
    document.addEventListener("keydown", e => {
      if (e.keyCode === 27) {
        toggleMenu()
      }
    })
  }
  return (
    <Wrapper>
      <NavigationWrapper>
        <MenuIcon callback={toggleMenu} isOpen={isOpen} />
        {!isOpen && <LogoIcon onClick={redirectHome} />}
      </NavigationWrapper>
      <Menu visible={isOpen} />
    </Wrapper>
  )
}

const MenuIcon = ({ isOpen, callback }) => {
  const darkIconList = ["/work"]
  const isDark = darkIconList.indexOf(window.location.pathname) !== -1

  return isOpen ? (
    <MenuOpen onClick={callback} />
  ) : (
    <MenuClosed dark={isDark} onClick={callback} />
  )
}
