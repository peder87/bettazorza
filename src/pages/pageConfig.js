import { colors } from "../style/constants"

export const pageConfigList = [
  {
    path: "/",
    label: "home", // home
    bgcolor: colors.purple,
    color: colors.white,
    inMenu: true,
  },
  {
    path: "/about",
    label: "chi sono",
    bgcolor: colors.cyan,
    color: colors.white,
    inMenu: true,
  },
  {
    path: "/work",
    label: "cosa faccio",
    bgcolor: colors.white,
    color: colors.darkGray,
    inMenu: true,
  },
  {
    path: "/project",
    label: "cosa faccio",
    bgcolor: colors.white,
    color: colors.darkGray,
    inMenu: false,
  },
  {
    path: "/pmi",
    label: "",
    bgcolor: colors.red,
    color: colors.white,
    inMenu: false,
  },
  {
    path: "/contact",
    label: "contatti",
    bgcolor: colors.darkGray,
    color: colors.white,
    inMenu: true,
  },
]

export const pageConfig = path => {
  const obj = pageConfigList.reduce(
    (acc, elem) => ({
      ...acc,
      [elem.path]: { ...elem },
    }),
    {}
  )
  if (obj[path]) return obj[path]
  return ""
}
