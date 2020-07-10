import React from 'react'
import { StuffGrid, Item } from './index'
import { PageTitle, CopyWrapper, PageCopy } from '../typography'


export const WorkGrid = ({ data }) => {
  console.log('workdata',data)
  return (
    <div>
      <PageTitle>{data.title}</PageTitle>
      <CopyWrapper>
        <PageCopy>{data.caption}</PageCopy>
        { 
          data.tags.length > 0 && 
          data.tags.map((tag, i) => {
            const isLast = i === data.tags.length
            return !isLast ? <span key={tag}>{tag} - </span> : <span key={tag}>{tag}</span>
          })
        }
      </CopyWrapper>
      <StuffGrid>
        {
          data.imgs.map(img => <Item key={img.alt} full={img.fullWidth}>
            <img src={img.src} alt={img.alt} />
          </Item>)
        }
      </StuffGrid>
    </div>
  )
}