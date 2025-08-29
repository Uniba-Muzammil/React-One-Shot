import { motion } from "framer-motion";

export default function About() {
  return (
    <section
  id="about"
  className="bg-gradient-to-b from-purple-100 via-indigo-100 to-blue-100 py-16 px-4 sm:px-8 lg:px-16 min-h-screen flex items-center justify-center"
>
  <div className="w-full max-w-6xl text-center">
    {/* Animated Heading */}
    <motion.h2
      className="text-5xl font-extrabold text-blue-800 mb-12 transition-all duration-300 hover:scale-105"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      viewport={{ once: true }}
    >
      About Me
    </motion.h2>

    {/* About Content */}
    <motion.div
      className="bg-white/90 rounded-3xl border-2 border-blue-100 shadow-xl p-12 hover:shadow-blue-300 transition-all duration-500 hover:bg-blue-50 hover:border-blue-200"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      viewport={{ once: true }}
    >
      <motion.p
        className="text-lg text-gray-800 mb-6 leading-relaxed transition-colors duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        👋 Hello! I'm <span className="font-extrabold text-blue-900">Uniba Muzammil</span>, an{" "}
        <span className="text-blue-800 font-semibold">undergraduate Computer Science student </span>
        with a passion for <span className="text-purple-700 font-semibold">frontend development</span>,
        clean design, and creating intuitive user experiences.
      </motion.p>

      <motion.p
        className="text-lg text-gray-800 mb-6 leading-relaxed transition-colors duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        🧠 I’ve worked with <span className="font-bold text-green-700">React, Tailwind CSS, JavaScript</span>, and
        modern UI/UX principles to build elegant interfaces. This platform is my way of sharing useful code snippets,
        guides, and projects to help others learn React effectively.
      </motion.p>

      <motion.p
        className="text-lg text-gray-800 leading-relaxed transition-colors duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        🚀 I'm always curious, experimenting, and building something new. My goal is to build a
        <span className="font-bold text-pink-700"> supportive learning hub</span> for all React enthusiasts — whether
        you're a total beginner or want to level up your dev skills.
      </motion.p>
    </motion.div>
  </div>
</section>
  );
}

