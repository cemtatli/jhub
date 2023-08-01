'use client'

import { Navigation, Autoplay, Scrollbar, A11y, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar';


import Image from 'next/image';

const Slider = () => {
  return (
    <Swiper
      className='h-[400px] w-full bg-slate-100 rounded-lg shrink-0'
      modules={[Navigation, Autoplay, A11y, Scrollbar]}
      slidesPerView={1}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <Image priority={true} quality={'88'} fill className='aspect-square object-cover' src={'/assets/slider/slider-1.jpg'} alt='swipper-slider-photo-1' />
      </SwiperSlide>
      <SwiperSlide>
        <Image priority={true} quality={'88'} fill className='aspect-square object-left-bottom md:object-center object-cover' src={'/assets/slider/slider-2.jpg'} alt='swipper-slider-photo-2' />
      </SwiperSlide>
      <SwiperSlide>
        <Image priority={true} quality={'88'} fill className='aspect-square object-cover object-right md:object-left-top' src={'/assets/slider/slider-3.jpg'} alt='swipper-slider-photo-3' />
      </SwiperSlide>
      <SwiperSlide>
        <Image priority={true} quality={'88'} fill className='aspect-square object-cover' src={'/assets/slider/slider-4.jpg'} alt='swipper-slider-photo-4' />
      </SwiperSlide>
      <SwiperSlide>
        <Image priority={true} quality={'88'} fill className='aspect-square object-cover' src={'/assets/slider/slider-5.jpg'} alt='swipper-slider-photo-4' />
      </SwiperSlide>
    </Swiper>
  );
};

export { Slider }