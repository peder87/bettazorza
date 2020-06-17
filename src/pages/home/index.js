import React from "react"
import { PageContainer } from "../../components/pageComponents/style"
import styled from 'styled-components'
import { StuffGrid } from '../../components/grid'
import { works } from '../pageConfig'
import { Thumbnail } from '../../components/thumbnail'

export default () => {
  return (
      <PageContainer>
        <StuffGrid>
        {
          works.map(w => <Thumbnail img={w.thumbnail} title={w.title} />)
        }
        </StuffGrid>
      </PageContainer>
  )
}