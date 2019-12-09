import styled from "styled-components"
import { colors, media } from "../../../style/constants"
import { Menu } from "styled-icons/feather/Menu"
import { Close } from "styled-icons/evil/Close"
import ZLogo from "./logo.svg"

const iconSize = `
  width: 2em;
  height: 2em
`

export const MenuClosed = styled(Menu)`
  ${iconSize}
  color: ${colors.white};
  &:hover {
    color: ${colors.yellow};
    cursor: pointer;
  }
  &:touch {
    background: none;
  }
`

export const MenuOpen = styled(Close)`
  ${iconSize}
  color: ${colors.purple};
  &:hover {
    cursor: pointer;
  }
  &:touch {
    background: none;
  }
`

export const LogoIcon = styled.div`
  ${iconSize}
  background-image: url('./logo.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`
