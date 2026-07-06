"use client";

import { useState } from "react";
import Image from "next/image";
import Newsletter from "../../component/Register";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

export default function InteractiveResponse() {
  const [activeTab, setActiveTab] = useState("iwrs");

  const features = [
    {
      title: "Centralizes patient enrolment",
    },
    {
      title: "Improves medication/medical device traceability.",
    },
    {
      title: "Instant email notifications when a subject is enrolled",
    },
    {
      title:"Multiple Randomisation Algorithms: Central, site, stratified, Minimisation (Pocock-Simon)",
    },
    {
      title: "21 CFR Part 11 Compliance",
    },
    {
      title: "Include your study's custom randomization algorithm",
    },
    {
      title: "Communication with external tools",
    },
    {
      title:
        "With 24/7 availability of the service, randomization can occur any time, anywhere!",
    },
  ];

  const tabs = [
    { id: "iwrs", label: "IWRS" },
    { id: "stock", label: "Stock Management" },
    { id: "regulatory", label: "Regulatory Compliance" },
  ];

  const content = {
    iwrs: {
      title: "IWRS - INTERACTIVE WEB RESPONSE SYSTEM",
      text: "Simple and intuitive. eRIC IWRS enrolls subjects into your trial 24/7 and communicates automatically with other systems, including our EDC. Where a study requires it, it also integrates with external vendors' IRT tools.",
      subheading1: "Enroll Patients in the clinical trial",
      subheading2: "Export PDF/Spreadsheet reports",
      subheading3: "Multi-language support",
      subheading4: "Real time trial and site enrolment progress",
      subheading5: "Email notification on randomisation",
    },
    stock: {
      title: "STOCK MANAGEMENT",
      text: "The stock management is an optional module that allows you to register and track the trial stock by registering movement (Shipments and returns) and see movement history in the locations involved in the clinical trial( Global and regional depots and investigational sites.",
      heading:
        "Optional features within this module include the registration of orders to manufactures, shipments/return PDF forms and location re-supply triggers.",
      subheading1: "Locate Medications and devices",
      subheading2: "View their location history",
    },
    regulatory: {
      title: "REGULATORY COMPLIANCE",
      text: "By complying with regulatory requirements of electronic systems, it replaces paper based records which greatly assists you to access the product information and records a long time after the trial is closed while avoiding manual searches.",
      heading:
        "A flexible authentication and authorization system allows restricting access to the system and to the functionalities each user can perform.",
      subheading1: "21 CFR para compliant",
      subheading2: "Exportable audit trial",
      subheading3: "Several user access levels",
    },
  };

  return (
    <>
      <section className="w-full sm:pt-26 pt-18 sm:pb-10">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <img
            src="/worldmap/blob.svg"
            alt="footer background"
            className="w-[700px] md:w-[950px] opacity-50"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Top Heading */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="sm:mb-10"
          >
            <h1 className="text-center text-3xl md:text-4xl font-bold mt-28">
              eRIC Interactive Response Technology (IRT){" "}
            </h1>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl sm:text-3xl font-bold mb-6 sm:mt-0 mt-5">
                     
                  <span className="text-[#3B82F6]">
                    Randomization{" "}
                   <span className="text-black"> and </span>{" "}
                    trial supply,
                    <span className="text-black"> under control </span>{" "}
                  </span>
                </h2>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-6 leading-relaxed text-justify text-[17px]">
                  eRIC Interactive Response Technology (IRT), offers Interactive
                  Web Response System.
                </p>
              </motion.div> */}

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-8 leading-relaxed text-justify text-[17px]">
                  eRIC IRT (RTSM) handles subject randomization and clinical trial supply management in one configurable system. It assigns subjects to arms by your scheme, manages drug inventory and resupply across sites, and protects the blind — so the right patient gets the right kit at the right time, and supply never stalls enrollment.

                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                 <Link href="/contact">
                <button className="bg-blue-500 font-bold text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                  Book Free Demo
                </button>
                </Link>
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <Image
                src="/technologies/iwrs.gif" // place image inside public folder
                alt="Clinical Operations"
                width={500}
                height={350}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#0059B2] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=" text-2xl font-bold mb-12 tracking-wide uppercase text-center">
              Features
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {features.map((feature) => (
                <div className="flex items-start gap-2">
                  <CircleCheck
                    className="mt-1 text-white font-bold"
                    size={20}
                  />

                  <h3 className="text-xl text-[17px] ">{feature.title}</h3>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="sm:py-32 py-20 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center gap-6 border-b mb-10 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 font-semibold transition px-5 py-2
        ${
          activeTab === tab.id
            ? "text-white bg-[#1e2d5b] rounded-t font-bold"
            : "text-gray-700 hover:text-black"
        }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          <div className="bg-[#6B7280] text-white rounded-lg p-10 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">
              {content[activeTab].title}
            </h2>

            <p className="text-gray-200 text-left">{content[activeTab].text}</p>
            {/* Heading */}
            {content[activeTab].heading && (
              <div className="flex items-start gap-2 py-4 text-gray-200 text-left">
                <p>{content[activeTab].heading}</p>
              </div>
            )}

            {/* Subheadings */}
            {["subheading1", "subheading2", "subheading3", "subheading4", "subheading5"].map((key, i) => {
              const value = content[activeTab][key];

              return (
                value && (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-gray-200 text-left mt-2"
                  >
                    <CircleCheck className="mt-1 text-white" size={18} />
                    <p>{value}</p>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
