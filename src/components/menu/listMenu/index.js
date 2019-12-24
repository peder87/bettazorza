import React from "react"
import { ListWrapper, MenuItem, MenuLink } from "./style"
import { pageConfigList } from "../../../pages/pageConfig"

// animare la comparsa delle singole label
export const ListMenu = () => {
  return (
    <ListWrapper>
      {pageConfigList
        .filter(page => page.inMenu === true)
        .map(menuItem => (
          <MenuItem key={menuItem.label}>
            <MenuLink to={menuItem.path}>{menuItem.label}</MenuLink>
          </MenuItem>
        ))}
    </ListWrapper>
  )
}
