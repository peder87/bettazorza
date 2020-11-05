import styled, { css } from "styled-components"
import { colors } from "../../style/constants"

export const Button = styled.div`
  border: 0;
  line-height: 1.2;
  white-space: nowrap;
  border-radius: 0.25rem;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;
  text-align: center;

  border: 2px solid;
  border-color: ${colors.purple};
  color: ${colors.purple};
  background-color: transparent;

  ${props =>
    props.primary &&
    css`
      border: 1px solid;
      border-color: ${colors.yellow};
      color: ${colors.yellow};
      background-color: transparent;
    `}
`
