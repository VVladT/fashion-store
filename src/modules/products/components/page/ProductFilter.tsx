"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Category } from "../../categories/model/category.interface";

interface Props {
  currentFilters: {
    title?: string;
    price_min?: string;
    price_max?: string;
    category?: string;
  };
  categories: Category[];
}

const ProductFilter = ({ currentFilters, categories }: Props) => {
  const router = useRouter();

  const [title, setTitle] = useState(currentFilters.title || "");
  const [priceMin, setPriceMin] = useState(currentFilters.price_min || "");
  const [priceMax, setPriceMax] = useState(currentFilters.price_max || "");
  const [category, setCategory] = useState(currentFilters.category || "");

  const isPriceValid = useMemo(() => {
    if (!priceMin || !priceMax) return true;
    return Number(priceMin) <= Number(priceMax);
  }, [priceMin, priceMax]);

  const isUnchanged = useMemo(() => {
    return (
      title === (currentFilters.title || "") &&
      priceMin === (currentFilters.price_min || "") &&
      priceMax === (currentFilters.price_max || "") &&
      category === (currentFilters.category || "")
    );
  }, [title, priceMin, priceMax, category, currentFilters]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPriceValid) return;
    const params = new URLSearchParams();

    if (title.trim()) params.set("title", title.trim());
    if (priceMin.trim()) params.set("price_min", priceMin.trim());
    if (priceMax.trim()) params.set("price_max", priceMax.trim());
    if (category) params.set("category", category);

    router.push(`/products?${params.toString()}`);
  };

  const handleReset = () => {
    setTitle("");
    setPriceMin("");
    setPriceMax("");
    setCategory("");
    router.push(`/products`);
  };

  useEffect(() => {
    setTitle(currentFilters.title || "");
    setPriceMin(currentFilters.price_min || "");
    setPriceMax(currentFilters.price_max || "");
    setCategory(currentFilters.category || "");
  }, [currentFilters]);

  return (
    <section className="my-8 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-end gap-4 bg-white p-6 rounded-lg shadow-sm"
      >
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="filter-title" className="sr-only">
            Buscar producto
          </label>
          <input
            id="filter-title"
            type="text"
            placeholder="Buscar producto..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 text-gray-800 border-2 border-gray-300 rounded-md shadow-sm 
                       focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex-1 min-w-[180px]">
          <label htmlFor="filter-category" className="sr-only">
            Filtrar por categoría
          </label>
          <select
            id="filter-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 text-gray-800 border-2 border-gray-300 rounded-md shadow-sm 
                       focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">— Todas las categorías —</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="min-w-[120px]">
          <label htmlFor="filter-price-min" className="sr-only">
            Precio mínimo
          </label>
          <input
            id="filter-price-min"
            type="number"
            placeholder="Mín: S/0"
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
            min="0"
            className="w-full p-2 text-gray-800 border-2 border-gray-300 rounded-md shadow-sm 
                       focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="min-w-[120px]">
          <label htmlFor="filter-price-max" className="sr-only">
            Precio máximo
          </label>
          <input
            id="filter-price-max"
            type="number"
            placeholder="Máx: S/0"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
            min={priceMin || "0"}
            className="w-full p-2 text-gray-800 border-2 border-gray-300 rounded-md shadow-sm 
                       focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {!isPriceValid && (
          <p className="w-full text-center text-red-600 text-sm">
            El precio mínimo no puede ser mayor que el máximo.
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0">
          <button
            type="submit"
            disabled={isUnchanged || !isPriceValid}
            className={`w-full sm:w-auto px-4 py-2 text-white font-semibold rounded-md transition-colors 
                        ${isUnchanged || !isPriceValid
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Filtrar
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto px-4 py-2 text-gray-700 font-medium rounded-md border border-gray-300 
                       hover:bg-gray-100 transition-colors"
          >
            Limpiar
          </button>
        </div>
      </form>
    </section>
  );
};

export default ProductFilter;
