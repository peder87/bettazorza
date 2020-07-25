import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import { StuffGrid } from '../../components/grid'
import { Thumbnail } from '../../components/thumbnail'
import { navigate } from 'gatsby'

export default (props) => {
  return (
        <StaticQuery
          query={worksPage}
          render={data => <WorkList data={data.allProjectsJson} />}
        />
  )
}

const WorkList = ({ data }) => {
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

const worksPage = graphql`
  query works {
    allProjectsJson {
      nodes {
        id
        title
        url
        order
        thumbnail
        thumbset
      }
    }
  }
`
