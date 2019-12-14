import React from "react"
import { useTransition, animated } from "react-spring"
import { colors } from "../../style/constants"

const menuProps = {
  background: colors.yellow,
  position: "absolute",
  width: "100%",
  height: "auto",
  minHeight: "100%",
  zIndex: 9998,
  position: "absolute",
  top: 0,
  left: 0,
}

const Menu = ({ visible }) => {
  console.log("v", visible)
  const transitions = useTransition(visible, null, {
    from: { opacity: 0 },
    enter: { opacity: 0.95 },
    leave: { opacity: 0 },
  })
  return transitions.map(({ item, key, props }) => {
    const styled = { ...menuProps, ...props }
    return item && <animated.div key={key} style={styled} />
  })
}

export default Menu
