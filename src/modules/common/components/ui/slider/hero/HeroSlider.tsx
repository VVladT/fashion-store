"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  const items = Array.from({ length: 5 }).map((_, i) => (
    <SwiperSlide key={i} className="relative">
      <div className="relative w-full h-full">
        <Image
          src={`/images/slide-${i + 1}.webp`}
          alt={`Slider ${i + 1}`}
          width={1920}
          height={500}
          className="w-full h-full object-cover"
        />

        <div className="gradient"></div>
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      loop={true}
    >
      {items}
    </Swiper>
  );
};

export default HeroSlider;
