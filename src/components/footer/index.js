import React from "react"
import { FooterWrapper, FooterText } from "./style"
import { SocialMenu } from "../socialMenu"

export const Footer = ({ menu, ...props }) => {
  const componentProps = {
    menu: !!menu,
  }
  return (
    <FooterWrapper {...componentProps}>
      <FooterText>testo 1</FooterText>
      <SocialMenu />
      <FooterText>testo 2</FooterText>
    </FooterWrapper>
  )
}
