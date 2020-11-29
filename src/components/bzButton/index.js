import React from "react"
import { Button } from "./style"

export const BzButton = ({ text, click, ...rest }) => {
  return (
    <Button {...rest} onClick={click}>
      {text}
    </Button>
  )
}
