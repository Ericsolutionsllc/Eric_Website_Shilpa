"use client";

import {
  ShieldCheck,
  BrainCircuit,
  Microscope,
  BadgeDollarSign,
} from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Oncology & Trial Experience",
    description:
      "We run early-phase oncology and complex trials end to end and know exactly where they slow down.",
  },
  {
    icon: BrainCircuit,
    title: "AI With Humans In Control",
    description:
      "eRIC AI removes repetitive work while a person approves every output.",
  },
  {
    icon: BadgeDollarSign,
    title: "Fixed-Fee Transparency",
    description:
      "Every line item documented; pass-throughs at actuals, 0% mark-up.",
  },
];

export default function WhySponsorsChoose() {
  return (
    <section className="relative overflow-hidden bg-[#0B5EA8] py-12 sm:py-20">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#4f2e80]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#4f2e80]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Why Sponsors Choose{" "}
            <span className="text-white">eRIC SOLUTIONS</span>
          </h2>

    


          {/* <p className="mt-5 text-lg text-white leading-relaxed">
            Combining deep clinical expertise with AI-powered efficiency to
            deliver faster, transparent, and reliable trial operations.
          </p> */}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4f2e80]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                {/* Icon */}
                <div className="flex">
                    <div className="relative w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-[#4f2e80]/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#0B5EA8]" />
                </div>
                <div className="ml-4 mt-1 sm:mt-4">
                  <h3 className="text-md sm:text-lg font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                </div>
                </div>
                

                {/* Content */}
                <div className="relative">
                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
