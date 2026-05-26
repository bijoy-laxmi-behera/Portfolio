import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function ProjectCard({ project, onClick }) {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 15 });

  const rotateX = useTransform(smoothY, [0, 250], [8, -8]);
  const rotateY = useTransform(smoothX, [0, 380], [-8, 8]);

  const imageX = useTransform(smoothX, [0, 380], [-20, 20]);
  const imageY = useTransform(smoothY, [0, 250], [-20, 20]);

  const contentX = useTransform(smoothX, [0, 380], [-10, 10]);
  const contentY = useTransform(smoothY, [0, 250], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      style={{ rotateX, rotateY, perspective: 1000 }}
      whileHover={{ scale: 1.05 }}
      className="relative w-105 h-65 rounded-3xl overflow-hidden cursor-pointer shadow-xl"
    >
      {/* Image */}
      <motion.img
        src={project.image}
        alt={project.title}
        style={{ x: imageX, y: imageY }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Gradient Overlay (instead of opacity fade) */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

      {/* Mouse Spotlight */}
      <motion.div
        style={{ left: smoothX, top: smoothY }}
        className="pointer-events-none absolute w-48 h-48 bg-indigo-500/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      {/* Content */}
      <motion.div
        style={{ x: contentX, y: contentY }}
        className="relative z-10 p-6 flex flex-col justify-end h-full"
      >
        <h3 className="text-xl font-semibold text-white drop-shadow-md">
          {project.title}
        </h3>
      </motion.div>
    </motion.div>
  );
}