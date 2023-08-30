'use client'

import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SliderData } from './data'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'

const Slider = () => {
  return (
    <Swiper
      className="mt-10 h-96 w-full rounded-lg py-24 lg:pb-2"
      modules={[Navigation, Autoplay, A11y, Scrollbar]}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}>
      {SliderData.map((data, index) => (
        <SwiperSlide key={index}>
          <Image
            loading="lazy"
            fill
            className="aspect-video object-cover"
            src={data.src}
            alt={data.alt}
            sizes=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export { Slider }
