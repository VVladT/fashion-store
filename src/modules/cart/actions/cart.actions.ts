import { cookies } from "next/headers";

const CART_COOKIE_NAME = "cart_items";

type CartItem = {
  id: string;
  quantity: number;
};

export async function getCart(): Promise<CartItem[]> {
  const cookieStore = await cookies();
  const cart = cookieStore.get(CART_COOKIE_NAME);
  if (!cart) return [];

  try {
    return JSON.parse(cart.value) as CartItem[];
  } catch {
    return [];
  }
};

export async function saveCart(items: CartItem[]) {
  const cookieStore = await cookies();
  cookieStore.set(CART_COOKIE_NAME, JSON.stringify(items), {
    path: "/",
    httpOnly: false,
    maxAge: 60 * 60 * 24 * 7,
  });
};

export async function addToCart(productId: string, quantity: number = 1) {
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

  saveCart(updatedCart);
};

export async function removeFromCart(productId: string) {
  const cart = await getCart();
  const updatedCart = cart.filter((item) => item.id !== productId);
  saveCart(updatedCart);
};

export const clearCart = () => {
  saveCart([]);
};