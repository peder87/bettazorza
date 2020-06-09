import React from "react"
import { PageContainer } from "../../components/pageComponents/style"
import styled from 'styled-components'

const imgs = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
  {id: 11},
  {id: 12},
  {id: 13},
  {id: 14},
  {id: 15},
]

export default () => {
  return (
      <PageContainer>
        <h2>index</h2>
        {
          imgs.map(e => <Box key={e}/>)
        }
      </PageContainer>
  )
}

const Box = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 2em;
  background-color: red;
`