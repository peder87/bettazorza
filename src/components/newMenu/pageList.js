import React from 'react'
import styled from 'styled-components'
import { MenuItem } from './Item'
import { Link } from 'gatsby'

export const PageList = ({src, ...props}) => {
  return (
    <ListWrapper {...props}>
      {
        src.map(({label, ...p}) => ({ 
            ...p, label: `${label.charAt(0).toUpperCase()}${label.slice(1)}`
          }))
          .map(p => <MenuItem key={p.id}>
            <Link to={p.path}>{ p.label }</Link>
          </MenuItem>)
      }
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: ${props => props.isOpen ? 'opacity .2s ease .2s' : 'opacity .2s ease'};
`