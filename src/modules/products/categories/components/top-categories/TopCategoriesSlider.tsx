"use client";

import { Category } from "@/modules/products/categories/model/category.interface";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./index.css";

import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

interface Props {
  categories: Category[];
}

export const TopCategoriesSlider = ({ categories }: Props) => {
  return (
    <Swiper
      slidesPerView={categories?.length}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: categories.length >= 2 ? 2 : categories.length,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: categories.length >= 4 ? 4 : categories.length,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: categories.length >= 5 ? 5 : categories.length,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: categories.length >= 7 ? 7 : categories.length,
          spaceBetween: 10,
        },
      }}
      modules={[Navigation]}
      className="categories-slider"
      loop={true}
    >
      {categories?.map((category) => (
        <SwiperSlide key={category.id} className="relative">
          <Link href={`/category/${category.slug}`} className="flex flex-col items-center group">
            <div className="relative w-36 h-36">
              <div className="relative w-full h-full rounded-full group-hover:border-blue-400 group-hover:border-[3px] overflow-hidden">
                <img
                  src={
                    category.image?.startsWith('/') || category.image?.startsWith('http')
                      ? category.image
                      : '/images/default-category.jpg'
                  }
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-black/80 text-center mt-4 antialiased">{category.name}</p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
