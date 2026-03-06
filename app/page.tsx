"use client"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { motion } from "framer-motion"
import ThemeToggle from "@/components/theme-toggle"
import { Github, Linkedin, Mail, Database, BarChart3, Code } from "lucide-react"

const projects = [
  {
    title: "PulseMetrics",
    desc: "SaaS analytics platform measuring retention, churn, LTV and funnel performance.",
    stack: "SQL • Python • Tableau",
    img: "/pulsemetrics.png",
    github: "https://github.com/Garvitjoshi1"
  },
  {
    title: "CartScope",
    desc: "E-commerce analytics with RFM segmentation and revenue insights.",
    stack: "SQL • Python • Pandas",
    img: "/cartscope.png",
    github: "https://github.com/Garvitjoshi1"
  },
  {
    title: "QueryForge",
    desc: "SQL query performance experiments using indexing and execution plan analysis.",
    stack: "SQL • MySQL",
    img: "/queryforge.png",
    github: "https://github.com/Garvitjoshi1"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">

      {/* NAV */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-end">
        <ThemeToggle />
      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>

          <motion.h1
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            className="text-5xl font-bold"
          >
            Garvit Joshi
          </motion.h1>

          <p className="mt-4 text-lg text-neutral-500">
            Data Analyst • SQL • Product Analytics • BI
          </p>

          <p className="mt-6 text-neutral-500 max-w-lg">
            I build analytics systems that transform raw data into business
            insights through SQL pipelines, dashboards and product analytics.
          </p>

          {/* social */}
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

        </div>

        {/* PROFILE IMAGE */}
        <motion.img
          src="/profile.jpg"
          initial={{opacity:0}}
          animate={{opacity:1}}
          className="rounded-xl w-full max-w-sm mx-auto"
        />

      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-semibold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{opacity:0, y:40}}
              whileInView={{opacity:1, y:0}}
              transition={{delay:i * .1}}
              className="rounded-xl border dark:border-neutral-800 overflow-hidden hover:shadow-xl transition"
            >

              <img
                src={p.img}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="font-semibold text-lg">
                  {p.title}
                </h3>

                <p className="text-sm mt-2 text-neutral-500">
                  {p.desc}
                </p>

                <p className="text-xs mt-4 text-neutral-400">
                  {p.stack}
                </p>

                <a
                  href={p.github}
                  className="text-blue-500 text-sm mt-4 block"
                >
                  View Code →
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-semibold mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <Skill icon={<Database />} label="SQL" />
          <Skill icon={<Code />} label="Python" />
          <Skill icon={<BarChart3 />} label="Tableau" />
          <Skill icon={<BarChart3 />} label="Power BI" />

        </div>

      </section>

    </main>
  )
}

function Skill({icon, label}:{icon:any, label:string}) {
  return (
    <div className="flex items-center gap-3 border rounded-lg p-4">
      {icon}
      {label}
    </div>
  )
}