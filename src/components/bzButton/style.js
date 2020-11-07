import styled, { css } from "styled-components"
import { colors } from "../../style/constants"
import { darken } from "polished"

export const Button = styled.button`
  border: 0;
  line-height: 1.5;
  white-space: nowrap;
  border-radius: 0.25rem;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  padding-left: 3rem;
  padding-right: 3rem;

  font-size: 1.8rem;
  border: 2px solid;
  border-radius: 1.8rem;
  color: ${props => props.second_color || colors.white};
  background-color: ${props => props.first || colors.purple};
  transition: background-color 0.5s ease-out;
  &:hover {
    background-color: ${props =>
      darken(0.15, props.first_color || colors.purple)};
  }
  &:focus {
    outline: none;
  }
`
