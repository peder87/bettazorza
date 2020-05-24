import React from 'react'
import styled from 'styled-components'
import { Hamburger } from './hamburger' 
import { Menu } from './menu'
import { media } from '../../style/constants'
import { PageList } from './pageList'
import { PageCenterContent, PageContainer } from '../pageComponents/style'
import { Footer } from '../footer'

export const NavMenu = ({isOpen, toggleMenu}) => {
  if(isOpen) {
    document.addEventListener('keydown', e => {
      e.keyCode === 27 && toggleMenu()
    })
  }
  return (
    <div>
      <HamburgerWrapper>
        <Hamburger isOpen={isOpen} onClick={toggleMenu}><div></div></Hamburger>
      </HamburgerWrapper>
      <Menu isOpen={isOpen}>
        <div> {/* box giallo */}
          <ResetContainer>
            <MenuContainer>
              <PageList />
              <Footer menu/>
            </MenuContainer>
          </ResetContainer>
        </div>
      </Menu>
    </div>
  )
}

const HamburgerWrapper = styled.div`
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

const ResetContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

const MenuContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2vh;
  ${media.sm`
    justify-content: center;
  `}
`