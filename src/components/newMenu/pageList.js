import React from 'react'
import styled from 'styled-components'
import { PageContainer } from '../pageComponents/style'
import { pageConfigList } from '../../pages/pageConfig'
import { navigate } from 'gatsby'
import { MenuItem } from './Item'

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
    </ListWrapper>
  )
}

const ListWrapper = styled(PageContainer)`
  width: 100vw;
  height: 100vh;
  & span {
    color: white;
  }
`