import { clearCart, decrement, getDetailedCart, increment, removeFromCart } from "@/modules/cart/actions/cart.actions";
import { Cart } from "@/modules/cart/components/Cart";

export default async function CartPage() {
  const items = await getDetailedCart();

  return (
    <section className="container mx-auto p-4">
      <Cart
        items={items}
      />
    </section>
  );
}