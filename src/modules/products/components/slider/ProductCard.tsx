import React from "react";
import { Product } from "@/modules/products/model/product.model";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const formattedPrice = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 0,
  }).format(product.price);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 max-w-[240px] w-full"
    >
      <div className="relative w-full h-[180px] overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={product.images[0]}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between h-[115px]">
        <h3 className="text-md font-medium text-gray-800 group-hover:text-blue-600 truncate">
          {product.title}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">
            {formattedPrice}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
