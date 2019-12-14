import React from "react"
import { Wrapper, NavigationWrapper } from "./style"
import { MenuClosed, MenuOpen, LogoIcon } from "./components/icons"
import Menu from "../menu"
// import Logo from "./components/logo.svg"

export default ({ isOpen, toggleMenu }) => {
  return (
    <Wrapper>
      <NavigationWrapper>
        <MenuIcon callback={toggleMenu} isOpen={isOpen} />
        {!isOpen && <LogoIcon />}
      </NavigationWrapper>
      <Menu visible={isOpen} />
    </Wrapper>
  )
}

const MenuIcon = ({ isOpen, callback }) =>
  isOpen ? <MenuOpen onClick={callback} /> : <MenuClosed onClick={callback} />
