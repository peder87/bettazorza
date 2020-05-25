import { colors } from "../style/constants"

export const pageConfigList = [
  {
    path: "/",
    label: "home",
    title: "",
    bgcolor: colors.purple,
    color: colors.white,
    inMenu: true,
  },
  {
    path: "/about",
    label: "chi sono",
    // title: "chi sono",
    bgcolor: colors.cyan,
    color: colors.white,
    inMenu: true,
  },
  {
    path: "/work",
    label: "cosa faccio",
    title: "cosa faccio",
    bgcolor: colors.white,
    color: colors.darkGray,
    inMenu: true,
  },
  {
    path: "/pmi",
    label: "",
    title: "",
    bgcolor: colors.red,
    color: colors.white,
    inMenu: false,
  },
  {
    path: "/contact",
    label: "contatti",
    title: "contatti",
    bgcolor: colors.darkGray,
    color: colors.white,
    inMenu: true,
  },
  {
    path: "/type",
    label: "contatti",
    title: "contatti",
    bgcolor: colors.darkGray,
    color: colors.white,
    inMenu: false,
  },
]

export const pageConfig = () => {
  const obj = pageConfigList.reduce(
    (acc, elem) => ({
      ...acc,
      [elem.path]: elem,
    }),
    {}
  )
  const path = window.location.pathname
  return obj[path] ? obj[path] : obj['/']
}
