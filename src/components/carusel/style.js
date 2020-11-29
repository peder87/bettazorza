import styled from "styled-components"
import { colors, paddingBottom } from "../../style/constants"

export const CaruselWrapper = styled.div`
  ${paddingBottom};
  & .swiper-button-next,
  & .swiper-button-prev {
    color: ${colors.purple};
    cursor: pointer;
    top: 40px;
  }
  & .swiper-pagination {
    bottom: 0px;
    & .swiper-pagination-bullet-active {
      background-color: ${colors.cyan};
    }
  }
`
