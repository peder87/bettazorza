import React from 'react'
import styled from 'styled-components'
import { Hamburger } from './hamburger' 
import { Menu } from './menu'

export const NavMenu = ({isOpen, toggleMenu}) => {
  if(isOpen) {
    document.addEventListener('keydown', e => {
      e.keyCode === 27 && toggleMenu()
    })
  }
  return (
    <NavWrapper>
      <Hamburger isOpen={isOpen} onClick={toggleMenu}><div></div></Hamburger>
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
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

`

