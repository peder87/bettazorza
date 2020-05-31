import React from "react"
import { PageContainer } from "../../components/pageComponents/style"
import { PageCopy } from "../../components/typography"
import Layout from "../../components/layout"
import { AboutGrid } from "./style"
import faker from 'faker'
import _times from 'lodash.times'

const getObj = () => ({
  id: faker.random.uuid(),
  img: faker.image.imageUrl(),
})


export default () => {
  const imgs = _times(9,getObj)
  console.log("dpr", window.devicePixelRatio)
  console.log("imgs", imgs)
  return (
      <PageContainer>
        {
          imgs.map((e) => <div key={e.id}>
            <img src={e.img} />
          </div>)
        }
      </PageContainer>
  )
}
