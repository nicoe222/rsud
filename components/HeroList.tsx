"use client";
import { Hero } from "@/typings";
import React from "react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

type Props = {
  posts: Hero[];
};

function HeroList({ posts }: Props) {
  return (
    <div className="flex relative max-h-[90vh] w-full z-0">
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect="slide"
        speed={800}
        slidesPerView={1}
        loop
      >
        {posts.map((hero) => (
          <SwiperSlide key={hero._id}>
            <Image
              src={urlFor(hero.image).url()}
              alt="logo"
              priority
              width={2000}
              height={2000}
              className="object-fill h-full w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroList;
