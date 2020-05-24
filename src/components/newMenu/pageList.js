import React from 'react'
import styled from 'styled-components'
import { PageContainer } from '../pageComponents/style'
import { pageConfigList } from '../../pages/pageConfig'
import { navigate } from 'gatsby'
import { MenuItem } from './Item'
import { Footer } from '../footer'
export const PageList = (props) => {
  const handleClick = (e, path) => {
    e.preventDefault()
    if(window.location.pathname === path) {
      props.callback()
      return
    }
    navigate(path)
  }
  return (
    <ListWrapper>
      {
        pageConfigList
          .filter(p => p.inMenu)
          .map(p => <MenuItem key={p.label}>
            <a href="#" onClick={e => handleClick(e, p.path)}>{p.label}</a>
          </MenuItem>)
      }
      {/* <Footer menu /> */}
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  /* width: 100vw; */
  /* background:red; */
  height: auto;
  & span {
    color: white;
  }
`