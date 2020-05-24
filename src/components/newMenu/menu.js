import styled, { css } from 'styled-components'
import { colors } from '../../style/constants'

const menuSpeed = '0.75s'

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    background: ${colors.yellow};
    border-radius: 50%;
    width: 200vw;
    height: 200vw;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    transform: ${props => props.isOpen ? 'scale(1)': 'scale(0)'};
    transition: all 0.4s ease;
    ${props => props.isOpen && css`
      transition-duration: ${menuSpeed};
    ` }
  }

  & > div > div {
    text-align: center;
    max-width: 90vw;
    max-height: 100vh;
    opacity: ${props => props.isOpen ? 1 : 0};
    transition: ${props => props.isOpen ? 'opacity 0.4s ease 0.4s' : 'opacity 0.4s ease' };
  }

  & > div > div > ul > li {
    list-style: none;
    color: #fff;
    font-size: 1.5rem;
    padding: 1rem;
  }

  & > div > div > ul > li > a {
    color: inherit;
    text-decoration: none;
    transition: color 0.4s ease;
  }
`