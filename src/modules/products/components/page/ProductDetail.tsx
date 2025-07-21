'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { ProductResponse } from '../../interfaces/product.interfaces';
import { useRef, useState, useTransition } from 'react';

import "./index.css"
import { addToCart } from '@/modules/cart/actions/cart.actions';

type Props = {
    product: ProductResponse
}

export default function ProductDetail({ product }: Props) {
    const swiperRef = useRef<any>(null);

    const [isPending, startTransition] = useTransition();

    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
      startTransition(() => {
        addToCart(product.id, quantity);
      });
    };

  return (
    <div className="details-container flex flex-col gap-4 p-4">

      <div className="bg-base-100 p-8 rounded-lg flex flex-col lg:flex-row gap-8">
        {/* Swiper Carousel */}
        <div>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            className="w-full md:size-[25rem] lg:size-[30rem]"
            onSwiper={(swiper) => swiperRef.current = swiper}
          >
            {product.images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="size-full flex justify-center">
                  <img src={src} alt={`Imagen ${product.title}`} className="h-full w-[85%] object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-4 justify-center">
            {product.images.map((src, index) => (
              <button key={index} className="size-[45px] cursor-pointer" onClick={() => swiperRef.current.slideTo(index)}>
                <img src={src} alt={`Miniatura ${index + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <div className="flex gap-2 items-center justify-between border-b border-b-gray-300/80 pb-2">
              <h1 className="text-2xl">{product.title}</h1>
              <span className="text-xs opacity-80">Código: {product.slug.toUpperCase()}</span>
            </div>
            <p className="text-gray-500 mt-2">{product.category.name}</p>
          </div>

          <div className="flex flex-col text-gray-600 gap-4">
            <div>
              <h3 className="text-xl font-semibold">Descripción</h3>
              <p className="whitespace-pre-line">{product.description}</p>
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <span className="font-bold text-2xl">S/&nbsp;{product.price.toFixed(2)}</span>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-6">
                  <button className="btn-mini" 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  disabled={quantity === 1}>-</button>
                  <span>{quantity}</span>
                  <button className="btn-mini"
                  onClick={() => setQuantity(q => q + 1)}
                  >+</button>
                </div>
              </div>
              <div>

              <button
              disabled={isPending} onClick={handleAddToCart}
              type='button' className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md cursor-pointer font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent">
                {isPending ? 'Agregando...' : 'Agregar al Carrito'} 
                </span>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
