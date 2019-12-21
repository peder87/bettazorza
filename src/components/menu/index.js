import React from "react"
import { useTransition, animated } from "react-spring"
import { colors } from "../../style/constants"
import { ListMenu } from "./listMenu"
import { SocialMenu } from "../socialMenu"
import { MenuContainer, FooterWrapper } from "./style"

const menuProps = {
  background: colors.yellowMenu,
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
            <ListMenu />
            <FooterWrapper>
              <SocialMenu purple />
            </FooterWrapper>
          </MenuContainer>
        </animated.div>
      )
    )
  })
}

export default Menu
