'use client'

import Cv from './page'
import { FormProvider } from './components/FormContext'

import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'
import { swiperData } from './mocks/SwiperData'



const CVLayout = () => {
  return (
    <FormProvider>
      <div className="flex h-fit-screen-mobile flex-col gap-12 md:h-fit-screen">
        <nav className="mt-5 flex h-24 items-center justify-center gap-4 rounded-lg border md:h-20">
          <Swiper
            modules={[Navigation, Autoplay, A11y, Scrollbar]}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop={true}
            pagination={{ clickable: true }}>
            {swiperData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className={`flex items-center gap-4 p-2 md:justify-center`}>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${slide.bgColor}`}>
                    {slide.icon}
                  </span>
                  <div>
                    <h4
                      className={`text-lg ${
                        slide.title.length > 20 ? 'truncate' : ''
                      } font-semibold`}>
                      {slide.title}
                    </h4>
                    <p className={`text-sm ${slide.description.length > 50 ? 'truncate' : ''}`}>
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </nav>
        <Cv />
      </div>
    </FormProvider>
  )
}

export default CVLayout
