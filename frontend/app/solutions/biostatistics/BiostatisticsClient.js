"use client";

import { useState } from "react";
import Image from "next/image";
import Newsletter from "../../component/Register";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Biostatistics() {
  const services = [
    {
      title: "Precise Sample Size Calculation",
      description:
        "We provide accurate and scientifically validated sample size calculations for clinical trials and clinical research, tailored to your study design. Our expertise ensures optimal participant numbers, balanced statistical power, and efficient clinical data management for reliable study outcomes.",
    },
    {
      title: "Expert Statistical Input in Protocol Development",
      description:
        "We offer specialized statistical input during protocol development for clinical trials, ensuring robust methodologies, clear endpoints, and optimized study structures. Our approach supports strong clinical data management and improves the quality of clinical research outcomes.",
    },
    {
      title: "Comprehensive Statistical Analysis Plans",
      description:
        "We develop detailed Statistical Analysis Plans (SAPs) for clinical trials and clinical studies, outlining clear methodologies and analytical approaches. Our plans ensure consistency, regulatory compliance, and reliable interpretation within structured data management systems.",
    },
    {
      title: "Expert Interim Analysis for Informed Decision Making",
      description:
        "We conduct thorough interim analyses across clinical trials, providing critical insights for informed decision making. Our approach supports timely adjustments, improves efficiency, and maintains data integrity through effective healthcare data management practices.",
    },
    {
      title: "Clear and Comprehensive Tables, Listings, and Figures (TLFs)",
      description:
        "We deliver structured tables, listings, and figures (TLFs) that present clinical trial data with clarity and precision. These outputs support regulatory submissions, enhance interpretation, and strengthen clinical data management for better decision making.",
    },
    {
      title:
        "Comprehensive Statistical Reports and CDISC-Compliant Data Submissions for USFDA",
      description:
        "We provide detailed statistical reports and CDISC-compliant submissions for clinical trials and clinical research, ensuring accuracy and regulatory compliance. Our expertise supports seamless data submissions through advanced data management systems and improves approval outcomes.",
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
              Biostatistics{" "}
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
                  Statistics that hold up{" "}
                  <span className="text-[#3B82F6]"> under review</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-6 leading-relaxed text-justify text-[17px]">
                  Our biostatisticians work across every phase, from sample-size
                  justification in the protocol to the statistical reports in
                  your submission. We support interim analyses, adaptive
                  designs, and sample-size re-estimation, and we provide
                  independent statistical support to data-monitoring committees.
                  Built to ICH E9 and FDA expectations.
                </p>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-8 leading-relaxed text-justify text-[17px]">
                  Additionally, we actively participate in Independent Data
                  Monitoring Committees (IDMCs), offering unbiased statistical
                  support and aiding in critical decision-making processes
                  independently of the sponsor.
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

      <Newsletter />
    </>
  );
}
