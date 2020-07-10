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
  {
    path: "/project/auser",
    bgcolor: colors.white,
    color: colors.darkGray,
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

export const works = [
  {
    id: 1,
    title: 'sacra famiglia',
    caption: 'loremipsum',
    path: '/project/sacraFamiglia',
    thumbnail: 'https://picsum.photos/id/1/600/400',
  },
  {
    id: 2,
    title: 'casa del formaggio',
    caption: 'loremipsum',
    path: '/project/casaDelFormaggio',
    thumbnail: 'https://picsum.photos/id/2/600/400',
  },
  {
    id: 3,
    title: 'uno più uno',
    caption: 'loremipsum',
    path: '/project/unoPiuUno',
    thumbnail: 'https://picsum.photos/id/3/600/400',
  },
  {
    id: 4,
    title: 'tanta robba',
    caption: 'loremipsum',
    path: '/project/tantaRobba',
    thumbnail: 'https://picsum.photos/id/4/600/400',
  },
  {
    id: 5,
    title: 'scaravonati mobili',
    caption: 'loremipsum',
    path: '/project/sacaravonatiMobili',
    thumbnail: 'https://picsum.photos/id/5/600/400',
  },
  {
    id: 6,
    title: 'Auser',
    caption: 'loremipsum',
    path: '/project/auser',
    thumbnail: 'https://picsum.photos/id/6/600/400',
  },
]