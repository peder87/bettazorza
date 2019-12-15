import React from "react"
import { ListWrapper, MenuItem, MenuLink } from "./style"

const menuList = [
  {
    label: "Home",
    path: "/home",
  },
  {
    label: "Chi sono",
    path: "/aboutMe",
  },
  {
    label: "Cosa faccio",
    path: "/stuff",
  },
  {
    label: "Contatti",
    path: "/contact",
  },
]

// animare la comparsa delle singole label
export const ListMenu = () => {
  return (
    <ListWrapper>
      {menuList.map(menuItem => (
        <MenuItem key={menuItem.label}>
          <MenuLink to={menuItem.path}>{menuItem.label}</MenuLink>
        </MenuItem>
      ))}
    </ListWrapper>
  )
}
