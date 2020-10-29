import React from "react"
import { groupByExtension } from "./utils"
import { isProduction } from "../../utils"

export const Image = props => {
  const { data, list } = groupByExtension(props.srcset)
  const prefix = isProduction ? "https://peder87.github.io/bettazorza/" : ""
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
      <img src={`${prefix}${props.src}`} alt={props.alt} />
    </picture>
  )
}
