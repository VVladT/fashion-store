import Link from "next/link";
import { CiShop } from "react-icons/ci";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-bold text-2xl text-red-500 flex items-center mr-10"
    >
      <CiShop size={30} className="text-orange-600 mr-1" />
      Fashion<span className="text-blue-500">Store</span>
    </Link>
  );
};