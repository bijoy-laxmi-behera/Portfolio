import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <section
      id="projects"
      className="relative bg-neutral-950 text-white py-32 overflow-hidden"
    >

      {/* 🔥 Neon Background Glow */}
      <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />

      {/* 🔥 Floating Orbs */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute top-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 14 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
      />

      {/* 🔥 Big Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[120px] md:text-[220px] font-extrabold text-white/5 tracking-widest">
          WORK
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-20 bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        {/* Carousel */}
        <div className="relative overflow-hidden">

          <motion.div
            drag="x"
            dragElastic={0.08}
            dragConstraints={{ left: -1200, right: 0 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            animate={!isDragging ? { x: ["0%", "-50%"] } : {}}
            transition={
              !isDragging
                ? { repeat: Infinity, duration: 28, ease: "linear" }
                : {}
            }
            className="flex gap-10 w-max cursor-grab active:cursor-grabbing"
          >
            {[...projects, ...projects].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* 🔥 Gen-Z Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.85, y: 60 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 60 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-neutral-900/90 border border-white/10 rounded-3xl p-12 max-w-3xl w-full shadow-2xl"
            >

              {/* Title */}
              <h3 className="text-4xl font-bold mb-6 bg-linear-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                {selectedProject.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-10">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm rounded-full bg-linear-to-r from-indigo-500/20 to-pink-500/20 border border-white/10 text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-5 items-center">

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition font-medium"
                >
                  GitHub
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl border border-white/20 hover:border-indigo-500 transition font-medium"
                >
                  Live Demo
                </motion.a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="ml-auto text-gray-400 hover:text-white transition"
                >
                  Close
                </button>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}