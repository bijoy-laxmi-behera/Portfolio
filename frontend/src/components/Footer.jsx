import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  ArrowUpRight,
  Download,
} from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isOnline, setIsOnline] = useState(false);

  // Dynamic availability check
  useEffect(() => {
    const updateStatus = () => {
      const hour = new Date().getHours();
      setIsOnline(hour >= 9 && hour <= 21);
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-neutral-950 text-gray-400 border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 py-20">
        <div className="grid md:grid-cols-3 gap-16">

          {/* 1️ Brand Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              B
              <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                ijoy
              </span>
            </h2>

            <p className="text-sm leading-relaxed max-w-sm">
              MERN Stack Developer building scalable, performance-driven,
              and modern digital experiences.
            </p>

            {/* Availability Badge */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span
                  className={`absolute inline-flex h-full w-full rounded-full ${
                    isOnline ? "bg-green-500" : "bg-gray-500"
                  } opacity-75 animate-ping`}
                ></span>
                <span
                  className={`relative inline-flex rounded-full h-3 w-3 ${
                    isOnline ? "bg-green-500" : "bg-gray-500"
                  }`}
                ></span>
              </span>

              <span className="text-sm font-medium text-gray-300">
                {isOnline ? "Open to Work" : "Currently Offline"}
              </span>
            </div>

            {/* Response Time */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs text-gray-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Typically responds within 24 hours
            </div>

            {/* Resume Download Button */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 mt-4 px-5 py-3 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium shadow-lg hover:opacity-90 transition"
            >
              <Download size={16} />
              Download Resume (PDF)
            </motion.a>
          </div>

          {/* 2️ Navigation Column */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold tracking-wide">
              Navigation
            </h3>

            <ul className="space-y-3 text-sm">
              {["Home", "About", "Education", "Capabilities", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-white transition flex items-center gap-2 group"
                    >
                      {item}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition"
                      />
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* 3 Social Column */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold tracking-wide">
              Connect
            </h3>

            <div className="flex gap-5">
              {[
                { icon: Github, link: "https://github.com/bijoy-laxmi-behera" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/bijoy-laxmi-behera" },
                { icon: Mail, link: "mailto:bijoylaxmi.dev@gmail.com" },
                { icon: Instagram, link: "https://instagram.com/bijoy_laxmi_behera" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition"
                >
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>

                  <item.icon
                    size={20}
                    className="relative z-10 text-gray-300 group-hover:text-white transition"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            &copy;{""} 2025 Bijoy Laxmi Behera. All rights reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}