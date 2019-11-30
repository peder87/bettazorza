import React, { useState } from "react"
import { Wrapper } from "./style"
import { Logo, MenuClosed, MenuOpen } from "./components/icons"

export default props => {
  const [status, setStatus] = useState(false)
  const handleMenu = () => {
    console.log("click")
    setStatus(!status)
  }

  return (
    <Wrapper>
      <MenuIcon callback={handleMenu} isOpen={status} />

      <Logo />
    </Wrapper>
  )
}

const MenuIcon = ({ isOpen, callback }) =>
  isOpen ? <MenuOpen onClick={callback} /> : <MenuClosed onClick={callback} />
