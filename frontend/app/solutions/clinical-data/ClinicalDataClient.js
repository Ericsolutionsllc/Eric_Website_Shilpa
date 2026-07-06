"use client";

import { useState } from "react";
import Image from "next/image";
import Newsletter from "../../component/Register";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ClinicalData() {
  const [openIndex, setOpenIndex] = useState(0);

  const services = [
    {
      title: "Comprehensive Data Standards Library",
      description:
        "Our Data Standards Library provides a centralized repository of standardized data definitions, formats, and guidelines for clinical trials and clinical research. It ensures consistency, compliance, and efficiency across clinical data management systems, supporting seamless integration, regulatory submissions, and streamlined study processes.",
    },
    {
      title: "Seamless Data Migration Projects to CDISC Standards",
      description:
        "We specialize in efficient data migration projects, transforming legacy clinical trial data into CDISC-compliant formats. Our approach ensures accurate, standardized, and regulatory-ready data, supporting high-quality clinical studies and structured healthcare data management.",
    },
    {
      title: "Precise Standard Mapping for Data Consistency",
      description:
        "We provide expert standard mapping services to align clinical trials data with CDISC and regulatory requirements. Our approach ensures consistency, compliance, and seamless integration across data management systems, supporting accurate analysis and successful submissions.",
    },
    {
      title: "Expert Programming Services for Clinical Trials",
      description:
        "We deliver high-quality programming services for clinical trials and clinical research, including data analysis, reporting, and CDISC-compliant submissions. Our team ensures accuracy, efficiency, and regulatory compliance, supporting reliable clinical data management.",
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
              Clinical Data Standards{" "}
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
                  CDISC, done right{" "}
                  <span className="text-[#3B82F6]"> from the start</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-6 leading-relaxed text-justify text-[17px]">
                  The FDA has required CDISC-compliant study data since 2016 —
                  miss it and you risk a Refusal to File. Implementing the
                  standard at study start, rather than retrofitting before
                  submission, is the difference between a clean review and a
                  scramble. We build to CDISC from day one and convert legacy
                  data when you inherit it.
                </p>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-8 leading-relaxed text-justify text-[17px]">
                  By the end of 2016, both the FDA and PMDA made CDISC standards
                  mandatory for all submissions. Non-compliant submissions after
                  this deadline risked receiving a Refusal to File (RTF). As a
                  result, all studies initiated in 2017 or later must submit
                  data to the FDA in an electronic format adhering to CDISC
                  standards, ensuring compliance and facilitating smoother
                  regulatory reviews.
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

      <section className="bg-white pb-14">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="text-blue-600">ERIC’s</span> CDISC Expertise
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 text-gray-500 leading-relaxed text-sm md:text-[17px] text-justify">
            <p>
              At ERIC, we understand that implementing data standards from the
              beginning is essential for seamless data mapping across clinical
              trials and clinical research. We support healthcare data
              management by providing structured clinical data standardization
              aligned with industry best practices.
            </p>
            <p>
              Our expert team specializes in clinical trial data generation and
              management, ensuring precise implementation of SDTM and ADaM
              standards. We focus on accuracy, consistency, and clear
              communication of data structures, supporting efficient data
              management systems and regulatory compliance while maintaining
              high-quality outcomes.
            </p>
          </div>

          {/* Quote Box */}
          <div className="mt-8 border-l-4 border-gray-800 bg-gray-100 p-4 italic text-gray-700 text-[17px] font-medium">
            "Optimize your clinical trial data with eRIC’s CDISC expertise,
            ensuring accuracy, compliance, and streamlined data submissions."
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
