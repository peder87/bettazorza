import React from "react"
import { ListWrapper, MenuItem, MyLink } from "./style"
import { navigate } from "gatsby"
import { pageConfigList } from "../../../pages/pageConfig"

// animare la comparsa delle singole label
export const ListMenu = props => {
  const test = (e, path) => {
    e.preventDefault()
    if (window.location.pathname === path) {
      props.callback()
      return
    }
    navigate(path)
  }
  return (
    <ListWrapper>
      {pageConfigList
        .filter(page => page.inMenu === true)
        .map(menuItem => (
          <MenuItem key={menuItem.label}>
            <MyLink href="#" onClick={e => test(e, menuItem.path)}>
              {menuItem.label}
            </MyLink>
          </MenuItem>
        ))}
    </ListWrapper>
  )
}
