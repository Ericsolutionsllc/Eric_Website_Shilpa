"use client";

import { useState } from "react";
import Link from "next/link";

const companyLinks = [
  { name: "About", slug: "about" },
  { name: "Team", slug: "team" },
];

const insightsLinks = [
  { name: "Blog", slug: "blog" },
  { name: "Article", slug: "article" },
];

const solutionsLinks = [
  { name: "Clinical Operations & Project Management", slug: "clinical-operations" },
  { name: "Data Management", slug: "data-management" },
  { name: "Clinical Data Standard", slug: "clinical-data" },
  { name: "Biostatistics", slug: "biostatistics" },
  { name: "Medical Writing", slug: "medical-writing" },
  { name: "eTMF Services", slug: "eTMF" },
  { name: "Pharmacovigilance", slug: "pharmacovigilance" },
];

const technologiesLinks = [
  { name: "Clinical Trial Management Software", slug: "clinical-trial-management-software" },
  { name: "Electronic Data Capture", slug: "electronic-data-capture" },
  { name: "eTMF Technology", slug: "etmf-technology" },
  { name: "Interactive Response Technology", slug: "interactive-response-technology" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-[#08052b] shadow-lg bg-blur">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-right ml-8 mt-3">
          <img src="/navbar/logo.gif" width={230} alt="logo" />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-10 px-10 py-3 rounded-full text-white text-sm shadow-lg font-semibold ml-4 lg:ml-20 pl-2 lg:pl-10 mt-4">
          <Link href="/" className="text-[18px] font-semibold text-white hover:text-gray-500">
            Home
          </Link>

          <Link
            href="https://ai.ericsolutions.com/"
            target="_self"
            className="text-[18px] font-semibold text-white hover:text-gray-500 whitespace-nowrap"
          >
            eRIC AI
          </Link>

          {/* Solutions */}
          <div className="relative group">
            <span className="flex items-center gap-1 cursor-pointer text-[18px] font-semibold text-white hover:text-gray-500">
              Solutions
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-48 bg-white text-gray-700 rounded-xl shadow-2xl opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-300">
              {solutionsLinks.map((item) => (
                <Link
                  key={item.slug}
                  href={`/solutions/${item.slug}`}
                  className="block px-6 py-3 text-s hover:bg-blue-50 hover:text-blue-600 hover:rounded-xl"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="relative group">
            <span className="flex items-center gap-1 cursor-pointer text-[18px] font-semibold text-white hover:text-gray-500">
              Technologies
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-52 bg-white text-gray-700 rounded-xl shadow-2xl opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-300">
              {technologiesLinks.map((item) => (
                <Link
                  key={item.slug}
                  href={`/technologies/${item.slug}`}
                  className="block px-6 py-3 text-s hover:bg-blue-50 hover:text-blue-600 hover:rounded-xl"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="relative group">
            <span className="flex items-center gap-1 cursor-pointer text-[18px] font-semibold text-white hover:text-gray-500">
              Company
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-44 bg-white text-gray-700 rounded-xl shadow-2xl opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-300">
              {companyLinks.map((item) => (
                <Link
                  key={item.slug}
                  href={`/company/${item.slug}`}
                  className="block px-6 py-3 text-s hover:bg-blue-50 hover:text-blue-600 hover:rounded-xl"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div className="relative group">
            <span className="flex items-center gap-1 cursor-pointer text-[18px] font-semibold text-white hover:text-gray-500">
              Insights
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-44 bg-white text-gray-700 rounded-xl shadow-2xl opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-300">
              {insightsLinks.map((item) => (
                <Link
                  key={item.slug}
                  href={`/insights/${item.slug}`}
                  className="block px-6 py-3 text-s hover:bg-blue-50 hover:text-blue-600 hover:rounded-xl"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact" className="flex items-center gap-1 cursor-pointer text-[18px] font-semibold text-white hover:text-gray-500">
            Contact
          </Link>
        </nav>

        {/* RIGHT SIDE (hamburger) */}
        <div className="flex items-center gap-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setMenuOpen(false)} />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-[#0a0736] z-50 transform transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4 text-white">
          {/* Close button */}
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)}>✕</button>
          </div>

          <Link href="/" className="block border-b pb-3" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          {/* eRIC AI (direct link) */}
          <Link
            href="https://ai.ericsolutions.com/"
            target="_self"
            className="block border-b pb-3"
            onClick={() => setMenuOpen(false)}
          >
            eRIC AI
          </Link>

          {/* Solutions (dropdown) */}
          <div className="border-b pb-3">
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex justify-between items-center w-full"
            >
              <span>Solutions</span>
              <span className="text-xl font-bold">{solutionsOpen ? "−" : "+"}</span>
            </button>
            {solutionsOpen && (
              <div className="mt-3 pl-4 space-y-2 text-gray-300">
                {solutionsLinks.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/solutions/${item.slug}`}
                    className="block text-sm"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Technologies (dropdown) */}
          <div className="border-b pb-3">
            <button
              onClick={() => setTechnologiesOpen(!technologiesOpen)}
              className="flex justify-between items-center w-full"
            >
              <span>Technologies</span>
              <span className="text-xl font-bold">{technologiesOpen ? "−" : "+"}</span>
            </button>
            {technologiesOpen && (
              <div className="mt-3 pl-4 space-y-2 text-gray-300">
                {technologiesLinks.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/technologies/${item.slug}`}
                    className="block text-sm"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Company (dropdown) */}
          <div className="border-b pb-3">
            <button
              onClick={() => setCompanyOpen(!companyOpen)}
              className="flex justify-between items-center w-full"
            >
              <span>Company</span>
              <span className="text-xl font-bold">{companyOpen ? "−" : "+"}</span>
            </button>
            {companyOpen && (
              <div className="mt-3 pl-4 space-y-2 text-gray-300">
                {companyLinks.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/company/${item.slug}`}
                    className="block text-sm"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Insights (dropdown) */}
          <div className="border-b pb-3">
            <button
              onClick={() => setInsightsOpen(!insightsOpen)}
              className="flex justify-between items-center w-full"
            >
              <span>Insights</span>
              <span className="text-xl font-bold">{insightsOpen ? "−" : "+"}</span>
            </button>
            {insightsOpen && (
              <div className="mt-3 pl-4 space-y-2 text-gray-300">
                {insightsLinks.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/insights/${item.slug}`}
                    className="block text-sm"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className="block border-b pb-3" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
} 