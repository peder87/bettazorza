import React from "react"
import { CopyWrapper, PageCopy } from "../../components/typography"

// const dummy =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque fringilla est, ac porttitor mi."

// const cards = [
//   {
//     img: Brand,
//     title: "studio marchio",
//     caption: dummy,
//   },
//   {
//     img: Social,
//     title: "social",
//     caption: dummy,
//   },
//   {
//     img: Ui,
//     title: "ui",
//     caption: dummy,
//   },
//   {
//     img: Brochure,
//     title: "brochure",
//     caption: dummy,
//   },
//   {
//     img: Packaging,
//     title: "packaging",
//     caption: dummy,
//   },
//   {
//     img: Illustration,
//     title: "illustration",
//     caption: dummy,
//   },
// ]

export default () => {
  return (
      <CopyWrapper>
        <PageCopy>
          Ogni progetto che realizzo è personalizzato. Penso e realizzo le
          giuste strategie e la giusta immagine grafica per ogni brand.
        </PageCopy>
        {/* <StuffGrid>
          {cards.map(cardProps => (
            <Card {...cardProps} key={cardProps.title} />
          ))}
        </StuffGrid> */}
      </CopyWrapper>
  )
}