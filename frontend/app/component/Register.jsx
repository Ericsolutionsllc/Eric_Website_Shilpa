"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";
import { UserRound,User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NewsletterSection() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  return (
    <section className="relative py-20 px-10 bg-[#f69300]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-black">
          Ready to  {" "}
            <span className=" text-white"> scope your study?</span>
          </h1>
          <p className="text-white text-xl max-w-4xl mt-5 mx-auto">
            Tell us the protocol, the phase, and the timeline. We will come back with a fixed-fee proposal and a team that has run trials like yours.

          </p>
        </motion.div>

     

        <div className="flex items-center justify-center mt-15">
          <button
            type="submit"
            onClick={() => router.push("/contact")}
            className=" bg-blue-800 hover:bg-[#1D4ED8] text-white font-bold px-6 py-3 rounded-lg transition w-full sm:w-auto flex items-center justify-center gap-2"
          >
            {/* <UserRound /> */}
            <span className="text-2xl pb-2"><User className="mt-1"/> </span>Book a demo  
          </button>
        </div>
      </div>
    </section>
  );
}
