interface Props {
  children: React.ReactNode;
}

export default function EcommerceLayout({ children }: Props) {
  return (
    <div>
      // header
      {children}
      // footer
    </div>
  );
}
