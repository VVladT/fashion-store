'use client'

import { ProductResponse } from "@/modules/products/interfaces/product.interfaces";
import { clearCart, decrement, increment, removeFromCart } from "../actions/cart.actions";

type DetailedCartItem = ProductResponse & {
  quantity: number;
}

type CartProps = {
  items: DetailedCartItem[];
};

export function Cart({ items }: CartProps) {
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Carrito <span className="text-lg font-normal">({totalQuantity} productos)</span>
        </h1>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          {items.length === 0 && <p className="text-gray-500">El carrito está vacío.</p>}
          {items.map((item) => (
            <div
              key={item.id}
              className="pt-4 pb-2 px-2 border-t border-gray-200 flex gap-4 items-center"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-[100px] h-[100px] object-cover rounded"
              />
              <div className="flex flex-col flex-1">
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-600 mb-2">Precio: S/ {item.price}</p>
                <div className="flex items-center gap-4">
                  <span className="font-normal">Subtotal:</span>
                  <p className="text-gray-700 font-medium">S/ {item.price * item.quantity}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-4">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 transition"
                  aria-label={`Eliminar ${item.title}`}
                  title={`Eliminar ${item.title}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrement(item.id)}
                    className="p-1 rounded bg-gray-200 hover:bg-gray-300 transition"
                    aria-label={`Disminuir cantidad de ${item.title}`}
                  >
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increment(item.id)}
                    className="p-1 rounded bg-gray-200 hover:bg-gray-300 transition"
                    aria-label={`Aumentar cantidad de ${item.title}`}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Resumen de la orden</h1>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex flex-col font-semibold text-gray-700 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-300">
              <p>Productos ({totalQuantity})</p>
              <p>S/ {totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between py-2 mb-2">
              <p>Total:</p>
              <p>S/ {totalPrice.toFixed(2)}</p>
            </div>
            <button
              type="button"
              onClick={() => clearCart()}
              className="btn btn-primary w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
            >
              Pagar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}