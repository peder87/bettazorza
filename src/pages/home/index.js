import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import { PageContainer } from "../../components/pageComponents/style"
import { StuffGrid } from '../../components/grid'
import { works } from '../pageConfig'
import { Thumbnail } from '../../components/thumbnail'
import { navigate } from 'gatsby'

export default () => {
  
  return (
      <PageContainer>
        <StaticQuery
          query={worksPage}
          render={data => <WorkList data={data.allWorksJson} />}
        />
      </PageContainer>
  )
}

const WorkList = ({data}) => {
  const moveTo = (path) => {
    navigate(path)
  }
  console.log(data)
  return (
    <StuffGrid>
      {
        data.nodes.map(w => 
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
    allWorksJson {
      nodes {
        id
        title
        url
        thumbnail
        thumbset
      }
    }
  }
`
