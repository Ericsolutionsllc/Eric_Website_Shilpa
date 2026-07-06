"use client";

import { motion, MotionConfig } from "framer-motion";
import Link from "next/link";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  return (
    <>
      {/* DESKTOP */}
      <section className=" hidden lg:block relative w-full sm:mt-30 sm:pb-20 bg-gradient-to-l from-[#024c9c] via-[#012a63] to-[#02103b] overflow-hidden">
        <div className="relative z-20 flex items-center h-full mt-35 sm:mt-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* IMAGE SECTION */}
              <div className="order-1 md:order-2 flex justify-center pt-6 md:pt-0">
                {/* Fixed size container */}
                <div className="relative w-[550px] h-[510px]">
                  <img
                    src="/herosection/chakara.gif"
                    alt="animation"
                    className="absolute inset-0 w-full h-full object-contain"
                  />

                  <img
                    src="/herosection/chakara/centerpart.png"
                    alt="middle layer"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] object-contain z-10 pointer-events-none"
                  />

                  {/* clinical project management */}
                  <Link href="/solutions/clinical-operations">
                    <motion.img
                      src="/herosection/chakara/1.png"
                      className="absolute h-[103px] cursor-pointer z-20 transition-all duration-30  hover:-translate-x-0.5 hover:-translate-y-0.5"
                      style={{
                        top: "161px",
                        left: "40px",
                      }}
                    />
                  </Link>

                  {/* Data Management */}
                  <Link href="/solutions/data-management">
                    <motion.img
                      src="/herosection/chakara/2.png"
                      className="absolute h-[120px] object-contain z-20 cursor-pointer transition-all duration-30  hover:-translate-x-1 hover:-translate-y-1"
                      style={{
                        top: "80px",
                        left: "70px",
                      }}
                    />
                  </Link>

                  {/* Clinical data standards */}
                  <Link href="/solutions/clinical-data">
                    <motion.img
                      src="/herosection/chakara/3.png"
                      className="absolute h-[114px] cursor-pointer z-20 transition-all duration-30  hover:-translate-x-0.5 hover:-translate-y-1"
                      style={{
                        top: "33px",
                        left: "134px",
                      }}
                    />
                  </Link>

                  {/* Medical Writing */}
                  <Link href="/solutions/medical-writing">
                    <motion.img
                      src="/herosection/chakara/4.png"
                      className="absolute h-[90px] w-[97px] cursor-pointer z-20 transition-all duration-30  hover:-translate-x-0 hover:-translate-y-1"
                      style={{
                        top: "29px",
                        left: "227.5px",
                      }}
                    />
                  </Link>

                  {/* Bio stats */}
                  <Link href="/solutions/biostatistics">
                    <motion.img
                      src="/herosection/chakara/5.png"
                      className="absolute h-[110px] cursor-pointer z-20 transition-all duration-30  hover:translate-x-0.5 hover:-translate-y-0.5"
                      style={{
                        top: "36px",
                        left: "302px",
                      }}
                    />
                  </Link>

                  {/* ETMF services */}
                  <Link href="/solutions/eTMF">
                    <motion.img
                      src="/herosection/chakara/6.png"
                      className="absolute h-[119px] cursor-pointer z-20 transition-all duration-30  hover:translate-x-0.5 hover:-translate-y-0.5"
                      style={{
                        top: "80px",
                        left: "358px",
                      }}
                    />
                  </Link>

                  {/* Pharma */}
                  <Link href="/solutions/pharmacovigilance">
                    <motion.img
                      src="/herosection/chakara/7.png"
                      className="absolute w-[111px] cursor-pointer z-20 transition-all duration-30 hover:translate-x-0.5 hover:-translate-y-0"
                      style={{
                        top: "160px",
                        left: "394px",
                      }}
                    />
                  </Link>

                  {/* Interactive Response Technology */}
                  <Link href="/technologies/interactive-response-technology">
                    <motion.img
                      src="/herosection/chakara/8.png"
                      className="absolute w-[125px] cursor-pointer z-20 transition-all duration-30  hover:-translate-x-0.5 hover:translate-y-0.5"
                      style={{
                        top: "248px",
                        left: "51px",
                      }}
                    />
                  </Link>

                  {/* Clinical Trial */}
                  <Link href="/technologies/clinical-trial-management-software">
                    <motion.img
                      src="/herosection/chakara/9.png"
                      className="absolute w-[145px] cursor-pointer z-20 transition-all duration-30 hover:-translate-x-0.5 hover:translate-y-1"
                      style={{
                        top: "332px",
                        left: "95px",
                      }}
                    />
                  </Link>

                  {/* Electronic data */}
                  <Link href="/technologies/electronic-data-capture">
                    <motion.img
                      src="/herosection/chakara/10.png"
                      className="absolute h-[100px] cursor-pointer z-20 transition-all duration-30 hover:-translate-x-0 hover:translate-y-1"
                      // w-[154px]
                      style={{
                        top: "381px",
                        left: "197px",
                      }}
                    />
                  </Link>

                  {/* Electronic Trials */}
                  <Link href="/technologies/etmf-technology">
                    <motion.img
                      src="/herosection/chakara/11.png"
                      className="absolute w-[149px] cursor-pointer z-20 transition-all duration-30 hover:translate-x-0.5 hover:translate-y-1"
                      style={{
                        top: "337px",
                        left: "303px",
                      }}
                    />
                  </Link>

                  {/* Pharma  */}
                  <Link href="/solutions/pharmacovigilance">
                    <motion.img
                      src="/herosection/chakara/12.png"
                      className="absolute w-[122px] cursor-pointer z-20 transition-all duration-30 hover:translate-x-1 hover:translate-y-0"
                      style={{
                        top: "246px",
                        left: "378px",
                      }}
                    />
                  </Link>
                </div>
              </div>

              {/* TEXT */}
              <div className="order-2 md:order-1 text-white pl-0 sm:pl-4 pt-0 sm:pt-9">
                <h1 className="text-3xl md:text-3xl font-bold leading-tight">
                  Clinical Trials, 
                </h1>
                <h1 className="text-3xl md:text-3xl font-bold leading-tight">
                  Run with Precision and AI Efficiency
                </h1>

                <p className="mt-5 text-sm md:text-[16.5px] text-gray-400">
                  
                  <span className="font-bold text-white">
                    {" "}
                    eRIC SOLUTIONS
                  </span>{" "}
                   is a full-service CRO and regulatory affairs partner. We run Phase I–IV clinical trials and the data, biostatistics, safety, and regulatory work behind them — for pharma, biotech, and medical-device sponsors in the US, Europe, and Asia. Our eRIC AI agents remove the operational bottlenecks that slow trials down, with humans in control.
                </p>

                <div className="mt-7 flex flex-wrap gap-3 mb-6">
                  <Link href="contact">
                    <button className="bg-blue-800 px-6 py-3 rounded-sm  hover:bg-[#1D4ED8] transition">
                      Book a demo
                    </button>
                  </Link>

                  <Link href="/company/about">
                    <button className="bg-white text-black px-6 py-3 rounded-sm  hover:bg-gray-300 transition">
                      Why eRIC SOLUTIONS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAB VIEW ONLY */}
      <section className="hidden sm:block lg:hidden relative w-full pt-50 pb-16 bg-gradient-to-l from-[#024c9c] via-[#012a63] to-[#02103b] overflow-hidden">
        <div className="relative z-20 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-8 w-full">
            {/* UPDATED TABLET LAYOUT */}
            <div className="flex flex-col items-center text-center gap-10">
              {/* IMAGE SECTION */}
              <div className="flex justify-center">
                <div className="relative w-[560px] h-[560px]">
                  <img
                    src="/herosection/chakara.gif"
                    alt="animation"
                    className="absolute inset-0 w-[520px] h-[520px] object-contain mt-5 ml-3"
                  />

                  <img
                    src="/herosection/chakara/centerpart.png"
                    alt="middle layer"
                    className="absolute top-[284px] left-[275px] -translate-x-1/2 -translate-y-1/2 w-[335px] object-contain z-10 pointer-events-none"
                  />

                  {/* clinical project management */}
                  <Link href="/solutions/clinical-operations">
                    <motion.img
                      src="/herosection/chakara/1.png"
                      className="absolute h-[103px] cursor-pointer z-20 transition-all duration-30  hover:-translate-x-0.5 hover:-translate-y-0.5"
                      style={{
                        top: "190px",
                        left: "40px",
                      }}
                    />
                  </Link>

                  {/* Data Management */}
                  <Link href="/solutions/data-management">
                    <motion.img
                      src="/herosection/chakara/2.png"
                      className="absolute h-[120px] object-contain z-20 cursor-pointer transition-all duration-30  hover:-translate-x-1 hover:-translate-y-1"
                      style={{
                        top: "109px",
                        left: "70px",
                      }}
                    />
                  </Link>

                  {/* Clinical data standards */}
                  <Link href="/solutions/clinical-data">
                    <motion.img
                      src="/herosection/chakara/3.png"
                      className="absolute h-[114px] cursor-pointer z-20 transition-all duration-30  hover:-translate-x-0.5 hover:-translate-y-1"
                      style={{
                        top: "62px",
                        left: "134px",
                      }}
                    />
                  </Link>

                  {/* Medical Writing */}
                  <Link href="/solutions/medical-writing">
                    <motion.img
                      src="/herosection/chakara/4.png"
                      className="absolute h-[90px] w-[97px] cursor-pointer z-20 transition-all duration-30  hover:-translate-x-0 hover:-translate-y-1"
                      style={{
                        top: "58px",
                        left: "227.5px",
                      }}
                    />
                  </Link>

                  {/* Bio stats */}
                  <Link href="/solutions/biostatistics">
                    <motion.img
                      src="/herosection/chakara/5.png"
                      className="absolute h-[110px] cursor-pointer z-20 transition-all duration-30  hover:translate-x-0.5 hover:-translate-y-0.5"
                      style={{
                        top: "65px",
                        left: "302px",
                      }}
                    />
                  </Link>

                  {/* ETMF services */}
                  <Link href="/solutions/eTMF">
                    <motion.img
                      src="/herosection/chakara/6.png"
                      className="absolute h-[119px] cursor-pointer z-20 transition-all duration-30  hover:translate-x-0.5 hover:-translate-y-0.5"
                      style={{
                        top: "109px",
                        left: "358px",
                      }}
                    />
                  </Link>

                  {/* Pharma */}
                  <Link href="/solutions/pharmacovigilance">
                    <motion.img
                      src="/herosection/chakara/7.png"
                      className="absolute w-[111px] cursor-pointer z-20 transition-all duration-30 hover:translate-x-0.5 hover:-translate-y-0"
                      style={{
                        top: "189px",
                        left: "394px",
                      }}
                    />
                  </Link>

                  {/* Interactive Response Technology */}
                  <Link href="/technologies/interactive-response-technology">
                    <motion.img
                      src="/herosection/chakara/8.png"
                      className="absolute w-[125px] cursor-pointer z-20 transition-all duration-30  hover:-translate-x-0.5 hover:translate-y-0.5"
                      style={{
                        top: "277px",
                        left: "51px",
                      }}
                    />
                  </Link>

                  {/* Clinical Trial */}
                  <Link href="/technologies/clinical-trial-management-software">
                    <motion.img
                      src="/herosection/chakara/9.png"
                      className="absolute w-[145px] cursor-pointer z-20 transition-all duration-30 hover:-translate-x-0.5 hover:translate-y-1"
                      style={{
                        top: "361px",
                        left: "95px",
                      }}
                    />
                  </Link>

                  {/* Electronic data */}
                  <Link href="/technologies/electronic-data-capture">
                    <motion.img
                      src="/herosection/chakara/10.png"
                      className="absolute h-[100px] cursor-pointer z-20 transition-all duration-30 hover:-translate-x-0 hover:translate-y-1"
                      // w-[154px]
                      style={{
                        top: "410px",
                        left: "197px",
                      }}
                    />
                  </Link>

                  {/* Electronic Trials */}
                  <Link href="/technologies/etmf-technology">
                    <motion.img
                      src="/herosection/chakara/11.png"
                      className="absolute w-[149px] cursor-pointer z-20 transition-all duration-30 hover:translate-x-0.5 hover:translate-y-1"
                      style={{
                        top: "366px",
                        left: "303px",
                      }}
                    />
                  </Link>

                  {/* Pharma  */}
                  <Link href="/solutions/pharmacovigilance">
                    <motion.img
                      src="/herosection/chakara/12.png"
                      className="absolute w-[122px] cursor-pointer z-20 transition-all duration-30 hover:translate-x-1 hover:translate-y-0"
                      style={{
                        top: "275px",
                        left: "378px",
                      }}
                    />
                  </Link>
                </div>
              </div>

              {/* TEXT SECTION */}
              <div className="text-white text-center flex flex-col items-center max-w-2xl">
                <h1 className="text-[38px] font-bold leading-tight">
                  Clinical Trials, 
                </h1>

                <h1 className="text-[38px] font-bold leading-tight">
                  Run with Precision and AI Efficiency
                </h1>

                <p className=" mt-5 text-[15px] leading-7 text-gray-300 text-center justify-center">
                  
                  <span className="font-bold text-white"> eRIC SOLUTIONS</span>,
                  is a full-service CRO and regulatory affairs partner. We run Phase I–IV clinical trials and the data, biostatistics, safety, and regulatory work behind them — for pharma, biotech, and medical-device sponsors in the US, Europe, and Asia. Our eRIC AI agents remove the operational bottlenecks that slow trials down, with humans in control.

                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href="/contact">
                    <button className="bg-blue-800 px-7 py-3 rounded-sm font-medium hover:bg-[#1D4ED8] transition">
                      Book a demo
                    </button>
                  </Link>

                  <Link href="/company/about">
                    <button className="bg-white text-black px-7 py-3 rounded-sm font-medium hover:bg-gray-300 transition">
                      Why eRIC SOLUTIONS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="block sm:hidden relative w-full sm:mt-30 sm:pb-20 bg-gradient-to-l from-[#024c9c] via-[#012a63] to-[#02103b] overflow-hidden">
        <div className="relative z-20 flex items-center h-full mt-35 sm:mt-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* IMAGE */}
              <div className="order-1 md:order-2 flex justify-center pt-6 md:pt-0">
                <div className="relative w-[280px] h-[280px]">
                  <img
                    src="/herosection/chakara.gif"
                    alt="animation"
                    className="absolute inset-0 w-full h-full object-contain"
                  />

                  <img
                    src="/herosection/chakara/centerpart.png"
                    alt="middle layer"
                    className="absolute  -translate-x-1/2 -translate-y-1/2 w-[178px] object-contain z-10 pointer-events-none"
                    style={{
                      top: "140px",
                      left: "143px",
                    }}
                  />

                  {/* clinical project management */}
                  <Link href="/solutions/clinical-operations">
                    <motion.img
                      src="/herosection/chakara/1.png"
                      className="absolute w-[63px] cursor-pointer z-20 transition-all duration-30 hover:-translate-x-0.5 hover:-translate-y-1"
                      style={{
                        top: "88px",
                        left: "15px",
                      }}
                    />
                  </Link>

                  {/* Data Management */}
                  <Link href="/solutions/data-management">
                    <motion.img
                      src="/herosection/chakara/2.png"
                      className="absolute w-[64px] object-contain z-20 cursor-pointer transition-all duration-30 hover:-translate-x-0.5 hover:-translate-y-1"
                      style={{
                        top: "46px",
                        left: "32px",
                      }}
                    />
                  </Link>

                  {/* Clinical data standards */}
                  <Link href="/solutions/clinical-data">
                    <motion.img
                      src="/herosection/chakara/3.png"
                      className="absolute w-[63px] cursor-pointer z-20 transition-all duration-30 hover:-translate-x-0.5 hover:-translate-y-1"
                      style={{
                        top: "20px",
                        left: "66px",
                      }}
                    />
                  </Link>

                  {/* Medical Writing */}
                  <Link href="/solutions/medical-writing">
                    <motion.img
                      src="/herosection/chakara/4.png"
                      className="absolute w-[52px] cursor-pointer z-20 transition-all duration-30 hover:-translate-x-0.5 hover:-translate-y-1"
                      style={{
                        top: "18px",
                        left: "117px",
                      }}
                    />
                  </Link>

                  {/* Bio stats */}
                  <Link href="/solutions/biostatistics">
                    <motion.img
                      src="/herosection/chakara/5.png"
                      className="absolute h-[60px] cursor-pointer z-20 transition-all duration-30 hover:-translate-x-0.5 hover:-translate-y-1"
                      style={{
                        top: "23px",
                        left: "157px",
                      }}
                    />
                  </Link>

                  {/* ETMF services */}
                  <Link href="/solutions/eTMF">
                    <motion.img
                      src="/herosection/chakara/6.png"
                      className="absolute h-[63px] cursor-pointer z-20 transition-all duration-30 hover:-translate-x-0.5 hover:-translate-y-1"
                      style={{
                        top: "48px",
                        left: "188px",
                      }}
                    />
                  </Link>

                  {/* Pharma */}
                  <Link href="/solutions/pharmacovigilance">
                    <motion.img
                      src="/herosection/chakara/7.png"
                      className="absolute w-[58px] cursor-pointer z-20 transition-all duration-30 hover:-translate-x-0.5 hover:-translate-y-1"
                      style={{
                        top: "90px",
                        left: "208px",
                      }}
                    />
                  </Link>

                  {/* Interactive Response Technology */}
                  <Link href="/technologies/interactive-response-technology">
                    <motion.img
                      src="/herosection/chakara/8.png"
                      className="absolute w-[69px] cursor-pointer z-20 transition-all duration-30 hover:-translate-x-0.5 hover:-translate-y-1"
                      style={{
                        top: "135px",
                        left: "20px",
                      }}
                    />
                  </Link>

                  {/* Clinical Trial */}
                  <Link href="/technologies/clinical-trial-management-software">
                    <motion.img
                      src="/herosection/chakara/9.png"
                      className="absolute w-[78px] cursor-pointer z-20 transition-all duration-30 hover:-translate-x-0.5 hover:-translate-y-1"
                      style={{
                        top: "182px",
                        left: "45px",
                      }}
                    />
                  </Link>

                  {/* Electronic data */}
                  <Link href="/technologies/electronic-data-capture">
                    <motion.img
                      src="/herosection/chakara/10.png"
                      className="absolute h-[54px] cursor-pointer z-20 transition-all duration-30 hover:-translate-x-0.5 hover:-translate-y-1"
                      style={{
                        top: "208px",
                        left: "101px",
                      }}
                    />
                  </Link>

                  {/* Electronic Trials */}
                  <Link href="/technologies/etmf-technology">
                    <motion.img
                      src="/herosection/chakara/11.png"
                      className="absolute  w-[81px] cursor-pointer z-20 transition-all duration-30 hover:-translate-x-0.5 hover:-translate-y-1"
                      style={{
                        top: "183px",
                        left: "158px",
                      }}
                    />
                  </Link>

                  {/* Pharma  */}
                  <Link href="/solutions/pharmacovigilance">
                    <motion.img
                      src="/herosection/chakara/12.png"
                      className="absolute w-[63px] cursor-pointer z-20 transition-all duration-30 hover:-translate-x-0.5 hover:-translate-y-1"
                      style={{
                        top: "135px",
                        left: "200px",
                      }}
                    />
                  </Link>
                </div>
              </div>

              {/* TEXT */}
              <div className="order-2 md:order-1 text-white">
                <h1 className="text-3xl md:text-3xl font-bold leading-tight">
                  Clinical Trials, 
                </h1>
                <h1 className="text-3xl md:text-3xl font-bold leading-tight">
                  Run with Precision and AI Efficiency
                </h1>

                <p className="mt-5 text-sm md:text-[15px] text-gray-400">
                  
                  <span className="font-bold text-white"> eRIC SOLUTIONS</span>,
                  is a full-service CRO and regulatory affairs partner. We run Phase I–IV clinical trials and the data, biostatistics, safety, and regulatory work behind them — for pharma, biotech, and medical-device sponsors in the US, Europe, and Asia. Our eRIC AI agents remove the operational bottlenecks that slow trials down, with humans in control.

                </p>

                <div className="mt-7 flex flex-wrap gap-3 mb-6">
                  <Link href="/contact">
                    <button className="bg-blue-800 px-6 py-3 rounded-sm font-medium hover:bg-[#1D4ED8] transition">
                      Book a demo  
                    </button>
                  </Link>

                  <Link href="/company/about">
                    <button className="bg-gray-200 text-black px-6 py-3 rounded-sm font-medium hover:bg-gray-300 transition">
                      Why eRIC SOLUTIONS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
