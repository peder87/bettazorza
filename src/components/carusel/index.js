import React from "react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { CaruselWrapper } from "./style"
import { ServiceItem } from "../serviceItem"

import "swiper/swiper.scss"
import "swiper/components/pagination/pagination.scss"
SwiperCore.use([Pagination, Scrollbar, A11y])

export const Carusel = ({ list }) => {
  return (
    <CaruselWrapper>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        pagination
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
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
