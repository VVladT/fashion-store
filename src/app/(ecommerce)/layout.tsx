import { Footer } from "@/modules/shared/components/ui/footer/Footer";
import Header from "@/modules/shared/components/ui/header/Header";

interface Props {
  children: React.ReactNode;
}

export default function EcommerceLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
