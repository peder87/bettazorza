import React from "react"
import { FooterWrapper, FooterText } from "./style"
import { SocialMenu } from "../socialMenu"
import { colors } from "../../style/constants"

export const Footer = ({ menu, color, ...props }) => {
  const componentProps = {
    menu: !!menu,
  }
  const footerColors = {
    color: menu ? colors.purple : color,
  }
  return (
    <FooterWrapper {...componentProps}>
      <FooterText {...footerColors}>hello@bettazorza.it</FooterText>
      <SocialMenu {...footerColors} />
      <FooterText {...footerColors}>©2019 BettaZorza</FooterText>
    </FooterWrapper>
  )
}
