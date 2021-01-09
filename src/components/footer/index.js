import React from "react"
import { FooterWrapper, FooterText } from "./style"
import { SocialMenu } from "../socialMenu"

export const Footer = ({ color, ...props }) => {
  const footerColors = {
    color: color,
  }
  // const mail = "hello@bettazorza.com"
  // const mailto = `mailto:${mail}`
  return (
    <FooterWrapper>
      {/* <FooterLink {...footerColors} href={mailto}>
        hello@bettazorza.com  
      </FooterLink> */}
      <SocialMenu {...footerColors} />
      <FooterText>
        {/* &copy;{new Date().getFullYear()} - <a href={mailto}>{mail}</a> - p.iva
        01720870193 -  */}
        crafted with &#9829; by{" "}
        <a href="https://twitter.com/peder87" target="_blank" rel="noreferrer">
          @peder87
        </a>
      </FooterText>
    </FooterWrapper>
  )
}
