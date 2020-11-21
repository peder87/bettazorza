import React from "react"
import { FooterWrapper, FooterText, FooterLink } from "./style"
import { SocialMenu } from "../socialMenu"
import { colors } from "../../style/constants"

export const Footer = ({ color, ...props }) => {
  const footerColors = {
    color: color,
  }
  const mailto = "mailto:hello@bettazorza.it"
  return (
    <FooterWrapper>
      {/* <div> */}
      <FooterLink {...footerColors} href={mailto}>
        hello@bettazorza.it
      </FooterLink>
      {/* <FooterText {...footerColors}>
          &copy;{new Date().getFullYear()} - Betta Zorza Design
        </FooterText> */}
      {/* </div> */}
      <SocialMenu {...footerColors} />
    </FooterWrapper>
  )
}
