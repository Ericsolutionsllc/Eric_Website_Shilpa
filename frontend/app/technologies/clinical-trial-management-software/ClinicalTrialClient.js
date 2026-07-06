"use client";

import { useState } from "react";
import Image from "next/image";
import Newsletter from "../../component/Register";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ClinicalTrial() {
  const [openIndex, setOpenIndex] = useState(0);

  const features = [
    {
      title: "Portfolio Management",
      points: [
        "Provides consolidated views across studies with data import support for investigators, sites, and contacts",
        "Offers calendar visibility for events scheduled within each study and by team members.",
        "Dashboards display portfolio and summary data points, with visualizations by study, region, country, and monitor, including download capabilities.",
        "Defines critical information at the study level, including subject visit schedules, CRA monitoring frequency, study milestones, protocol violations, and study documents.",
        "The outsourcing tab offers a straightforward yet comprehensive overview of study components, identifying external vendors by task, country, and primary point of contact.",
        "Milestone management allows complete customization of key dates for study progress and events.",
      ],
    },
    {
      title: "Countries Planning and Management",
      points: [
        "Manage key milestones and target site/enrollment metrics for each study country compared with overall study milestones",
        "Enrollment planning by country for target screening and enrollment as well as counts for actuals compared with subject screening and enrollment data.",
        "Planning of screening and enrollment targets by month and establish targets for subjects to complete treatment",
        "Data views allow quick comparison of target versus actuals and visualizations of differences with study planning metrics.",
        "Insight into country level planning and actuals vs study level expectations",
      ],
    },
    {
      title: "Site and Investigator Management",
      points: [
        "Site contact management including primary, alternate and site-specific details.",
        "Oversight of site selection and participation status across sites.",
        "Detailed enrollment planning and sub-study participation.",
        "Tracking of key milestones for study startup from CDA through enrollment.",
        "Study document tracking and file uploading for site essential documents.",
        "Detailed startup tracking for EC submissions, communications and site documents.",
        "Contract and budget management including invoice generation, partial payments and histories.",
      ],
    },
    {
      title: "Subject Management",
      points: [
        "Manage key milestones and target site/enrollment metrics for each study country compared with overall study milestones.",
        "Enrollment planning by country for target screening and enrollment as well as counts for actuals compared with subject screening and enrollment data.",
        "Planning of screening and enrollment targets by month and establish targets for subjects to complete treatment",
        "Data views allow quick comparison of target versus actuals and visualizations of differences with study planning metrics.",
        "Insight into country level planning and actuals vs study level expectations"      ],
    },
    {
      title: "Study Team Management",
      points: [
        "Team roster with CRA-site assignments, start/stop dates on project, roles and titles.",
        "Ability for authorized users to trigger team member account invitations.",
        "Supports global team member collaboration with built in study view settings and country and site assignments appropriate to given person/team.",
        "Action item tracking by functional area with assignment to team members and ability to export.",
        "Study document development tracking area for monitoring plans, AE plans, etc.",
        "Training status by team member for defined study and team procedures."      ],
    },
    {
        title: "CRA Workspace",
        points: [
            "Fully integrated site visit calendar for CRA visit planning and insight into visit report authoring progress.",
            "eVisit Report (EVR) authoring and approval features directly in the system.",
            "Supports site visit report tracking for EVRs and external reports with related visit letter and document upload features.",
            "Cumulative action item views and tracking supports content from EVRs as well as items directly added via the tab.",
            "Integrated alerts for action items and electronic visit reports.",
            "Integrated TMF repository for approved EVRs and attachments.",
            "Tools for CRA visits including interactive site map and shared repositories."   ],
      },{
        title: "Regulatory Affairs and Safety",
        points: [
            "Define and plan submission timelines by country for up to 3 regulatory agencies and submission content.",
            "Track expected regulatory agency approvals by country per defined submission timelines and submission actuals.",
            "Define essential document package details by document including country-specific items and desired document numbering and folder structures.",
            "View uploaded site essential document files in organized file folder structures per definitions.",
            "File upload and tracking support for IND Safety reports, agency submission tracking and repositories for standard forms and progress reports."],
      },
      {
        title: "Additional Details",
        points: [
            "Repositories: Limited access repositories throughout functional areas for files uploaded and content created within the application.",
            "Reports and Dashboards: SimpleCTMS supports a flexible reporting interface and dashboards to provide data summaries, charts and visualizations, and checklists. Ad hoc reports supported.",
            "Study Document bundle: Download all study level documents as a zip file with established folder structure.",
            "Data Export: Data exports allow download or email delivery of tracking views in common formats."      ],
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
              Eric Clinical Trial Management Software(CTMS)
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
                  Run the whole study 

                  <span className="text-[#3B82F6]">
                    {" "}
                    from one place
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
                 ERIC CTMS gives drug developers a scalable, cost-effective way to manage trials without the heavy upfront cost and long implementation of legacy systems. It replaces spreadsheet-and-email tracking with real-time study management — site status, milestones, monitoring visits, and budgets in one view — and shortens study start-up.

                </p>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-500 mb-8 leading-relaxed text-justify text-[17px]">
                  ERIC CTMS offers drug developers a scalable and cost-effective
                  solution to enhance management, performance, and reduce study
                  startup costs in clinical trials.
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
                src="/technologies/ctms.gif" // place image inside public folder
                alt="Clinical Operations"
                width={500}
                height={350}
                className="object-contain"
              />
            </div>
          </div>
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
