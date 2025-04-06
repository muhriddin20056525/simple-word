"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarProvider() {
  const pathname = usePathname();
  const hideNavbar =
    pathname.startsWith("/my-documents/") && pathname.split("/").length === 3;

  return (
    <div className={hideNavbar ? "hidden" : "w-full flex gap-3"}>
      <Navbar />
    </div>
  );
}
