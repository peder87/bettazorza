import React from "react"
import { FooterWrapper, FooterText, FooterLink } from "./style"
import { SocialMenu } from "../socialMenu"
import { colors } from "../../style/constants"

export const Footer = ({ menu, color, ...props }) => {
  const componentProps = {
    menu: !!menu,
  }
  const footerColors = {
    color: menu ? colors.purple : color,
  }
  const mailto = 'mailto:hello@bettazorza.it'
  return (
    <FooterWrapper {...componentProps}>
      <FooterLink {...footerColors} href={mailto}>hello@bettazorza.it</FooterLink>
      <SocialMenu {...footerColors} />
      <FooterText {...footerColors}>©2019 BettaZorza</FooterText>
    </FooterWrapper>
  )
}
