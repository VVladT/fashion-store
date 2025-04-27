import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="p-12 sm:max-w-[33rem] text-black/80 flex-1 sm:flex-auto">
      <div className="mb-10">
        <h1 className="font-bold text-2xl">
          Fashion - <span>Store</span>
        </h1>
      </div>
      <div>
        <h1 className="font-bold text-2xl mb-4">Encantado de verte de nuevo</h1>

        <form className="flex flex-col gap-2">
          <div>
            <p className="font-light mb-2">Login</p>
            <input
              className="bg-slate-100 p-3 w-full focus-visible:outline-gray-300"
              type="email"
              placeholder="Ingresa tu correo electrónico"
              autoComplete="email"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="font-light mb-2">
              Password
            </label>
            <input
              className="bg-slate-100 p-3 w-ful focus-visible:outline-gray-300"
              type="password"
              placeholder="Ingresa tu contraseña"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="p-3 bg-blue-500 hover:bg-blue-400 transition-colors ease-in-out duration-300 hover:cursor-pointer text-white font-bold rounded"
          >
            Login
          </button>

          <p className="text-center">¿No tienes una cuenta? <Link href="/auth/register" className="text-blue-500">Registrate ahora!</Link></p>
        </form>
      </div>
    </div>
  );
}
