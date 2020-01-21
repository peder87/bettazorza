import React from "react"
import { useTransition, animated } from "react-spring"
import { colors } from "../../style/constants"
import { ListMenu } from "./listMenu"
import { Footer } from "../footer"
import { MenuContainer } from "./style"

const menuProps = {
  background: colors.yellowMenu,
  position: "fixed",
  width: "100%",
  height: "auto",
  minHeight: "100vh",
  overflow: "none",
  zIndex: 9998,
  top: 0,
  left: 0,
}

const Menu = ({ visible, callback }) => {
  const transitions = useTransition(visible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return transitions.map(({ item, key, props }) => {
    const styled = { ...menuProps, ...props }
    return (
      item && (
        <animated.div key={key} style={styled}>
          <MenuContainer>
            <ListMenu callback={callback} />
            <Footer menu />
          </MenuContainer>
        </animated.div>
      )
    )
  })
}

export default Menu
