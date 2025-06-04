import SectionTitle from '@/modules/common/components/about/SectionTItle'
import TeamMemberCard from '@/modules/common/components/about/TeamMemberCard'

export default function AboutPage() {
  const team = [
    {
      name: 'Angelo del Piero',
      role: 'Frontend Developer',
      description: 'Apasionado por el diseño de interfaces intuitivas y funcionales. Enfocado en la experiencia del usuario y la accesibilidad.',
      imgUrl: '/images/victorin.webp',
    },
    {
      name: 'Anderson Daniel',
      role: 'Arquitecto de Proyecto',
      description: 'Enfocado en la arquitectura modular, buenas prácticas y control de versiones con Git.',
      imgUrl: '/images/victorin.webp',
    },
    {
      name: 'Vladimir',
      role: 'Líder Técnico',
      description: 'Encargado de la integración técnica, desarrollo con Next.js y optimización del rendimiento.',
      imgUrl: '/images/victorin.webp',
    },
    {
      name: 'Sebastián',
      role: 'UX/UI Designer',
      description: 'Responsable de la experiencia de usuario y el diseño visual. Enfocado en accesibilidad y estilo moderno.',
      imgUrl: '/images/victorin.webp',
    },
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <SectionTitle
        title="Sobre Nosotros"
        subtitle="Conoce al equipo detrás del desarrollo de FashionStore."
      />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {team.map((member, i) => (
          <TeamMemberCard key={i} {...member} />
        ))}
      </section>
    </main>
  )
}
