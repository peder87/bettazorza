import React from "react"
import { StuffGrid } from '../../components/grid'
import { Thumbnail } from '../../components/thumbnail'
import { navigate } from 'gatsby'
import idx from 'idx'

export default (props) => {
  const projects = idx(props.pages, _ => _.projects.edges)  
  if(!projects)
    return null
  return <ProjectList projects={projects} />
}

const ProjectList = (props) => {
  const moveTo = (path) => {
    navigate(path)
  }
  return (
  <StuffGrid>
    {
      props.projects
        .sort((x,y) => x.project.order - y.project.order)
        .map(({project}) => 
          <Thumbnail 
            key={project.id}
            title={project.title}
            img={project.thumbnail}
            path={project.url}
            srcset={project.thumbset}
            callback={moveTo}
          />
        )
      }
    </StuffGrid>
  )
}