"use client";

import { useState } from "react";
import Image from "next/image";
import Newsletter from "../../component/Register";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

export default function ETMFTechnology() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("iwrs");

  const features = [
    {
      title: "Free up Your Internal TMF Resources",
      points: [
        "Leverage seasoned Trial Master File (TMF) Study Owners anytime anywhere. Obtain pragmatic training on TMF best practices & technology. Conduct efficient, accurate TMF migrations & imports at any scale.",
      ],
    },
    {
      title: "TMF Study Owners",
      points: [
        "Our TMF Practitioners have successfully mastered the challenges you and your teams face every day.",
      ],
    },
    {
      title: "Optimize Processes & Qualit",
      points: [
        "Get a holistic view of completeness, timeliness & quality. Pinpoint & correct TMF completeness gaps. Embed TMF best practices around quality control & compliance. Obtain expert guidance for SOPs & eTMF technologies.",
      ],
    },
    {
      title: "TMF Consulting Services",
      points: [
        "Our expert TMF consultants help your company reach and stay in the TMF Health Zone.",
      ],
    },
    {
      title: "Make Your eTMF System Work For You",
      points: [
        "Align TMF technology with your people & processes. Leverage your eTMF to develop & automate better TMF workflows. Obtain hands-on, system-specific eTMF training.",
      ],
    },
    {
      title: "Migrations & Imports",
      points: [
        "Help ensure you are meeting GCP standards and regulatory requirements for essential documents.",
      ],
    },
    {
      title: "TMF Completeness Heatmaps",
      points: [
        "Easily identify potential TMF problem areas in any eTMF system and enable a risk-based remediation approach.",
      ],
    },
    {
      title: "TMF Expert Training",
      points: [
        "Generate lasting benefits to your team and improve the overall health of your TMF.",
      ],
    },
    {
      title: "TMF Quality Review",
      points: [
        "A thorough quality assessment of your TMF, giving you detailed insight into its quality and completeness.",
      ],
    },
    {
      title: "eTMF Health Dashboard",
      points: [
        "For inspection-readiness, the critical attributes of TMF health are completeness, timeliness, and quality. To achieve and maintain ongoing TMF health and inspection readiness – the “TMF Health Dashboard” – requires experienced people trained on effective processes using the right technology.",
      ],
    },
    {
      title: "TMF Document Processing",
      points: [
        "Ensure completeness, accuracy, and consistency from source to archive - regardless of your eTMF provider.",
      ],
    },
    {
      title: "Full-Service Trial Master File Management",
      points: [
        "The Industry’s Only Turnkey, End-to-End TMF Outsourcing Solution from a Single Expert Provider.",
      ],
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
      text: "IWRS helps manage patient randomization, drug supply, and clinical trial workflows through secure web-based systems.",
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

  const toggleFeature = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="w-full sm:pt-26 pt-18">
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
          >
            <h1 className="text-center text-3xl md:text-4xl font-bold mt-28">
              Electronic Trial Master File (eTMF) System{" "}
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
                  The platform behind an 
 <span className="text-[#3B82F6]"> always-ready TMF</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-6 leading-relaxed text-justify text-[17px]">
                  ERIC eTMF makes continuous inspection-readiness possible. It manages semi-structured and unstructured trial documents across sites and contributors, with real-time tracking, version control, and full audit history — structured to the TMF Reference Model. Pair it with our eTMF Services or run it as your own platform.

                </p>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-8 leading-relaxed text-justify text-[17px]">
                  A related feature set, the electronic Investigator Site File
                  (eISF) portal, can work in conjunction with your eTMF to
                  facilitate document exchange between sponsor/CRO and sites.
                </p>
              </motion.div> */}
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
                src="/technologies/ctms.gif" // place image inside public folder
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
            <h2 className=" text-2xl font-bold mb-12 tracking-wide uppercase text-center sm:mr-40">
              Features
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="md:col-span-1">
                  {/* Title */}
                  <div
                    className="flex items-start gap-3 cursor-pointer"
                    onClick={() => toggleFeature(index)}
                  >
                    <span className="text-5xl font-light mt-[-10px]">
                      {openIndex === index ? "×" : "+"}
                    </span>

                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>

                  {/* Expanded Content */}
                  {openIndex === index && (
                    <ul className="col-span-2 mt-4 ml-7 space-y-2 text-lg text-blue-100 list-disc text-justify">
                      {feature.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
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
            {["subheading1", "subheading2", "subheading3"].map((key, i) => {
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
