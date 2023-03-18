'use client'

import React from 'react'
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation,EffectFade} from 'swiper';
import { hero, hero1,hero2,hero3,hero4 } from '../public/assets';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='flex relative max-h-[90vh] w-full z-0'>
    <Swiper
    modules={[Navigation,EffectFade]}
    navigation
    effect='slide'
    speed={800}
     slidesPerView={1}
    loop
    >
        <SwiperSlide>
        <Image src={hero} alt="logo" priority className='object-fill h-full w-full '/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={hero1} alt="logo" priority className='object-fill h-full w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={hero2} alt="logo" priority className='object-cover h-full w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={hero3} alt="logo" priority className='object-cover h-full w-full'/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={hero4} alt="logo" priority className='object-cover h-full w-full'/>
        </SwiperSlide>
    </Swiper>
   
</div>
  )
}

export default Hero