import React from "react"

const getExtension = filepath => {
  const splitted = filepath.split(".")
  const extesion = splitted[splitted.length - 1]
  return extesion
}

export const Video = props => {
  return (
    <video width="400" controls>
      {props.srcset.map(item => {
        const ext = getExtension(item)
        return <source src={item} key={item} type={`video/${ext}`} />
      })}
    </video>
  )
}
