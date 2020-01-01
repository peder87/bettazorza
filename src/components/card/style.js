import styled from "styled-components"
import { colors } from "../../style/constants"

export const CardContainer = styled.div`
  padding: 2em;
  background-color: ${colors.cardBg};
  color: ${colors.purple};
  width: 100%;
`

export const CardIcon = styled.div`
  height: 4.5em;
  width: 100%;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 1em;
`

export const CardTitle = styled.h4`
  text-transform: uppercase;
  font-weight: 600;
`

export const CardCaption = styled.p`
  font-weight: 500;
`
