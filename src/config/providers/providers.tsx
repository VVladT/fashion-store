"use client";

import { ToastContainer } from "react-toastify";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
