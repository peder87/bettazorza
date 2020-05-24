import React from 'react'
import styled from 'styled-components'
import { Hamburger } from './hamburger' 
import { Menu } from './menu'

export const NavMenu = ({isOpen, toggleMenu}) => {
  return (
    <NavWrapper isOpen={isOpen}>
      <input type="checkbox" className="toggler" checked={isOpen} onChange={toggleMenu} />
      <Hamburger isOpen={isOpen}><div></div></Hamburger>
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

  > .toggler {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    cursor: pointer;
    width: 50px;
    height: 50px;
    opacity: 0;
  }
`

