import styled from "styled-components"
import { media } from "../../style/constants"

export const FooterWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.sm`
    flex-direction: column;
    display: ${props => (props.menu ? "none" : "flex")};
  `}
  width: 100%;
  height: 60px;
  background: plum;
  bottom: 0px;
`

export const FooterText = styled.span`
  font-size: 1.125rem;
  color: ${props => props.color};
  ${media.sm`
    padding-top: 2em;
    padding-bottom: 2em;
  `};
`
