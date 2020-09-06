import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/layout'
import {StuffGrid} from '../components/grid'
import {Card} from '../components/card'
import SEO from '../components/seo'
export default (props) => {
  
  return (
    <StaticQuery 
      query={query}
      render={({allWorksJson}) => {
        const style = {
          bgcolor: 'white',
          color: 'darkGray'
        }
        return (
          <Layout pageConf={style}>
            <SEO title="cosa faccio" meta={[{
              name: 'cosa faccio',
              content: allWorksJson.nodes.map(c => c.title.toLowerCase()).join(', '), 
            }]}/>
            <StuffGrid>
              {
                allWorksJson.nodes.map((card) => <Card key={card.id} {...card}/>)
              }
            </StuffGrid>
          </Layout>)
      }}
    />
  )
}

const query = graphql`
  query {
    allWorksJson {
      nodes {
        caption
        img
        srcset
        title
        id
      }
    }
  }
`