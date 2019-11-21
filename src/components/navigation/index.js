import React, { useState } from "react"
import Menu from "./components/menu"
import { Wrapper, MenuButton } from "./style"

export default props => {
  const [status, setStatus] = useState(false)
  return (
    <Wrapper>
      <MenuButton>menu</MenuButton>
      <Menu />
    </Wrapper>
  )
}
