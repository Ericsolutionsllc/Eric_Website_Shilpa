"use client";

import { useState } from "react";
import Image from "next/image";
import Newsletter from "../../component/Register";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ETMF() {
  const services = [
    {
      title: "Ensuring Audit Readiness",
      description:
        "At ERIC, we help sponsors maintain audit and inspection readiness across clinical trials and clinical research by ensuring accurate, compliant, and well-organized documentation. Our solutions provide real-time data tracking, version control, and automated workflows, supporting strong clinical data management and reducing compliance risks.",
    },
    {
      title: "Efficient Indexing and Workflow",
      description:
        "We optimize clinical document management with efficient indexing and automated workflows, ensuring quick access, organization, and retrieval of critical data in clinical trials. Our structured approach enhances healthcare data management, version control, and audit readiness while reducing manual effort.",
    },
    {
      title: "Powerful Analytics for Actionable Insights",
      description:
        "We use advanced analytics to transform clinical trial data into actionable insights. Our solutions provide real-time monitoring, trend analysis, and predictive modeling, helping sponsors make informed decisions while strengthening clinical data management and operational efficiency.",
    },
    {
      title: "Smart Study Start-Up",
      description:
        "We streamline site onboarding and regulatory approvals for clinical trials with an optimized Smart Study Start-Up approach. Our solutions automate workflows, accelerate document processing, and support compliance through structured data management systems, reducing delays in trial initiation.",
    },
    {
      title: "Seamless System Integration",
      description:
        "We enable seamless integration of Clinical Data Management Systems (CDMS), Clinical Trial Management Systems (CTMS), and other platforms used in clinical research. Our approach supports real-time data exchange, interoperability, and efficient healthcare data management, improving overall trial performance.",
    },
  ];

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
              eTMF Service{" "}
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
                <h2 className="text-xl sm:text-3xl font-bold mb-6 sm:mt-10 mt-5">
                  An inspection-ready 
 <span className="text-[#3B82F6]"> trial master file, always</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-6 leading-relaxed text-justify text-[17px]">
                  A trial generates thousands of documents across sites, versions, and contributors. Kept in shared drives and email, that becomes an audit risk. Our eTMF gives you one connected, version-controlled, audit-tracked file — real-time visibility into what is filed, missing, or needs review. When an inspector calls, you are ready.

                </p>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-8 leading-relaxed text-justify text-[17px]">
                  ERIC’s eTMF System and Services provide a user-friendly,
                  connected, and flexible solution for holistic clinical
                  documentation management. With real-time data lineage, version
                  control, and audit history, we ensure seamless compliance and
                  regulatory readiness.
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
                src="/solutions/clinical.gif" // place image inside public folder
                alt="Clinical Operations"
                width={500}
                height={350}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}

      <section className="bg-gray-50/2 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12">
              Services We <span className="text-[#3B82F6]">Offer</span>
            </h2>
          </motion.div>

          {/* Grid */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="sm:max-w-5xl max-w-7xl sm:ml-15 ml-0"
          >
            <div className="grid md:grid-cols-2 gap-10">
              {services.map((service, index) => (
                <div key={index} className="flex gap-5 text-xl">
                  {/* Number */}
                  <div className="w-[30px] h-[30px] p-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-semibold text-xl mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-[17px] leading-relaxed text-justify">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      <section className="bg-white pb-14">
        <div className="max-w-6xl mx-auto px-6">

          {/* Quote Box */}
          <div className="mt-8 border-l-4 border-gray-800 bg-gray-100 p-4 italic text-gray-700 text-[17px] font-medium">
          ""ERIC eTMF ensures seamless clinical trials documentation with real-time tracking, audit readiness, and compliance, supporting efficiency and data security."
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
