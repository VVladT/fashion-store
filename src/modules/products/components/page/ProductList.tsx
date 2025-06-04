import React from 'react'
import { Product } from '../../model/product.model';

type Props = {
  products: Product[];
}

const ProductList = ({ products } : Props) => {
  if (products.length === 0) {
    return <p>No se encontraron productos.</p>;
  }

  return (
    <>
      // Mapear a las Card Products
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
