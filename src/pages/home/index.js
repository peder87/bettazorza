import React from "react"
import { StuffGrid } from '../../components/grid'
import { Thumbnail } from '../../components/thumbnail'
import { navigate } from 'gatsby'

export default ({ data }) => {
  const moveTo = (path) => {
    navigate(path)
  }
  return (
    <StuffGrid>
      {
        data.nodes
        .sort((x,y) => x.order - y.order)
        .map(w => 
        <Thumbnail 
          key={w.id}
          title={w.title}
          img={w.thumbnail}
          path={w.url}
          srcset={w.thumbset}
          callback={moveTo}
        />)
      }
    </StuffGrid>
  )
}
