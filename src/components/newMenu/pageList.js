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
    <ListWrapper {...props}>
      {
        pageConfigList
          .filter(p => p.inMenu)
          .map(({label, ...p}) => ({ 
            ...p, label: `${label.charAt(0).toUpperCase()}${label.slice(1)}`
          }))
          .map(p => <MenuItem key={p.label}>
            <a href="#" onClick={e => handleClick(e, p.path)}>{ p.label }</a>
          </MenuItem>)
      }
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: ${props => props.isOpen ? 'opacity .2s ease .2s' : 'opacity .2s ease'};
`