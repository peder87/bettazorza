import React from "react"
import { useSpring, animated } from "react-spring"
// import { Wrapper } from "./style"
import { colors } from "../../style/constants"

const Menu = ({ visible }) => {
  const props = useSpring({
    opacity: visible ? 0.95 : 0,
    background: colors.yellow,
    position: "absolute",
    width: "100%",
    height: "auto",
    minHeight: "100%",
    zIndex: 9998,
    position: "absolute",
    top: 0,
    left: 0,
  })
  return <animated.div style={props} />
}

export default Menu
