import React, { useState } from "react"
import Menu from "./components/menu"
import { Wrapper } from "./style"
import { MenuIcon, Logo } from "./components/icons"

export default props => {
  const [status, setStatus] = useState(false)
  return (
    <Wrapper>
      <MenuIcon />
      <Logo />
    </Wrapper>
  )
}
