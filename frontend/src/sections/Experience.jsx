/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import certificateImg from "../assets/certificates/codebeat.jpg";
import companyLogo from "../assets/company/codebeat.png";

export default function Experience() {
  const [activeId, setActiveId] = useState(null);

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = activeId ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeId]);

  const experience = {
    id: "codebeat-cert",
    role: "MERN Stack Summer Internship",
    company: "CodeBeat, Silicon University, Bhubaneswar",
    duration: "June 2025 – July 2025",
  };

  return (
    <section
      id="experience"
      className="relative bg-neutral-950 text-white py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />

      {/* Background Word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[120px] md:text-[200px] font-extrabold text-white/5 tracking-widest">
          EXPERIENCE
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-16 bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          WORK EXPERIENCE
        </motion.h2>

        {/* Compact Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl"
        >
          <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-center text-center md:text-left justify-items-center md:justify-items-stretch">

            {/* Company Logo Circle */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-40 blur-md"></div>
              <div className="relative w-20 h-20 md:w-20 md:h-20 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mx-auto md:mx-0">
                <img
                  src={companyLogo}
                  alt="Company Logo"
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>

            {/* Role Info */}
            <div>
              <h3 className="text-xl  text-center md:text-2xl font-semibold">
                {experience.role}
              </h3>

              <p className="text-indigo-400 text-sm text-center mt-1">
                {experience.company}
              </p>

              <p className="text-gray-500 text-sm text-center mt-1">
                {experience.duration}
              </p>
            </div>

            {/* Certificate Thumbnail */}
            <motion.img
              layoutId={experience.id}
              src={certificateImg}
              alt="Internship Certificate"
              onClick={() => setActiveId(experience.id)}
              className="w-40 md:w-48 rounded-xl border border-white/10 shadow-lg cursor-pointer hover:scale-105 transition mx-auto md:mx-0"
            />
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeId && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveId(null)}
            />

            <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none">
              <motion.img
                layoutId={activeId}
                src={certificateImg}
                alt="Certificate Large"
                className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl pointer-events-auto"
              />
            </motion.div>

            <motion.button
              className="fixed top-6 right-6 z-60 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full w-12 h-12 flex items-center justify-center text-xl text-white active:scale-90 transition"
              onClick={() => setActiveId(null)}
            >
              ✕
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}