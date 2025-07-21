"use client"
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { Logo } from "../logo/Logo";
import Image from "next/image";
import { User } from "@/modules/auth/models/auth.model";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/modules/auth/actions/logout";

type Props = {
  user: User | null;
}

const Header = ({user} : Props) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null)
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const title = inputRef.current?.value;

    if (!title || !title.trim()) return

    router.push(`products?title=${title}`);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  const handleLogout = async () => {
    const res = await logout()
    if (res.success) {
      router.push("/auth/login") // redirige a la página de login tras cerrar sesión
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="p-4 flex flex-col border-b border-b-gray-100 shadow-md">
      <div className="my-container">
        <div className="flex mb-4">
          <Logo />

          <div className="flex-1">
            <form className="relative max-w-[600px]" onSubmit={handleSubmit}>
              <input
                type="search"
                ref={inputRef}
                placeholder="Buscar productos, marcas y más..."
                className="block p-2 w-full text-md text-gray-900 shadow rounded-sm border-2 
                border-gray-300 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:outline-0 focus-visible:ring-opacity-50"
              />

              <IoIosSearch
                size={25}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500"
              />
            </form>
          </div>
        </div>

        <div className="flex w-full">
          <div className="w-[207.34px]"></div>

          <div className="flex flex-1 gap-8 justify-between">
            <nav className="flex gap-6 font-medium text-md min-w-[500px] items-center">
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

            <div className="flex gap-4 w-fit items-center">
              
              {user ? (
                <button
                  type="button"
                  onClick={() => setOpenDropdown((prev) => !prev)}
                  className="hover:opacity-80 flex gap-2 items-center"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                  <span className="text-slate-900 font-medium">{user.name}</span>
                </button>
              ) : (
                <Link
                  href="/auth/login"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                >
                  Iniciar sesión
                </Link>
              )}

              {/* Menú flotante */}
              {openDropdown && (
                <div className="absolute translate-y-[3rem] w-40 bg-white border rounded shadow-lg z-50" ref={dropdownRef}>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Cerrar sesión
                  </button>
                </div>
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
