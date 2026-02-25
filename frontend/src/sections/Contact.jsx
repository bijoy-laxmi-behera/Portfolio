import { useState } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  CheckCircle,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successOverlay, setSuccessOverlay] = useState(false);
  const [shake, setShake] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const triggerError = (message) => {
    setShake(true);
    toast.error(message);
    setTimeout(() => setShake(false), 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      triggerError("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      triggerError("Enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccessOverlay(true);
      toast.success("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSuccessOverlay(false);
      }, 2200);

    } catch (error) {
      triggerError(error.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-neutral-950 text-white py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/15 via-purple-500/15 to-pink-500/15 blur-3xl" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[120px] md:text-[220px] font-extrabold text-white/5 tracking-widest">
          CONNECT
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-20 bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Let’s Build Something
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT SIDE */}
          <div className="space-y-10">
            <p className="text-gray-400 text-lg max-w-md">
              Internships. Freelance. Full-time.  
              If it’s impactful — I’m in.
            </p>

            <div className="space-y-6 text-gray-300">
              <div className="flex items-center gap-4">
                <Mail className="text-pink-500" size={22} />
                bijoylaxmi.dev@gmail.com
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-purple-500" size={22} />
                +91 9101820602
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-indigo-500" size={22} />
                Bhubaneswar, India
              </div>
            </div>
          </div>

          {/* FORM */}
          <motion.div
            animate={
              shake
                ? { x: [-12, 12, -8, 8, -5, 5, 0] }
                : { x: 0 }
            }
            transition={{ duration: 0.4 }}
            className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl overflow-hidden"
          >
            <AnimatePresence>
              {successOverlay && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center z-20"
                >
                  <CheckCircle size={70} className="text-green-400 mb-4" />
                  <p className="text-xl font-semibold">
                    Message Delivered 🚀
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-8" onSubmit={handleSubmit}>
              {["name", "email"].map((field) => (
                <div key={field} className="relative">
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-neutral-900/80 border border-white/10 rounded-xl px-4 pt-6 pb-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition"
                  />
                  <label className="absolute left-4 top-3 text-gray-400 text-sm">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                </div>
              ))}

              <div className="relative">
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full bg-neutral-900/80 border border-white/10 rounded-xl px-4 pt-6 pb-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                type="submit"
                className="w-full py-4 rounded-xl font-semibold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 transition shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}