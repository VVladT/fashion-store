"use client";

import Image from "next/image";

const FeaturedSpaces = () => {
  return (
    <section className="bg-[#fdfdfd] py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-8">

      <div className="max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Más de 50 productos de moda para inspirarte
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-4">
          Explora una selección curada de prendas y accesorios diseñados para realzar tu estilo y expresar tu personalidad.
        </p>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          Desde looks casuales hasta outfits sofisticados, encuentra lo último en moda con solo un clic.
        </p>
        <button className="bg-black hover:bg-gray-800 text-white px-5 py-3 rounded-md transition-colors">
          Explora más
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative w-64 h-80">
          <Image
            src="/images/fashion-product-1.webp"
            alt="Vestido elegante"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="relative w-64 h-80">
          <Image
            src="/images/fashion-product-2.webp"
            alt="Chaqueta moderna"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpaces;