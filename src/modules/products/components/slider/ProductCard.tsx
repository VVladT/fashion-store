import { Product } from "@/modules/products/model/product.model";
import Image from "next/image";
import Link from "next/link";

interface Props {
    product: Product;
  }
  
  const ProductCard = ({ product }: Props) => {
    return (
      <Link
        href={`/products/${product.category.slug}-${product.slug}/${product.id}`}
        className="group bg-white rounded overflow-hidden shadow h-[295px] flex flex-col"
      >
        <div className="relative w-full h-[200px] overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-110 transition-all"
          />
        </div>
  
        <div className="font-medium p-4">
          <p className="text-md group-hover:text-blue-500">{product.title}</p>
          <p className="text-xl">S/ {product.price}</p>
        </div>
      </Link>
    );
  };
  
  export default ProductCard;
  