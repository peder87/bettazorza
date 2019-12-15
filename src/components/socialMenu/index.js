import React from "react"
import styled from "styled-components"
import { colors } from "../../style/constants"
import { Instagram } from "styled-icons/fa-brands/Instagram"
import { FacebookF } from "styled-icons/fa-brands/FacebookF"
import { Behance } from "styled-icons/fa-brands/Behance"
import { Dribbble } from "styled-icons/fa-brands/Dribbble"
import { LinkedinIn } from "styled-icons/fa-brands/LinkedinIn"

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5em;
  margin: 0 auto;
  border-right: ${props => (props.last ? "none" : `1px solid`)};
  border-right-color: ${props =>
    props.purple ? `${colors.purple}` : `${colors.white}`};
`

const icons = [
  { icon: Instagram, url: "https://www.instagram.com/" },
  { icon: FacebookF, url: "https://www.facebook.com/" },
  { icon: Behance, url: "https://www.behance.net/" },
  { icon: Dribbble, url: "https://dribbble.com/" },
  { icon: LinkedinIn, url: "https://www.linkedin.com/feed/" },
]

const getIconStyled = icon => {
  return styled(icon)`
    color: ${props => (props.purple ? colors.purple : colors.white)};
    width: 1.6em;
    height: 1.6em;
    margin: 0 auto;
    opacity: 0.8;
    transition: opacity 0.25s linear;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  `
}

export const SocialMenu = props => {
  const openLink = url => {
    console.log(url)
  }

  return (
    <MenuWrapper>
      {icons.map(({ icon, url }, index) => {
        const isLast = icons.length === index + 1
        const MyIcon = getIconStyled(icon)
        return (
          <IconWrapper
            purple={props.purple}
            key={index}
            last={isLast}
            onClick={() => openLink(url)}
          >
            <MyIcon purple={props.purple} />
          </IconWrapper>
        )
      })}
    </MenuWrapper>
  )
}
