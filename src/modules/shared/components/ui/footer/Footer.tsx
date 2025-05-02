import Link from "next/link";
import { Logo } from "../logo/Logo";

export const Footer = () => {
  return (
    <footer className="bg-slate-50">
      <div className="my-container">
        <div className="h-[0.5px] bg-gray-200 w-full"></div>

        <div className="py-10 grid grid-cols-4 gap-4">
          <div>
            <Logo />

            <div className="text-black/50 mt-6">
                <p>Avenida Los Ingenieros 400 Oficina 200</p>
                <p>San Borja</p>
                <p>Lima 15037 Perú</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-black/50 font-semibold">Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="">Inicio</Link>

              <Link href="">Tienda</Link>

              <Link href="">Sobre nosotros</Link>

              <Link href="">Contacto</Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-black/50 font-semibold">Cuenta</h4>
            <nav className="flex flex-col gap-3">
              <Link href="">Mi cuenta</Link>
              <Link href="">Inicio de sesión</Link>
              <Link href="">Registro</Link>
              <Link href="">Carrito</Link>
              <Link href="">Deseados</Link>
              <Link href="">Tienda</Link>
            </nav>
          </div>

          <div >
            <h4 className="mb-4 text-black/50 font-semibold">Ayuda</h4>
            <nav className="flex flex-col gap-3">
              <Link href="">Política de privacidad</Link>

              <Link href="">Términos y condiciones</Link>

              <Link href="">Política de cookies</Link>
            </nav>
          </div>
        </div>

        <div className="h-[0.5px] bg-gray-200 w-full"></div>

        <p className="py-6 text-center opacity-70">
          &copy; {new Date().getFullYear()} FashionStore. Todos los derechos
          reservados
        </p>
      </div>
    </footer>
  );
};
