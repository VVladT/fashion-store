import { getUserInfo } from "@/modules/auth/actions/user-info";
import { Footer } from "@/modules/common/components/ui/footer/Footer";
import Header from "@/modules/common/components/ui/header/Header";

interface Props {
  children: React.ReactNode;
}

export default async function EcommerceLayout({ children }: Props) {
  const user = await getUserInfo();

  return (
    <div>
      <Header user={user.data} />
      {children}
      <Footer />
    </div>
  );
}
