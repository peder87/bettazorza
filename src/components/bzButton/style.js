import styled, { css } from "styled-components"
import { colors } from "../../style/constants"
import { darken } from "polished"

export const Button = styled.button`
  border: 0;
  line-height: 2;
  white-space: nowrap;
  border-radius: 0.25rem;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  padding-left: 3rem;
  padding-right: 3rem;

  font-size: 1.6rem;
  border: 2px solid;
  border-radius: 1.8rem;
  color: ${props => props.second || colors.white};
  background-color: ${props => props.first || colors.purple};
  /* transition: color 250ms ease-out; */

  &:hover {
    cursor: pointer;
    background-color: ${props => props.second || colors.white};
    color: ${props => props.first || colors.purple};
    border-color: ${props => props.second || colors.white};
  }
  &:focus {
    outline: none;
  }
`

export const BzLinkStyle = styled.a`
  background-color: transparent;
  border: 1px solid;
  color: ${props => props.color || colors.purple};
  border-color: ${props => props.color || colors.purple};
  border-radius: 8px;
`
