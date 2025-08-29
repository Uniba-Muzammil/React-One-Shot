import { motion } from "framer-motion";

const resources = [
  {
    title: "React Official Docs 📘",
    link: "https://react.dev/",
    desc: "The official React documentation — your best starting point to learn concepts, hooks, and best practices.",
  },
  {
    title: "Tailwind CSS Docs 🎨",
    link: "https://tailwindcss.com/docs",
    desc: "Comprehensive reference for styling using Tailwind CSS utility classes.",
  },
  {
    title: "JavaScript Info ✨",
    link: "https://javascript.info/",
    desc: "Modern, in-depth JavaScript guide that explains concepts step by step.",
  },
  {
    title: "FreeCodeCamp React Guide 💡",
    link: "https://www.freecodecamp.org/learn/front-end-development-libraries/#react",
    desc: "Hands-on React lessons with coding challenges and projects.",
  },
  {
    title: "React Icons Library 🔧",
    link: "https://react-icons.github.io/react-icons/",
    desc: "Huge library of customizable icons you can easily use in your React projects.",
  },
  {
    title: "Vercel Deployment 🚀",
    link: "https://vercel.com/docs",
    desc: "Docs for deploying React apps quickly and easily on Vercel.",
  },
];

export default function Resources() {
  return (
    <section
      id="resources"
      className="bg-gradient-to-b from-indigo-200 via-purple-50 to-blue-100 py-20 px-3 sm:px-8 lg:px-16 min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-6xl text-center ">
        {/* Animated Heading */}
        <motion.h2
          className="text-5xl font-extrabold text-blue-800 mb-14 transition-all duration-300 hover:scale-105"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          Resources
        </motion.h2>

        {/* Animated Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {resources.map((res, index) => (
            <motion.a
              key={index}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 rounded-3xl border-2 border-blue-100 shadow-xl p-8 text-left hover:shadow-blue-300 transition-all duration-500 hover:bg-blue-50 hover:border-blue-200"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{res.title}</h3>
              <p className="text-gray-800 leading-relaxed">{res.desc}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

