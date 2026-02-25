import { useState } from "react";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-16 py-5 flex items-center justify-between">

        {/* 🔥 Logo */}
        <a
          href="#home"
          className="text-3xl font-extrabold tracking-tight text-white"
        >
          B
          <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            ijoy
          </span>
        </a>

        {/* 🔥 Desktop Links */}
        <ul className="hidden md:flex gap-10 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                className="transition duration-300 hover:text-white"
              >
                {link.name}
              </a>

              {/* Animated Underline */}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-indigo-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* 🔥 Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* 🔥 Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <ul className="flex flex-col items-center gap-8 py-10 text-white text-lg">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-transparent hover:bg-linear-to-r hover:from-indigo-400 hover:to-pink-400 hover:bg-clip-text transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}