"use client";

import { ShieldCheck, Truck, Sparkles } from "lucide-react";

const OurBenefits = () => {
  const benefits = [
    {
      icon: <ShieldCheck size={32} className="text-pink-600" />,
      title: "Pago seguro",
      description: "Protegemos tus compras con los más altos estándares de seguridad.",
    },
    {
      icon: <Truck size={32} className="text-pink-600" />,
      title: "Envío rápido",
      description: "Recibe tus pedidos en tiempo récord, directo a tu puerta.",
    },
    {
      icon: <Sparkles size={32} className="text-pink-600" />,
      title: "Moda exclusiva",
      description: "Descubre colecciones seleccionadas que marcan tendencia.",
    },
  ];

  return (
    <section className="bg-[#fff8f8] py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        ¿Por qué comprar con nosotros?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="mb-4 flex justify-center">{benefit.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600 text-base">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBenefits;