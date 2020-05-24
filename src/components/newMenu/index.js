import React from 'react'
import styled from 'styled-components'
import { Hamburger } from './hamburger' 

export const NavMenu = ({isOpen, toggleMenu}) => {
  return (
    <NavWrapper isOpen={isOpen}>
      <input type="checkbox" className="toggler" checked={isOpen} onChange={toggleMenu} />
      <Hamburger isOpen={isOpen}><div></div></Hamburger>
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

