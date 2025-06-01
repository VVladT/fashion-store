"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Category } from "../../categories/model/category.interface";

type Props = {
  currentFilters: {
    title?: string;
    price_min?: string;
    price_max?: string;
    category?: string;
  };
  categories: Category[];
};

const ProductFilter = ({ currentFilters, categories }: Props) => {
  const router = useRouter();

  const [title, setTitle] = useState(currentFilters.title || "");
  const [priceMin, setPriceMin] = useState(currentFilters.price_min || "");
  const [priceMax, setPriceMax] = useState(currentFilters.price_max || "");
  const [category, setCategory] = useState(currentFilters.category || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (title) params.set("title", title);
    if (priceMin) params.set("price_min", priceMin);
    if (priceMax) params.set("price_max", priceMax);
    if (category) params.set("category", category);

    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="my-container">
      <form onSubmit={handleSubmit} className="mb-6 flex justify-around gap-4">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block p-2 w-full text-md text-gray-900 shadow rounded-sm border-2 
                border-gray-300 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:outline-0 focus-visible:ring-opacity-50"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="block p-2 w-300 text-md text-gray-900 shadow rounded-sm border-2 
                border-gray-300 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:outline-0 focus-visible:ring-opacity-50"
        >
          <option value="" disabled>
            Seleccione una categoría...
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Precio mínimo"
          value={priceMin}
          onChange={(e) => setPriceMin(e.target.value)}
          className="block p-2 w-100 text-md text-gray-900 shadow rounded-sm border-2 
                border-gray-300 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:outline-0 focus-visible:ring-opacity-50"
        />

        <input
          type="number"
          placeholder="Precio máximo"
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value)}
          className="block p-2 w-100 text-md text-gray-900 shadow rounded-sm border-2 
                border-gray-300 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:outline-0 focus-visible:ring-opacity-50"
        />

        <button
          type="submit"
          className="block p-2 w-80 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200"
        >
          Filtrar
        </button>
      </form>
    </div>
  );
};

export default ProductFilter;
