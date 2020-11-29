import { useEffect, useState } from "react"
import { media } from "../style/constants"

export const useMedia = (queryList, values, defaultValue) => {
  const mediaQueryList = queryList.map(q => window.matchMedia(q))

  const getValue = () => {
    const index = mediaQueryList.findIndex(mql => mql.matches)
    return typeof values[index] !== "undefined" ? values[index] : defaultValue
  }

  const [value, setValue] = useState(getValue)

  useEffect(() => {
    const handler = () => setValue(getValue)
    mediaQueryList.forEach(mql => mql.addListener(handler))
    return () => mediaQueryList.forEach(mql => mql.removeListener(handler))
  }, [])

  return value
}
