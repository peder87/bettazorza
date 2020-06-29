import React from "react"
import { PageContainer } from "../../components/pageComponents/style"
import { StuffGrid } from '../../components/grid'
import { works } from '../pageConfig'
import { Thumbnail } from '../../components/thumbnail'
import { navigate } from 'gatsby'

export default () => {
  const moveTo = (path) => {
    console.log('click', path)
    navigate(path)
  }
  return (
      <PageContainer>
        <StuffGrid>
        {
        works.map(w => <Thumbnail
          key={w.path}
          {...w}
          img={w.thumbnail}
          title={w.title}
          callback={moveTo}
        />)
        }
        </StuffGrid>
      </PageContainer>
  )
}