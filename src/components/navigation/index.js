import React, { useState } from "react"
import { Wrapper } from "./style"
import { MenuClosed, MenuOpen } from "./components/icons"
import Logo from "./components/logo.svg"

export default props => {
  const [status, setStatus] = useState(false)
  const handleMenu = () => {
    console.log("click")
    setStatus(!status)
  }

  return (
    <Wrapper>
      <MenuIcon callback={handleMenu} isOpen={status} />

      <Logo width={40} height={52} />
    </Wrapper>
  )
}

const MenuIcon = ({ isOpen, callback }) =>
  isOpen ? <MenuOpen onClick={callback} /> : <MenuClosed onClick={callback} />
