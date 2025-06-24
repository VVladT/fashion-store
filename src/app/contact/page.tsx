'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const goToHome = () => {
    router.push("/");
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-r from-blue-100 via-white to-red-100">
      <div className="max-w-md w-full bg-white border border-blue-200 rounded-3xl shadow-lg p-10">
        <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">Contáctanos</h2>
        {!submitted ? (
          <>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-red-700 font-semibold mb-2">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-red-700 font-semibold mb-2">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-red-700 font-semibold mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition"
              >
                Enviar mensaje
              </button>
            </form>

            <button
              onClick={goToHome}
              className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition"
            >
              Volver al inicio
            </button>
          </>
        ) : (
          <div className="text-center space-y-6">
            <p className="text-blue-700 font-semibold text-xl">
              ¡Gracias por contactarnos! Te responderemos pronto.
            </p>
            <button
              onClick={goToHome}
              className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-md transition"
            >
              Volver al inicio
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
