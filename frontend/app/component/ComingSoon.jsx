"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EricComingSoon() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-md h-[300px] md:h-[400px]">
            <Link   href="https://ai.ericsolutions.com/" target="blank">
            <Image
              src="/comingsoon/eRIC AI logo.gif"
              alt="eRIC AI — AI agents for clinical trials"
              fill
              className="object-contain"
              priority
            />
            </Link>
          </div>
        </motion.div>

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-4xl font-bold text-black leading-tight">
            eRIC AI:  <span className="text-[#0B5EA8]">AI agents that accelerating clinical trials, responsibly</span>
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            From protocol design to analysis-ready data, eRIC AI applies artificial intelligence deliberately to remove operational bottlenecks — with humans firmly in control. Seven agents cover database design, data entry, monitoring, statistics, medical writing, document management, and project management. eRIC AI is live now.

          </p>

          <div className="mt-6">
            <Link
              href="https://ai.ericsolutions.com/" target="blank"
              className="inline-block bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Explore eRIC AI   
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
