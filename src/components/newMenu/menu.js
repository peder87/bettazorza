import styled, { css } from 'styled-components'
import { colors } from '../../style/constants'

const menuSpeed = '0.35s'

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
  z-index: 99980;

  & > div {
    background: ${colors.yellow};
    opacity: 0.90;
    border-radius: 50%;
    /* width: ${ props => props.isPortrait ? '200vh' : '200vw'};
    height: ${ props => props.isPortrait ? '200vh' : '200vw'}; */
    width: 250vw; 
    height: 250vw;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    transform: ${props => props.isOpen ? 'scale(1)': 'scale(0)'};
    transition: all 0.3s ease;
    z-index: 9991;
    ${props => props.isOpen && css`
      transition-duration: ${menuSpeed};
    `}
  }
`