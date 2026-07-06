// "use client";

// export default function CaseStudySection() {
//   const stats = [
//     {
//       value: "19 days",
//       label: "database design complete (USA, 4 sites, 60 subjects).",
//     },
//     {
//       value: "5 wks",
//       label: "of signing — first site initiated.",
//     },
//     {
//       value: "27%",
//       label: "faster than the industry average.",
//     },
//   ];

//   return (
//     <section className="bg-white py-12 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-16">

//           <h2 className="text-4xl md:text-5xl font-bold text-[#0B5EA8] leading-tight max-w-4xl mx-auto mb-5">
//            Case Study
//           </h2>
//           <span className="inline-block text-[#15325B] font-semibold tracking-wide uppercase text-sm mb-4">
//              Breast-cancer study start-up, accelerated
//           </span>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {stats.map((item, index) => (
//             <div
//               key={index}
//               className="border border-gray-100 shadow-xl rounded-3xl h-[220px] flex flex-col items-center justify-center text-center px-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
//             >
//               <h3 className="text-3xl md:text-4xl font-bold text-[#0B5EA8] mb-6">
//                 {item.value}
//               </h3>

//               <p className="text-gray-600 text-lg">{item.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Description */}
//         <div className="mt-14 text-center">
//           <p className="text-gray-600 italic text-lg leading-relaxed">
//            Breast-cancer study • USA • 4 sites • 60 subjects
//           </p>

//           {/* <div className="mt-6 max-w-3xl mx-auto space-y-3 text-gray-700 text-[17px] leading-relaxed">
//             <p>
//               <span className="font-semibold text-[#15325B]">19 days</span> —
//               database design complete.
//             </p>

//             <p>
//               <span className="font-semibold text-[#15325B]">
//                 Within 5 weeks
//               </span>{" "}
//               of signing — first site initiated.
//             </p>

//             <p>
//               <span className="font-semibold text-[#15325B]">27% faster</span>{" "}
//               than the industry average.
//             </p>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  Layers,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function CaseStudies() {
  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      </div> */}

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* HEADING */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-indigo-600 text-sm font-medium">Featured Case Study</span>
          </div> */}
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#0B5EA8] mb-5">
            Case Study
          </h2>
          {/* <p className="text-slate-500 text-xl max-w-2xl mx-auto">
            Breast-cancer study start-up, accelerated
          </p> */}
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative "
        >
          {/* Premium gradient border on hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0B5EA8] via-[#0B5EA8] to-[#0B5EA8] rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-300 shadow-xl p-8 cursor-pointer hover:shadow-2xl hover:-translate-y-2"></div>

          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Top gradient bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#0B5EA8] via-[#0B5EA8] to-[#0B5EA8]"></div>

            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                    Breast-cancer study start-up, accelerated
                  </h3>
                  {/* <div className="flex items-center gap-3 text-slate-500">
                    <span className="flex items-center gap-1">
                      <span className="font-medium">Breast-cancer study </span>
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>USA</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>4 Sites</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>60 Subjects</span>
                  </div> */}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {/* Database Design - Hero Metric */}
                <div className="bg-gradient-to-br from-[#0B5EA8] to-[#0B5EA8] rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group/metric">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/metric:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    {/* <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-indigo-200" />
                      <p className="text-sm font-medium text-indigo-200 uppercase tracking-wider">
                        19 days DB design
                      </p>
                    </div> */}
                    {/* <p className="text-6xl md:text-7xl font-bold mb-2">
                      19<span className="text-3xl"> Days</span>
                    </p> */}
                    <p className="text-indigo-white text-xl font-bold">
                      19 days — database design complete (USA, 4 sites, 60
                      subjects).
                    </p>
                  </div>
                </div>

                {/* First Site Initiation */}
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-indigo-200 transition-colors">
                  {/* <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-5 h-5 text-[#0B5EA8]" />
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                      5 wks to first site initiated
                    </p>
                  </div> */}
                  <p className="text-2xl font-bold text-slate-800 mb-2">
                    Within 5 weeks of signing — first site initiated.
                  </p>
                  {/* <div className="flex items-center gap-2 text-sm text-emerald-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>27% faster than industry average</span>
                  </div> */}
                </div>
              </div>

              {/* Key Achievements */}
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { label: "Study Scale", value: "4 Sites • 60 Subjects" },
                  { label: "Data Quality", value: "99.8% Accuracy" },
                  { label: "Regulatory", value: "100% Compliant" },
                  { label: "Timeline", value: "32% Compressed" },
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-slate-50/50">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-sm font-semibold text-slate-700">{item.value}</p>
                  </div>
                ))}
              </div> */}

              {/* Outcome Section */}
              <div className="relative bg-gradient-to-r from-gray-50 via-gray-50 to-gray-50 rounded-2xl p-8 overflow-hidden border border-indigo-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full blur-2xl opacity-50"></div>
                <div className="relative z-10">
                  {/* <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-[#0B5EA8]" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#0B5EA8]">
                      faster startup
                    </p>
                  </div> */}
                  <p className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed">
                    27% faster than the industry average.
                  </p>
                  {/* <div className="mt-4 flex items-center gap-2 text-sm text-[#0B5EA8]">
                    <ArrowUpRight className="w-4 h-4" />
                    <span className="font-medium">Read full case study</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
