import React from "react"
import { Button, AnimatedButton } from "./style"

export default props => {
  const Btn = props.animated ? AnimatedButton : Button
  return <Btn onClick={props.click}>{props.text}</Btn>
}
