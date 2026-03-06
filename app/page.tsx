"use client";

import { motion } from "framer-motion";
import ThemeToggle from "@/components/theme-toggle";
import {
  SiMysql,
  SiPython,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

import {
  Github,
  Linkedin,
  Mail,
  Database,
  BarChart3,
  Code,
  FileText,
} from "lucide-react";

const projects = [
  {
    title: "PulseMetrics",
    desc: "Product analytics platform analyzing retention, churn, LTV and funnel conversion metrics for SaaS products.",
    stack: "SQL • Python • Tableau",
    img: "/pulsemetrics.png",
    github: "https://github.com/Garvitjoshi1",
  },
  {
    title: "CartScope",
    desc: "E-commerce analytics system using RFM segmentation to identify high-value customers and revenue drivers.",
    stack: "SQL • Python • Pandas",
    img: "/cartscope.png",
    github: "https://github.com/Garvitjoshi1",
  },
  {
    title: "QueryForge",
    desc: "SQL performance analysis lab experimenting with indexing strategies and execution plan optimization.",
    stack: "SQL • MySQL",
    img: "/queryforge.png",
    github: "https://github.com/Garvitjoshi1",
  },
];

const skills = [
  { name: "SQL", icon: <SiMysql size={18} /> },
  { name: "Python", icon: <SiPython size={18} /> },
  { name: "Pandas", icon: <SiPandas size={18} /> },
  { name: "NumPy", icon: <SiNumpy size={18} /> },

  { name: "Data Cleaning", icon: null },
  { name: "Data Visualization", icon: null },
  { name: "A/B Testing", icon: null },
  { name: "Product Analytics", icon: null },
  { name: "Statistics", icon: null },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      {/* NAV */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-end">
        <ThemeToggle />
      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold"
          >
            Garvit Joshi
          </motion.h1>

          <p className="mt-3 text-lg text-neutral-500">Aspiring Data Analyst</p>

          <p className="mt-6 text-neutral-500 max-w-lg">
            I build data systems that convert raw datasets into actionable
            business insights. My focus is product analytics, SQL data modeling
            and dashboarding that helps companies understand user behavior,
            retention and revenue patterns.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-5 mt-8">
            <a href="mailto:garvitjoshi46@gmail.com">
              <Mail />
            </a>

            <a href="https://github.com/Garvitjoshi1">
              <Github />
            </a>

            <a href="https://linkedin.com/in/garvitjoshi01">
              <Linkedin />
            </a>
          </div>

          {/* RESUME BUTTON */}
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition"
          >
            <FileText size={18} />
            View Resume
          </a>
        </div>

        {/* PROFILE IMAGE */}
        <motion.img
          src="/profile.jpg"
          alt="Garvit Joshi"
          width={160}
          height={160}
          className="w-40 h-40 rounded-full object-cover border border-neutral-300 dark:border-neutral-700"
        />
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-12">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="
      flex items-center gap-3
      border dark:border-neutral-800
      rounded-lg px-4 py-3
      text-sm
      hover:bg-neutral-100
      dark:hover:bg-neutral-900
      transition
      "
            >
              {skill.icon && (
                <div className="text-neutral-600 dark:text-neutral-300">
                  {skill.icon}
                </div>
              )}

              {skill.name}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border dark:border-neutral-800 overflow-hidden hover:shadow-xl transition"
            >
              <img src={p.img} className="h-48 w-full object-cover" />

              <div className="p-6">
                <h3 className="font-semibold text-lg">{p.title}</h3>

                <p className="text-sm mt-2 text-neutral-500">{p.desc}</p>

                <p className="text-xs mt-4 text-neutral-400">{p.stack}</p>

                <a href={p.github} className="text-blue-500 text-sm mt-4 block">
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION TIMELINE */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-12">Education</h2>

        <div className="border-l border-neutral-300 dark:border-neutral-800 pl-8 space-y-10">
          <div>
            <h3 className="font-semibold">Bachelor's Degree</h3>
            <p className="text-neutral-500 text-sm">
              Computer Science / Data Related Field
            </p>
            <p className="text-neutral-400 text-xs">2021 - 2025</p>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold">
          Let’s Build Data-Driven Products
        </h2>

        <p className="mt-4 text-neutral-500">
          Open to Data Analyst roles where I can transform data into insights
          that influence product and business decisions.
        </p>

        <a
          href="mailto:garvitjoshi46@gmail.com"
          className="inline-block mt-8 px-6 py-3 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition"
        >
          Contact Me
        </a>
      </section>
    </main>
  );
}
