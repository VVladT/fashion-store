import SectionTitle from '@/modules/common/components/about/SectionTItle'

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-14 shadow-md my-[3rem] rounded-2xl">
      <SectionTitle
        title="Sobre Nosotros"
        subtitle="Nuestra misión y visión"
      />
      <section className="mt-10 space-y-8">
        <p className="text-gray-700 text-lg">
            <strong>Fashion Store</strong> es una tienda simulada, que busca servir de plantilla web para que pequeños y medianos emprendimientos puedan despegar rápidamente, reduciendo costos y tiempo de desarrollo.
        </p>
        <div>
          <h2 className="text-3xl font-semibold mb-2">Misión</h2>
          <p className="text-gray-700">
            Proporcionar productos de moda de alta calidad que inspiren confianza y estilo a nuestros clientes, ofreciendo una experiencia de compra excepcional.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-2">Visión</h2>
          <p className="text-gray-700">
            Ser la tienda de moda líder en innovación y sostenibilidad, reconocida por nuestro compromiso con la calidad, la ética y la satisfacción del cliente.
          </p>
        </div>
      </section>
    </main>
  )
}