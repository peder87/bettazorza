import React from "react"

import { Instagram } from "styled-icons/fa-brands/Instagram"
import { FacebookF } from "styled-icons/fa-brands/FacebookF"
import { Behance } from "styled-icons/fa-brands/Behance"
import { Dribbble } from "styled-icons/fa-brands/Dribbble"
import { LinkedinIn } from "styled-icons/fa-brands/LinkedinIn"
import { MenuWrapper, IconWrapper, getIconStyled } from "./style"

const icons = [
  { icon: Instagram, url: "https://www.instagram.com/" },
  { icon: FacebookF, url: "https://www.facebook.com/" },
  { icon: Behance, url: "https://www.behance.net/" },
  { icon: Dribbble, url: "https://dribbble.com/" },
  { icon: LinkedinIn, url: "https://www.linkedin.com/feed/" },
]

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
