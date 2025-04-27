import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="p-12 sm:max-w-[33rem] text-black/80 flex-1 sm:flex-auto">
      <div className="mb-10">
        <h1 className="font-bold text-2xl">
          Fashion - <span>Store</span>
        </h1>
      </div>
      <div>
        <h1 className="font-bold text-2xl mb-4">
          ¡Estamos felices de tenerte aquí!
        </h1>

        <form className="flex flex-col gap-2">
          <div className="flex flex-col">
            <p className="label">Register</p>
            <input
              className="input"
              type="text"
              placeholder="Nombres completos"
            />
          </div>
          <div>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              id="email"
              className="input"
              type="email"
              placeholder="Ingresa tu correo electrónico"
              autoComplete="email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              id="password"
              className="input"
              type="password"
              placeholder="Ingresa tu contraseña"
              autoComplete="current-password"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="avatar" className="label">
              Avatar
            </label>
            <input
              id="avatar"
              className="input"
              type="text"
              placeholder="Url de tu avatar"
            />
          </div>

          <button type="submit" className="btn-info">
            Registrarse
          </button>

          <p className="text-center">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/auth/login" className="text-blue-500">
              Iniciar Sesión
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
