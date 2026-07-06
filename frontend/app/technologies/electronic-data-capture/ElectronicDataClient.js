"use client";

import { useState } from "react";
import Image from "next/image";
import Newsletter from "../../component/Register";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ElectronicData() {
  const [openServiceIndex, setOpenServiceIndex] = useState(null);
  const [openFeatureIndex, setOpenFeatureIndex] = useState(null);

  const services = [
    {
      title: "Deploy Studies Faster",
      points: [
        "Create advanced eCRFs in minutes.",
        "Deploy your study in as little as 3 weeks.",
        "Manage study complexities with best-in-class support.",
      ],
    },
    {
      title: "Decentralized Data Integration",
      points: [
        "Integrate data from EHR, eCRF, ePRO/eCOA, laboratory, wearables, and other devices.",
        "Integrate with any software or database in your clinical trial ecosystem using ERIC’s open API.",
      ],
    },
    {
      title: "Real-Time Visibility",
      points: [
        "Get an overview of study statistics as your studies are ongoing.",
        "Track data entry progress and outstanding queries.",
        "View verification status (SDV) for steps.",
        "eRIC introduces enhanced analytical dashboards.",
      ],
    },
    {
      title: "Achieve Global Compliance Easily",
      points: [
        "Comply with global standards such as FDA CFR Part 11, GDPR (EU), ICH GCP, HIPAA (US), ISO 27001, and ISO 9001.",
        "Align with GCP, HL7 FHIR, and other regulatory guidelines.",
        "Adhere to GCP, HL7 FHIR, and other regulatory guidelines.",
      ],
    },
  ];

  const features = [
    {
      title: "Build Advanced eCRFs Quickly",
      points: [
        "Begin with one of our pre-built eCRF templates.",
        "Customize your form with 21 different field types.",
        "Clone and reuse forms as you develop additional studies.",
      ],
    },
    {
      title: "Store Data Securely",
      points: [
        "Store study data in real-time.",
        "Store it automatically on certified, compliant servers in any country.",
        "Safeguard your data with 25-year retention, field-level encryption, and two-factor authentication.",
      ],
    },
    {
      title: "Amend Studies With Less Risk",
      points: [
        "Simplify protocol amendments with a tool that’s secure, trackable, and easy to validate.",
        "Easily create test environments for your subsequent studies.",
      ],
    },
    {
      title: "Achieve Global Compliance Easily",
      points: [
        "Comply with global standards such as FDA CFR Part 11, GDPR (EU), ICH GCP, HIPAA (US), ISO 27001, and ISO 9001.",
        "Align with GCP, HL7 FHIR, and other regulatory guidelines.",
        "Adhere to GCP, HL7 FHIR, and other regulatory guidelines.",
      ],
    },
  ];

  const toggleService = (index) => {
    setOpenServiceIndex(openServiceIndex === index ? null : index);
  };

  const toggleFeature = (index) => {
    setOpenFeatureIndex(openFeatureIndex === index ? null : index);
  };

  return (
    <>
      <section className="w-full sm:pt-26 pt-18 pb-10">
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
            className="sm:mb-6"
          >
            <h1 className="text-center text-3xl md:text-4xl font-bold mt-28">
              eRIC Electronic Data Capture(EDC)
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
                  Capture clean data from 

                  <span className="text-[#3B82F6]">
                    {" "}
                      the first patient
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
                eRIC EDC is our electronic data capture platform for trials of any phase and size. Built-in edit checks catch errors at entry, CDISC alignment is there from the start, and the eRIC AI DB Designer turns protocol-to-CRF build into a fast, validated process instead of a long manual cycle.

                </p>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-8 leading-relaxed text-justify text-[17px]">
                  Explore ERIC EDC, our most robust module, to see how it can
                  help you capture and manage all your study data in one
                  centralized hub. If your needs extend further, easily
                  incorporate ERIC eConsent and ePRO to build a comprehensive
                  ecosystem of research tools.
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
                src="/technologies/edc.gif" // place image inside public folder
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
      <section className="bg-[#0059B2] text-white pt-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=" text-2xl font-bold mb-8 tracking-wide uppercase text-center">
              Capture and Re-use Research Data from anywhere and anytime
            </h2>

            <p className=" mb-12 tracking-wide  text-center text-[17px] text-justify">
              Explore ERIC EDC, our most robust module, to see how it can help
              you capture and manage all your study data in one centralized hub.
              If your needs extend further, easily incorporate ERIC eConsent and
              ePRO to build a comprehensive ecosystem of research tools.{" "}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index}>
                  {/* Title Row */}
                  <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => toggleService(index)}
                  >
                    <span className="text-5xl font-light mt-[-10px]">
                      {openServiceIndex === index ? "×" : "+"}
                    </span>

                    <h3 className="text-xl font-semibold ">{service.title}</h3>
                  </div>

                  {/* Description */}
                  {openServiceIndex === index && (
                    <ul className="mt-4 ml-7 space-y-2 text-lg text-blue-100 list-disc max-w-5xl text-justify">
                      {service.points.map((point, i) => (
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
              {features.map((feature, index) => (
                <div key={index}>
                  {/* Title Row */}
                  <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => toggleFeature(index)}
                  >
                    <span className="text-5xl font-light mt-[-10px]">
                      {openFeatureIndex === index ? "×" : "+"}{" "}
                    </span>

                    <h3 className="text-xl font-semibold ">{feature.title}</h3>
                  </div>

                  {/* Description */}
                  {openFeatureIndex === index && (
                    <ul className="mt-4 ml-7 space-y-2 text-lg text-blue-100 list-disc max-w-5xl text-justify">
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

      <Newsletter />
    </>
  );
}
