import styled from "styled-components"
import { Menu } from "styled-icons/feather/Menu"
import { Close } from "styled-icons/evil/Close"
import { colors } from "../../../style/constants"

const iconSize = `
  width: 2em;
  height: 2em
`

export const MenuClosed = styled(Menu)`
  ${iconSize}
  color: ${props => (props.dark ? colors.darkGray : colors.white)};
  &:hover {
    color: ${props => (props.dark ? colors.darkGray : colors.yellow)};
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
  color: ${colors.purple};
  background-image: url('./logo.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  &:hover {
    cursor: pointer;
  }
`
