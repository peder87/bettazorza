import styled, { css } from 'styled-components'
import { colors } from '../../style/constants'

export const Hamburger = styled.div`
  z-index: 99990;
  width: 60px;
  height: 60px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  > div {
    position: relative;
    flex: none;
    width: 100%;
    height: 2px;
    background-color: ${props => props.isOpen ? colors.purple: colors.yellow };
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    ${props => props.isOpen && css`
      transform: rotate(135deg);
    `}
  }

  &:hover > div {
    ${props => props.isOpen && css`
      transform: rotate(225deg);
    `}
  }

  > div::before, div::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -10px;
    width: 100%;
    height: 2px;
    background: inherit;
    ${props => props.isOpen && css`
      top: 0 !important;
      transform: rotate(90deg);
    `}
  }

  > div::after {
    top: 10px;
  }
`