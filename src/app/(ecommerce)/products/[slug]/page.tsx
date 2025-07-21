import { getProduct } from "@/modules/products/actions/get-product";
import ProductDetail from "@/modules/products/components/page/ProductDetail";
import { ProductResponse } from "@/modules/products/interfaces/product.interfaces";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export default async function ProductPage({ params }: Props) {
  const slug = params.slug;

  const product: ProductResponse | null = (await getProduct(slug)).data;

  
  return <>
  <div className="my-container my-[3rem]">
    <div className="ml-2 mb-2">
      <Link href="/products" className="font-medium text-blue-600 hover:underline">Regresar</Link>
    </div>
    <ProductDetail product={product!} />
  </div>
  </>
}