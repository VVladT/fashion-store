"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { login } from "../../actions/login";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface FormValues {
  email: string;
  password: string;
}

export default function LoginForm() {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: FormValues) {
    const response = await login(data.email, data.password);
    
    if(!response.success) {
      toast.error(response.error.message);
    }
  }

  return (
    <div className="p-12 sm:max-w-[33rem] text-black/80 flex-1 sm:flex-auto">
      <div className="mb-10">
        <h1 className="font-bold text-2xl">
          Fashion - <span>Store</span>
        </h1>
      </div>
      <div>
        <h1 className="font-bold text-2xl mb-4">Encantado de verte de nuevo</h1>

        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p className="label">Login</p>
            <input
              className="input"
              type="email"
              placeholder="Ingresa tu correo electrónico"
              autoComplete="email"
              {...register("email", {
                required: "Este campo es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
            />

            {errors.email?.message && (
              <span className="text-red-500">{errors.email?.message}</span>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              id="password"
              className="input"
              type="password"
              placeholder="Ingresa tu contraseña"
              autoComplete="current-password"
              {...register("password", {
                required: "Este campo es requerido",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
              })}
            />
            {errors.password?.message && (
              <span className="text-red-500">{errors.password?.message}</span>
            )}
          </div>

          <button type="submit" className="btn-info">
            Login
          </button>

          <p className="text-center">
            ¿No tienes una cuenta?{" "}
            <Link href="/auth/register" className="text-blue-500">
              Registrate ahora!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
