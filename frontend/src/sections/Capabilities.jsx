/* eslint-disable no-unused-vars */
import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills";
import { motion } from "framer-motion";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative bg-neutral-950 text-white py-32 overflow-hidden"
    >

      {/* 🔥 Neon Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>

      {/* 🔥 Floating Gradient Orbs */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
      />

      {/* 🔥 Faded Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[100px] md:text-[180px] font-extrabold text-white/5 tracking-widest">
          SKILLS
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Capabilities
          </h2>
        </motion.div>

        {/* Skill Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {skills.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="transition"
            >
              <SkillCard
                icon={item.icon}
                name={item.name}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}