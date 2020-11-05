import React from "react"
import { Button } from "./style"

export const BzButton = ({ text, click }) => {
  return <Button onClick={click}>{text}</Button>
}
