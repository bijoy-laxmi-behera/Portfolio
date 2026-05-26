// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function SkillCard({ name, icon }) {
  const ref = useRef(null);

  // Motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics
  const smoothX = useSpring(x, { stiffness: 150, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / 10;
    const deltaY = (e.clientY - centerY) / 10;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group rounded-2xl p-0.5"
    >
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>

      {/* Card */}
      <div className="relative bg-neutral-900 rounded-2xl p-8 flex flex-col items-center text-center border border-white/10 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]">

        {/* PNG */}
        <img
          src={icon}
          alt={name}
          className="h-20 w-30 mb-5 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        <p className="text-base font-medium text-gray-300 group-hover:text-white transition">
          {name}
        </p>
      </div>
    </motion.div>
  );
}