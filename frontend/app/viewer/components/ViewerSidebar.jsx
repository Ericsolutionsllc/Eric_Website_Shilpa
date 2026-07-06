"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  House,
  NotebookTabs,
  Images,
  ChevronLeft,
  ChevronDown,
  Menu,
  BriefcaseBusiness,
  ShoppingCart,
  User,
  ShoppingBasket,
  Mail,
  Sparkles,
  Users,
  Newspaper,
  UserRoundCog,
  Hourglass,
  UserRoundSearch,
  UserCheck,
  Contact
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [viewer, setViewer] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("viewerData");
    if (data) {
      setViewer(JSON.parse(data));
    }
  }, []);

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const isActive = (path) => pathname === path;

  return (
    <>
      <div className="md:hidden flex items-center justify-between h-14 bg-slate-900 text-white px-4 border-b border-slate-800">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
        >
          <Menu size={26} />
        </button>
        <p className="text-sm font-medium tracking-wide">Viewer Panel</p>
        <span className="w-7" />
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
        fixed md:relative z-50
        ${collapsed ? "w-[88px]" : "w-72"}
        ${mobileOpen ? "left-0" : "-left-full md:left-0"}
        min-h-screen
        bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white
        transition-all duration-300 p-4 border-r border-slate-800 shadow-2xl
      `}
      >
        <div className="flex items-center justify-between mb-6 px-1">
          {!collapsed && viewer && (
            <div className="bg-white/10 p-3 rounded-xl w-full border border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${viewer.profileImg.replace(/\\/g, "/")}`}
                  width={45}
                  height={45}
                  className="rounded-full border-2 border-blue-500 object-cover"
                  alt="viewer"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate">
                    {viewer.fullName}
                  </p>
                  <p className="text-[11px] text-slate-300 flex items-center gap-1">
                    <Sparkles size={12} />
                    Verified access
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-300 mt-2 truncate flex items-center gap-1.5">
                <Mail size={12} />
                {viewer.email}
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:flex w-8 h-8 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors ml-2"
          >
            <ChevronLeft
              className={`transition ${collapsed ? "rotate-180" : ""}`}
              size={18}
            />
          </button>
        </div>

        <nav className="space-y-1.5">
          <Link
            href="/viewer/dashboard"
            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition ${
              isActive("/viewer/dashboard")
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            <House size={20} />
            {!collapsed && (
              <span className="text-sm font-medium">Dashboard</span>
            )}
          </Link>

          {/* articles */}
             <Link
            href="/viewer/articlelist"
            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition ${
              isActive("/viewer/articlelist")
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            <Newspaper size={20} />
            {!collapsed && (
              <span className="text-sm font-medium">Articles</span>
            )}
          </Link>

          {/* blogs */}
             <Link
            href="/viewer/bloglist"
            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition ${
              isActive("/viewer/bloglist")
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            <NotebookTabs size={20} />
            {!collapsed && (
              <span className="text-sm font-medium">Blogs</span>
            )}
          </Link>

          {/* team */}
          
           <Link
            href="/viewer/team/list"
            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition ${
              isActive("/viewer/team/list")
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            <UserRoundCog size={20} />
            {!collapsed && (
              <span className="text-sm font-medium">Team</span>
            )}
          </Link>

          {/* Timeline */}
          <Link
            href="/viewer/timeline/list"
            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition ${
              isActive("/viewer/timeline/list")
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            <Hourglass size={20} />
            {!collapsed && (
              <span className="text-sm font-medium">Timeline</span>
            )}
          </Link>

          <Link
            href="/viewer/contacts"
            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition ${
              isActive("/viewer/contacts")
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            <UserRoundSearch size={20} />
            {!collapsed && (
              <span className="text-sm font-medium">Contacts</span>
            )}
          </Link>

          <Link
            href="/viewer/subscribers"
            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition ${
              isActive("/viewer/subscribers")
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            <UserCheck size={20} />
            {!collapsed && (
              <span className="text-sm font-medium">Subscribers</span>
            )}
          </Link>

          {/* Timeline */}
          <Link
            href="/viewer/footer-contact"
            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition ${
              isActive("/viewer/footer-contact")
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            <Contact size={20} />
            {!collapsed && (
              <span className="text-sm font-medium">Footer Contact</span>
            )}
          </Link>
        </nav>
      </aside>
    </>
  );
}
