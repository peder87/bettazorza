import React from "react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { CaruselWrapper } from "./style"
import { ServiceItem } from "../serviceItem"

import "swiper/swiper.scss"
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export const Carusel = props => {
  return (
    <CaruselWrapper>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {props.list.map(item => (
          <SwiperSlide key={item.id}>
            <ServiceItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CaruselWrapper>
  )
}
