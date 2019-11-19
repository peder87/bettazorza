import React, { useState } from "react"
import Menu from "../menu"
import { Wrapper } from "./style"

export default props => {
  const [status, setStatus] = useState(false)
  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  )
}
