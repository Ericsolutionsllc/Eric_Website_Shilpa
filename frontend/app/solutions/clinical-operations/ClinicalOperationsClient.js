"use client";

import { useState } from "react";
import Image from "next/image";
import Newsletter from "../../component/Register";
import {motion} from "framer-motion";
import Link from "next/link";

export default function ClinicalOperations() {
  const [openIndex, setOpenIndex] = useState(0);

  const services = [
    {
      title: "Expert Project Management for Clinical Trials and Clinical Research Programs",
      description:
        "We specialize in the seamless management of clinical trials and clinical research programs, ensuring precision, compliance, and efficiency at every stage. Our expertise supports successful outcomes while aligning with global standards and timelines.",
    },
    {
      title: "Quality Clinical Monitoring: On-Site, Remote, and Centralized",
      description:
        "eRIC SOLUTIONS delivers advanced clinical monitoring solutions for clinical trials, offering flexibility through on-site, remote, and centralized approaches. With a strong focus on clinical data management and healthcare data management, we ensure efficiency, compliance, and seamless data flow.",
    },
    {
      title: "Optimized Resourcing for Maximum Efficiency",
      description:
        "We specialize in delivering optimized resourcing strategies tailored to clinical research needs, ensuring the right talent and tools are in place. Our approach supports efficient data management systems, reduces costs, and drives consistent results.",
    },
    {
      title:
        "Smart Study Start-Up: Streamlined Site Onboarding and Regulatory Approvals",
      description:
        "Our smart study start-up approach supports faster clinical trials by optimizing site onboarding and accelerating regulatory approvals. By leveraging AI in healthcare and structured clinical data management processes, we help improve efficiency and execution.",
    },
    {
      title: "Site and Patient Solutions: Enhancing Recruitment and Engagement",
      description:
        "eRIC SOLUTIONS provides innovative site and patient solutions for clinical studies, focusing on effective recruitment and meaningful engagement. Through strong partnerships and structured healthcare data management, we support smooth trial execution and improved participation.",
    },
  ];

  const features = [
    {
      title: "Accurate, Complete, and Consistent Data Collection",
      points: [
        "We ensure precise, thorough, and reliable data collection across clinical trials and clinical research, minimizing errors and discrepancies throughout the process. Our advanced clinical data management and healthcare data management systems support strong data integrity, enabling confident decision making and regulatory compliance through effective data management systems and AI in healthcare.",
      ],
    },
    {
      title: "Ensuring Participant Safety and Well-Being",
      points: [
        "We prioritize the safety and well-being of participants in clinical trials and clinical studies by proactively monitoring their health and addressing adverse events and safety concerns. Our structured approach, supported by clinical research standards and healthcare data management systems, ensures a secure and ethical trial environment while maintaining compliance and trust.",
      ],
    },
    {
      title: "Ensuring Protocol Adherence and Procedural Compliance",
      points: [
        " We ensure that your clinical trials and clinical research are conducted in strict alignment with study protocols and defined procedures. Our structured oversight, supported by clinical data management and healthcare data management systems, ensures consistency, accuracy, and compliance while safeguarding the integrity and success of every trial.",
      ],
    },
    {
      title: "Ensuring Regulatory Compliance and GCP Standards",
      points: [
        " We ensure full compliance with regulatory requirements and guidelines across clinical trials and clinical research, including Good Clinical Practice (GCP) standards. Our structured processes, supported by clinical data management and healthcare data management systems, help ensure every study meets regulatory expectations while maintaining data integrity and trust.",
      ],
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
        viewport={{once:true}}
      >
          <h1 className="text-center text-3xl md:text-4xl font-bold mt-28 ">
            Clinical Operation & Project Management
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
        viewport={{once:true}}
      >
              <h2 className="text-xl sm:text-3xl font-bold mb-6 sm:mt-0 mt-5">
                The operational 

                <span className="text-[#3B82F6]"> core of your trial</span>
              </h2>

              </motion.div>

              <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{once:true}}
      >
              <p className="text-gray-500 mb-6 leading-relaxed text-justify text-[17px]">
                Clinical operations is where a protocol becomes a running study. Our project managers work to consistent, GCP-aligned processes so sites activate on time, data flows cleanly, and problems surface early — not at the audit. Experienced people plus our own CTMS, EDC, and eTMF platforms deliver faster timelines at lower cost than the traditional CRO model.

              </p>
              </motion.div>

              <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{once:true}}
      >

              {/* <p className="text-gray-500 mb-8 leading-relaxed text-justify text-[17px]">
                At Eric Solutions, we combine services and systems to deliver
                tailored solutions with faster timelines and cost-effective
                results, ensuring exceptional value for our clients.
              </p> */}
              </motion.div>
              <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{once:true}}
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

      <section className="bg-gray-50/2 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{once:true}}
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
        viewport={{once:true}}
        className="sm:max-w-5xl max-w-7xl sm:ml-15 ml-0"
      >
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={index} className="flex gap-4 text-xl">
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

      {/* Features */}
      <section className="bg-[#0059B2] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{once:true}}
      >
          <h2 className="text-left text-2xl font-bold mb-12 tracking-wide uppercase">
            eRIC SOLUTIONS CLINICAL MONITORING: DELIVERING OPTIMIZED SOLUTIONS
          </h2>
          </motion.div>

          <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{once:true}}
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
                    {openIndex === index ? "×" : "+"}
                  </span>

                  <h3 className="text-xl font-semibold ">{feature.title}</h3>
                </div>

                {/* Description */}
                {openIndex === index && (
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
