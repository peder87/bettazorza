import React from "react"
import { groupByExtension } from "./utils"

export const Image = props => {
  const { data, list } = groupByExtension(props.srcset)
  return (
    <picture>
      {list.map(ext => {
        return (
          <source
            key={ext}
            srcSet={data[ext].join(", ")}
            type={`image/${ext}`}
          />
        )
      })}
      <img src={props.src} alt={props.alt} />
    </picture>
  )
}
