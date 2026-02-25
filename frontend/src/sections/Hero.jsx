import heroBg from "../assets/images/hero-bg.jpg";
import { TypeAnimation } from "react-type-animation";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
    >
      {/* 🔥 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* 🔥 Cinematic Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/80" />

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 w-full">
        <div className="max-w-3xl">

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
          >
            Hi, I’m{" "}
            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Bijoy
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mt-2"
          >
            Laxmi Behera
          </motion.h2>

          {/* Typing Line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 text-xl md:text-3xl font-medium text-gray-300"
          >
            Crafting{" "}
            <span className="text-transparent bg-linear-to-r from-indigo-400 to-pink-400 bg-clip-text font-semibold">
              <TypeAnimation
                sequence={[
                  "Scalable Web Apps",
                  2000,
                  "Modern UI Systems",
                  2000,
                  "High-Performance APIs",
                  2000,
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
              />
            </span>
          </motion.div>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center gap-8 mt-12"
          >
            {/* Resume Link */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 text-sm tracking-wide px-6 py-3 rounded-full bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 transition shadow-xl"
            >
              Download Resume
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>

            {/* Secondary Link */}
            <a
              href="#projects"
              className="text-sm text-gray-400 hover:text-white transition underline underline-offset-4"
            >
              View Projects
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}