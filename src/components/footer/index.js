import React from "react"
import { FooterWrapper, FooterLink } from "./style"
import { SocialMenu } from "../socialMenu"

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
