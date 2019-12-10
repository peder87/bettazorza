import React from "react"
import styled from "styled-components"
import { colors } from "../../style/constants"
import { Instagram } from "styled-icons/fa-brands/Instagram"
import { FacebookF } from "styled-icons/fa-brands/FacebookF"
import { Behance } from "styled-icons/fa-brands/Behance"
import { Dribbble } from "styled-icons/fa-brands/Dribbble"
import { LinkedinIn } from "styled-icons/fa-brands/LinkedinIn"
// import { opacify } from "polished"

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
  width: 6.5em;
  height: 2.5em;
  margin: 0 auto;
  border-right: ${props => (props.last ? "none" : `1px solid ${colors.white}`)};
  &:hover {
    color: red;
  }
`

const icons = [Instagram, FacebookF, Behance, Dribbble, LinkedinIn]

const getIconStyled = icon => {
  return styled(icon)`
    color: ${colors.white};
    width: 1.4em;
    height: 1.4em;
    margin: 0 auto;
    opacity: 0.8;
    transition: opacity 0.25s linear;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  `
}

export const SocialMenu = () => {
  return (
    <MenuWrapper>
      {icons.map((icon, index) => {
        const StyledIcon = getIconStyled(icon)
        const isLast = icons.length === index + 1
        const MyIcon = getIconStyled(icon)
        return (
          <IconWrapper key={index} last={isLast}>
            <MyIcon />
          </IconWrapper>
        )
      })}
    </MenuWrapper>
  )
}
