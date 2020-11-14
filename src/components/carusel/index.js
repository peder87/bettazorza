import React from "react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { CaruselWrapper } from "./style"
import { ServiceItem } from "../serviceItem"

import "swiper/swiper.scss"
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export const Carusel = ({ list }) => {
  return (
    <CaruselWrapper>
      <Swiper
        spaceBetween={50}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
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
