"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./index.css"

import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import { productData } from "@/modules/common/data/products";

const ProductsSlider = () => {
  return (
    <div className="my-container max-h-[300px] -mt-[5%]">
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        className="products-slider"
        loop={true}
      >
        {productData.map((product) => (
          <SwiperSlide key={product.id} className="relative">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;