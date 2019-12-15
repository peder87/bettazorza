import styled from "styled-components"
import { colors } from "../../style/constants"

export const Wrapper = styled.div`
  background-color: ${colors.yellow};
  opacity: 0.85;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  min-height: 100%;
  z-index: 9998;
`

export const FooterWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 2em;
`
