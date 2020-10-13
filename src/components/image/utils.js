export const groupByExtension = arr => {
  const getExtension = item => {
    const s = item.split(" ")[0].split(".")
    return s[s.length - 1]
  }
  const list = [...new Set(arr.map(getExtension))]
  const data = arr.reduce((acc, elem, index) => {
    const currentExt = getExtension(elem)
    return {
      ...acc,
      [currentExt]: acc[currentExt] ? [...acc[currentExt], elem] : [elem],
    }
  }, {})
  return {
    list,
    data,
  }
}
