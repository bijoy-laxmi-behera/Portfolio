// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import silicon from "../assets/education/silicon.png";
import abit from "../assets/education/abit.png";
import swac from "../assets/education/swac.png";
import kv from "../assets/education/kv.png";

export default function Education() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const heightProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Silicon University, Bhubaneswar",
      duration: "2024 – Present",
      score: "CGPA: —",
      logo: silicon,
      description:
        "Advanced coursework in scalable systems, cloud fundamentals, and modern full-stack development.",
    },
    {
      degree: "B.Sc in IT & Management",
      institution: "Ajay - Binay Institute of Technology",
      duration: "2021 – 2024",
      score: "CGPA: 8.5",
      logo: abit,
      description:
        "Strong foundation in programming, database systems, and web application architecture.",
    },
    {
      degree: "Higher Secondary (Science)",
      institution: "Shailabala Women's Autonomous College",
      duration: "2019 – 2021",
      score: "82%",
      logo: swac,
      description:
        "Built strong analytical and scientific fundamentals supporting technical growth.",
    },
    {
      degree: "Matriculation",
      institution: "Kendriya Vidyalaya Gerukamukh",
      duration: "2019",
      score: "88%",
      logo: kv,
      description:
        "Completed secondary education with emphasis on structured learning and discipline.",
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative bg-neutral-950 text-white py-32 overflow-hidden"
    >

      {/* 🔥 Neon Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>

      {/* 🔥 Big Faded Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[120px] md:text-[220px] font-extrabold text-white/5 tracking-widest">
          DEGREE
        </h1>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-20">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Background Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-white/10 transform md:-translate-x-1/2"></div>

          {/* Animated Neon Line */}
          <motion.div
            style={{ height: heightProgress }}
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-linear-to-b from-indigo-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2 origin-top"
          />

          <div className="space-y-28">

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* Neon Dot */}
                <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-linear-to-r from-indigo-500 to-pink-500 rounded-full transform -translate-x-1/2 shadow-lg shadow-purple-500/50"></div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="ml-12 md:ml-0 md:w-1/2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-purple-500/20 transition duration-300"
                >

                  {/* Logo + Info */}
                  <div className="flex items-start gap-5">

                    <motion.img
                      whileHover={{ rotate: 6, scale: 1.05 }}
                      src={item.logo}
                      alt={item.institution}
                      className="w-14 h-14 object-contain bg-white/10 rounded-xl p-3"
                    />

                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold">
                        {item.degree}
                      </h3>

                      <p className="text-purple-400 text-sm mt-1">
                        {item.institution}
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        {item.duration}
                      </p>
                    </div>

                  </div>

                  {/* Score Badge */}
                  <div className="mt-6 inline-block px-5 py-2 text-xs rounded-full bg-linear-to-r from-indigo-500/20 to-pink-500/20 border border-white/10 text-indigo-300 font-medium">
                    {item.score}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mt-5 text-sm leading-relaxed">
                    {item.description}
                  </p>

                </motion.div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}