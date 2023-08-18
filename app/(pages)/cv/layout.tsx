'use client'

import Cv from './page'
import { FormProvider } from './components/FormContext'
import { AlertTriangle, Check, CrownIcon, Heart } from 'lucide-react'
import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'

const swiperData = [
  {
    icon: <Check className=" text-green-500" strokeWidth={2} />,
    title: 'Stay One Step Ahead!',
    description: 'Impress employers, create your professional CV.',
    bgColor: 'bg-green-50',
  },
  {
    icon: <Heart className=" text-rose-500" strokeWidth={2} />,
    title: 'Unlock Your Potential!',
    description: 'Discover new opportunities with CV builder.',
    bgColor: 'bg-rose-50',
  },
  {
    icon: <CrownIcon className=" text-blue-500" strokeWidth={2} />,
    title: 'Stand Out from the Crowd!',
    description: 'Create an eye-catching, compelling resume.',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <AlertTriangle className=" text-red-500" strokeWidth={2} />,
    title: 'Your Success, Our Priority!',
    description: 'Build a winning CV for your dream career.',
    bgColor: 'bg-red-50',
  },
]

const CVLayout = () => {
  return (
    <FormProvider>
      <div className="flex h-fit-screen-mobile flex-col gap-12 md:h-fit-screen">
        <nav className="mt-5 flex h-20 items-center justify-center gap-4 rounded-lg border px-5">
          <Swiper
            modules={[Navigation, Autoplay, A11y, Scrollbar]}
            slidesPerView={1}
            autoplay={{ delay: 5000}}
            pagination={{ clickable: true }}>
            {swiperData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className={`flex items-center justify-center gap-4`}>
                  <span
                    className={`flex h-10 w-10 items-center shrink-0 justify-center rounded-full ${slide.bgColor}`}>
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
