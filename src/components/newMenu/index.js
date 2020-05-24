import React from 'react'
import styled from 'styled-components'
import { Hamburger } from './hamburger' 
import { Menu } from './menu'
import { media } from '../../style/constants'

export const NavMenu = ({isOpen, toggleMenu}) => {
  if(isOpen) {
    document.addEventListener('keydown', e => {
      e.keyCode === 27 && toggleMenu()
    })
  }
  return (
    <div>
      <Wrapper>
        <Hamburger isOpen={isOpen} onClick={toggleMenu}><div></div></Hamburger>
      </Wrapper>
      <Menu isOpen={isOpen}>
        <div>
          <div>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Home</a></li>
            </ul>
          </div>
        </div>
      </Menu>
    </div>
  )
}

const Wrapper = styled.div`
  z-index: 9999;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
  ${media.md`
    flex-direction: row-reverse;
  `}
  ${media.sm`
    flex-direction: row-reverse;
  `}
`