import React from "react"
import { StuffGrid } from '../../components/grid'
import { Thumbnail } from '../../components/thumbnail'
import { navigate } from 'gatsby'
import idx from 'idx'

export default (props) => {
  const projects = idx(props.pages, _ => _.projects.edges)  
  const order = idx(props.pages, _ => _.order.edges)
  
  if(!projects || !order)
    return null
  const flatOrder = order.map(e => e.node.workId)
  const src = projects.map(_ => _.project).reduce((acc,elem) => {
    return {
      ...acc,
      [elem['id']]: elem
    }
  }, {})
  return <ProjectList projects={projects} list={flatOrder} src={src} />
}

const ProjectList = (props) => {
  const moveTo = (path) => {
    navigate(path)
  }
  return (
    <StuffGrid isProject={props.projects.length < 10}>
      {
        props.list.map(p => {
          const project = props.src[p]
          return (
            <Thumbnail 
              key={project.id}
              title={project.title}
              img={project.thumbnail}
              path={project.url}
              srcset={project.thumbset}
              callback={moveTo}
            />
          )
        })
      }
    </StuffGrid>
  )
}