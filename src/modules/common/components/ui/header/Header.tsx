import Link from "next/link";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { Logo } from "../logo/Logo";
import Image from "next/image";
import { User } from "@/modules/auth/models/auth.model";

type Props = {
  user: User | null;
}

const Header = ({user} : Props) => {
  return (
    <header className="p-4 flex flex-col border-b border-b-gray-100 shadow-md">
      <div className="my-container">
        <div className="flex mb-4">
          <Logo />

          <div className="flex-1">
            <form className="relative max-w-[600px]">
              <input
                type="search"
                placeholder="Buscar productos, marcas y más..."
                className="block p-2 w-full text-md text-gray-900 shadow rounded-sm border-2 
                border-gray-300 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:outline-0 focus-visible:ring-opacity-50"
              />

              <IoIosSearch
                size={25}
                className="absolute top-1/4 right-2 transform -translate-y-1/2 text-gray-500"
              />
            </form>
          </div>
        </div>

        <div className="flex w-full">
          <div className="w-[207.34px]"></div>

          <div className="flex flex-1 gap-8 justify-between">
            <nav className="flex gap-6 font-medium text-md min-w-[500px]">
              <Link className="hover:underline" href="/">
                Inicio
              </Link>

              <Link className="hover:underline" href="/products">
                Productos
              </Link>

              <Link className="hover:underline" href="/about">
                Sobre nosotros
              </Link>

              <Link className="hover:underline" href="/contact">
                Contacto
              </Link>
            </nav>

            <div className="flex gap-4 items-center">
              
              {user ? (
                <Link
                  className="hover:opacity-80 flex gap-2 items-center"
                  href=""
                >
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                  <span className="text-slate-900 font-medium">{user.name}</span>
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                >
                  Iniciar sesión
                </Link>
              )}

              <Link href="/cart" className="hover:bg-gray-200 rounded-2xl p-0.5">
                <MdOutlineShoppingCart className="text-2xl text-slate-900" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
