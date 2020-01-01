import styled from "styled-components"
import { colors, media } from "../../style/constants"

export const CardContainer = styled.div`
  padding: 2em;
  height: 20em;
  background-color: ${colors.cardBg};
  color: ${colors.purple};
  width: 100%;
`

export const CardIcon = styled.div`
  height: 4.5em;
  ${media.sm`
    height: 3.5em;
  `}
  width: 100%;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 1em;
`

export const CardTitle = styled.h4`
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 0.25em;
  ${media.md`
    width: 80%;
  `}
`

export const CardCaption = styled.p`
  font-weight: 400;
  ${media.md`
    width: 80%;
  `}
`
