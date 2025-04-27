import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="overflow-hidden flex">
      <div className="hidden sm:block flex-1">
        <Image
          alt="thumbnail auth image"
          src="https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg"
          width="1000"
          height="1000"
          className="object-cover w-full h-screen"
          quality={100}
        />
      </div>
      {children}
    </div>
  );
}
