"use client";

import { usePathname } from "next/navigation";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export default function LayoutContent({ children }) {
  const pathname = usePathname();

  const hideLayout =
    pathname.startsWith("/subadmin") ||
    pathname.startsWith("/admin")  ||
    pathname.startsWith("/viewer");


  return (
    <>
      {!hideLayout && <Navbar />}

      {children}

      {!hideLayout && <Footer />}
    </>
  );
}