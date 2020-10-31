export const getDictionaryById = (src, id) =>
  src.reduce((acc, { project }) => {
    return {
      ...acc,
      ...(project[id] ? { [project[id]]: project } : {}),
    }
  }, {})

export const orderWorks = (src, order) => {
  return order.map(id => src[id])
}

export const cleanOrder = src => src.map(({ node }) => node.workId)
