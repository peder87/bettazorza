import React from "react"
import SwiperCore, { Pagination, Scrollbar, A11y, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { CaruselWrapper } from "./style"
import { ServiceItem } from "../serviceItem"

import "swiper/swiper.scss"
import "swiper/components/pagination/pagination.scss"
SwiperCore.use([Pagination, Scrollbar, A11y, Autoplay])

export const Carusel = ({ list }) => {
  return (
    <CaruselWrapper>
      <Swiper slidesPerView={3} pagination autoplay>
        {list.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <ServiceItem {...item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </CaruselWrapper>
  )
}
