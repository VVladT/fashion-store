import React from "react";
import { Product } from "@/modules/products/model/product.model";
import ProductCard from "../slider/ProductCard";

interface Props {
  products: Product[];
  isLoading?: boolean;
  errorMessage?: string;
}

const ProductList = ({ products, isLoading = false, errorMessage }: Props) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="text-gray-600">Cargando productos…</span>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-red-600">{errorMessage}</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-600">No se encontraron productos.</p>
      </div>
    );
  }

  return (
    <section className="px-4 py-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <li key={product.id} className="flex justify-center">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductList;