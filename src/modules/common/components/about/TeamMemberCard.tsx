import Image from "next/image"

type Props = {
  name: string
  role?: string
  imgUrl?: string
  description: string
}

export default function TeamMemberCard({ name, role, imgUrl, description }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center transition hover:scale-120">
      <Image src={imgUrl || '/images/default-avatar.webp'}
        alt={name}
        width={150}
        height={150}
        className="mx-auto rounded-full object-cover mb-4 border-2 border-gray-300"
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      {role && <p className="text-sm text-indigo-500 font-medium">{role}</p>}
      <p className="text-gray-600 mt-3 text-sm">{description}</p>
    </div>
  )
}