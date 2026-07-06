"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import ViewerNavbar from "./components/ViewerNavbar";
import ViewerSidebar from "./components/ViewerSidebar";

export default function viewerLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const isLoginPage = pathname === "/viewer/login";

  useEffect(() => {
    if (isLoginPage) {
      setLoading(false);
      return;
    }

    const token = localStorage.getItem("viewerToken");

    if (!token) {
      router.push("/viewer/login");
    } else {
      setLoading(false);
    }
  }, [pathname, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold">
        Loading...
      </div>
    );
  }

  if (isLoginPage) {
    return children;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <ViewerSidebar />

      {/* Right Section */}
      <div className="flex flex-col flex-1 w-full">

        {/* Navbar */}
        <ViewerNavbar />

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-x-auto">
          {children}
        </main>

      </div>

    </div>
  );
}