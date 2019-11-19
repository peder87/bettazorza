import styled from "styled-components"
import { media, colors } from "../../style/constants"

export const Wrapper = styled.div`
  background-color: ${colors.yellow};
  opacity: 0.8;
  text-align: left;
  ${media.md`
    text-align: center;
  `}
`
