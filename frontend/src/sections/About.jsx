import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Tilt from "react-parallax-tilt";
import profileImg from "../assets/images/profile.jpg"; // add your image

/* ---------- Animated Counter Component ---------- */
function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span ref={ref}>
      {isInView && (
        <motion.span
          initial={{ count: 0 }}
          animate={{ count: value }}
          transition={{ duration: 2 }}
        >
          {Math.floor(value)}+
        </motion.span>
      )}
    </motion.span>
  );
}

/* ---------- Word Reveal Component ---------- */
function RevealText({ text }) {
  const words = text.split(" ");

  return (
    <motion.span
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
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function About() {
  /* ---------- Mouse Spotlight ---------- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="relative bg-neutral-950 text-white py-36 overflow-hidden"
    >
      {/* 🔥 Mouse Spotlight */}
      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
        }}
        className="pointer-events-none fixed w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      {/* 🔥 Floating Gradient Blobs */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-20 left-10 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"
      />

      {/* 🔥 Dual Marquee */}
      {/* 🔥 TOP MARQUEE */}
<div className="absolute top-12 left-0 w-full overflow-hidden pointer-events-none select-none">
  <motion.div
    animate={{ x: ["0%", "-50%"] }}
    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    className="flex whitespace-nowrap"
  >
    <span className="text-[90px] md:text-[140px] font-extrabold text-white/5">
      CREATIVE • GEN-Z • MERN • UI • FULL STACK •
    </span>
    <span className="text-[90px] md:text-[140px] font-extrabold text-white/5">
      CREATIVE • GEN-Z • MERN • UI • FULL STACK •
    </span>
  </motion.div>
</div>

{/* 🔥 BOTTOM MARQUEE (Reverse Direction) */}
<div className="absolute bottom-12 left-0 w-full overflow-hidden pointer-events-none select-none">
  <motion.div
    animate={{ x: ["-50%", "0%"] }}
    transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
    className="flex whitespace-nowrap"
  >
    <span className="text-[90px] md:text-[140px] font-extrabold text-white/5">
      PERFORMANCE • MODERN UI • CLEAN CODE • SCALABLE •
    </span>
    <span className="text-[90px] md:text-[140px] font-extrabold text-white/5">
      PERFORMANCE • MODERN UI • CLEAN CODE • SCALABLE •
    </span>
  </motion.div>
</div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-10">

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              <RevealText text="Crafting Modern, Scalable Web Experiences." />
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              I focus on building scalable, high-performance web applications
              with clean architecture and intuitive user interfaces.
              My approach balances technical efficiency with thoughtful design.
            </p>

            {/* Animated Counters */}
            <div className="flex gap-12 pt-6">
              <div>
                <h3 className="text-4xl font-bold">
                  <Counter value={3} />
                </h3>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">
                  <Counter value={1} />
                </h3>
                <p className="text-gray-400 text-sm">Years of Learning</p>
              </div>
            </div>
          </div>

          {/* 🔥 3D Profile Card */}
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            transitionSpeed={400}
            className="relative rounded-3xl"
          >
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 space-y-6">

              <img
                src={profileImg}
                alt="Profile"
                className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-indigo-500"
              />

              <p className="text-gray-400 text-sm text-center leading-relaxed">
                Dedicated to developing reliable, scalable, and user-centric 
                applications using modern web technologies and best practices.
              </p>

            </div>
          </Tilt>

        </div>
      </div>
    </section>
  );
}