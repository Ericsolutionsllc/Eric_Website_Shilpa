"use client";

import { useState } from "react";
import Image from "next/image";
import Newsletter from "../../component/Register";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DataManagement() {
  const [openIndex, setOpenIndex] = useState(0);

  const services = [
    {
      title: "CRF Design at ERIC",
      description:
        "At ERIC, we specialize in Case Report Form (CRF) design for clinical trials and clinical research, ensuring seamless data collection, accuracy, and regulatory compliance. Our team develops customized CRFs aligned with study protocols, supporting Electronic Data Capture (EDC) and efficient healthcare data management.",
    },
    {
      title: "Database Design (eCRF & Paper) at ERIC",
      description:
        "Our team develops protocol-driven databases optimized for Electronic Data Capture (EDC) and paper-based workflows. With a focus on clinical data management, validation, and regulatory standards, we create structured and audit-ready databases that support efficient clinical studies.",
    },
    {
      title: "Data Management & SAS Programming at ERIC",
      description:
        "At ERIC, our Data Management and SAS Programming team ensures accurate and compliant clinical trial data processing. We specialize in data cleaning, validation, and transformation, supporting advanced data management systems and consistent clinical research outcomes.",
    },
    {
      title: "Blinded Data Entry at ERIC",
      description:
        "We ensure accurate and unbiased blinded data entry for clinical trials, maintaining data integrity and compliance. Our trained professionals manage electronic (eCRF) and paper-based inputs with strong quality control, supporting reliable clinical data management and confidentiality.",
    },
    {
      title: "Data Validation at ERIC",
      description:
        "We ensure accuracy, consistency, and compliance in clinical trials through structured data validation processes. Our experts use automated and manual checks to identify discrepancies, supporting high-quality datasets and strong healthcare data management practices.",
    },
    {
      title: "Clinical Data Coding",
      description:
        "We provide standardized and compliant clinical data coding for clinical research and clinical studies. Using industry dictionaries such as MedDRA and WHODrug, we ensure accurate classification of adverse events, medications, and medical history, maintaining data consistency and regulatory compliance.",
    },
    {
      title: "External Data Handling at ERIC",
      description:
        "At ERIC, we specialize in external data handling for clinical trials and clinical research, integrating data from central labs, biomarkers, imaging, and third-party vendors into clinical data management systems. Our team ensures data consistency, accuracy, and compliance through structured healthcare data management processes.",
    },
    {
      title: "SAE Reconciliation at ERIC",
      description:
        "We ensure accurate and compliant Serious Adverse Event (SAE) reconciliation across clinical trials, aligning clinical and safety databases to maintain data integrity. Our experts compare and validate data from multiple sources, supporting reliable clinical data management and regulatory compliance.",
    },
    {
      title: "Medical Review at ERIC",
      description:
        "Our medical review process ensures the accuracy, consistency, and clinical relevance of data in clinical studies and clinical research. Experts conduct detailed assessments to identify discrepancies, protocol deviations, and safety concerns, ensuring high-quality healthcare data management.",
    },
    {
      title: "Protocol Validation at ERIC",
      description:
        "We ensure structured protocol validation across clinical trials to align with regulatory guidelines and study objectives. Our experts review CRFs, Electronic Data Capture (EDC) systems, and analysis plans to support consistent clinical data management and accurate execution.",
    },
    {
      title: "Database Closure at ERIC",
      description:
        "We support a seamless and compliant database closure process, the final stage of clinical data management in clinical trials. Our team performs validation, discrepancy resolution, and quality checks to ensure accurate and reliable data before database lock.",
    },
    {
      title: "Data Mapping (CDISC) at ERIC",
      description:
        "We specialize in CDISC-compliant data mapping for clinical research, enabling structured conversion of clinical trial data into SDTM and ADaM formats. Our approach enhances data consistency, traceability, and compliance across healthcare data management systems for regulatory submissions.",
    },
  ];

 

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
              Data Management Services
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
                  Clean data, 
                  <span className="text-[#3B82F6]">
                    {" "}
locked on time
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-6 leading-relaxed text-justify text-[17px]">
                  Our data management team supports every stage — from CRF design and EDC build to database lock — across EDC and paper workflows. We work to CDISC standards from day one, so there is no painful conversion later and a smoother regulatory review. Where it speeds you up without giving up control, the Eric AI agents do the heavy lifting on build and entry.

                </p>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-8 leading-relaxed text-justify text-[17px]">
                  With extensive experience across various therapeutic areas, we
                  utilize EDC and paper-based systems while adhering to strict
                  quality standards. Our expertise in advanced data management
                  technologies ensures accurate, efficient, and compliant
                  clinical trials.
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
                    <p className="text-gray-600 text-[17px] leading-relaxed text-justify">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

     

      <Newsletter />
    </>
  );
}
