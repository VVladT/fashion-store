'use server'

import { cookies } from "next/headers";
import { ProductResponse } from "@/modules/products/interfaces/product.interfaces";
import { getProductById } from "@/modules/products/actions/get-product";

const CART_COOKIE_NAME = "cart_items";

type CartItem = {
  id: number;
  quantity: number;
};

type DetailedCartItem = ProductResponse & {
  quantity: number;
}

export async function getCart(): Promise<CartItem[]> {
  const cookieStore = await cookies();
  const cart = cookieStore.get(CART_COOKIE_NAME);
  if (!cart) return [];

  try {
    const rawItems = JSON.parse(cart.value) as any[];

    const cartItems: CartItem[] = rawItems.map((item) => ({
      id: Number(item.id),
      quantity: Number(item.quantity),
    }));

    return cartItems;
  } catch {
    return [];
  }
}

export async function getDetailedCart(): Promise<DetailedCartItem[]> {
  const cart = await getCart();
  if (!cart) return [];

  const cartWithDetails = await Promise.all(
    cart.map(async (item) => {
      const productRes = await getProductById(Number(item.id));
      if (!productRes.success || !productRes.data) return null;

      return {
        ...productRes.data,
        quantity: item.quantity,
      };
    })
  );
  
  return cartWithDetails.filter(
    (item): item is DetailedCartItem => item !== null
  );
};

export async function saveCart(items: CartItem[]) {
  const cookieStore = await cookies();
  cookieStore.set(CART_COOKIE_NAME, JSON.stringify(items), {
    path: "/",
    httpOnly: false,
    maxAge: 60 * 60 * 24 * 7,
  });
};

export async function addToCart(productId: number, quantity: number = 1) {
  const cart = await getCart();
  const existing = cart.find((item) => item.id === productId);

  let updatedCart: CartItem[];

  if (existing) {
    updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  } else {
    updatedCart = [...cart, { id: productId, quantity }];
  }

  await saveCart(updatedCart);
};

export async function removeFromCart(productId: number) {
  console.log(productId)
  const cart = await getCart();
  console.log('cart',cart)
  const updatedCart = cart.filter((item) => item.id !== productId);
  console.log('updated', updatedCart)
  await saveCart(updatedCart);
};

export async function increment(productId: number) {
  const cart = await getCart();
  const updatedCart = cart.map((item) => {
    if (item.id === productId) {
      return {
        id: item.id,
        quantity: item.quantity + 1
      }
    } else {
      return item;
    }
  })
  await saveCart(updatedCart);
}

export async function decrement(productId: number) {
  const cart = await getCart();
  let updatedCart = cart.map((item) => {
    if (item.id === productId) {
      return {
        id: item.id,
        quantity: item.quantity - 1
      }
    } else {
      return item;
    }
  })

  updatedCart = updatedCart.filter((item) => item.quantity > 0);
  await saveCart(updatedCart);
}

export async function clearCart() {
  await saveCart([]);
};