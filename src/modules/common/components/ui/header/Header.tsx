import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { Logo } from "../logo/Logo";


const Header = () => {
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
              <Link className="hover:underline" href="">
                Inicio
              </Link>

              <Link className="hover:underline" href="">
                Productos
              </Link>

              <Link className="hover:underline" href="about">
                Sobre nosotros
              </Link>

              <Link className="hover:underline" href="contact">
                Contacto
              </Link>
            </nav>

            <div className="flex gap-4">
              <Link
                className="hover:opacity-80 flex gap-2 items-center"
                href=""
              >
                <FiUser className="text-2xl text-slate-900" />
                Elder
              </Link>

              <Link href="">Mis Compras</Link>

              <Link href="">
                <MdFavoriteBorder className="text-2xl text-red-500" />
              </Link>

              <Link href="">
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
