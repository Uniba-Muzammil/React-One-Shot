import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EditorHeader = () => (
  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-t-lg">
    <span className="w-3 h-3 rounded-full bg-red-500"></span>
    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span className="w-3 h-3 rounded-full bg-green-500"></span>
    <span className="ml-4 text-gray-300 text-sm font-mono">App.jsx</span>
  </div>
);

export default function Home() {
  return (
    <div className="pt-24 px-4 bg-gradient-to-b from-blue-50 via-purple-50 to-blue-100">
      {/* Hero Section with Animation */}
<motion.section
  className="relative bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200 text-center py-20 px-6 rounded-b-[80px] shadow-2xl overflow-hidden"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {/* Background Glow Orbs */}
  <div className="absolute inset-0">
    <div className="absolute top-10 left-20 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
    <div className="absolute bottom-10 right-20 w-56 h-56 bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
  </div>

  <div className="relative z-10">
    {/* Animated Heading */}
    <motion.h1
      className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.7 }}
    >
      <span className="text-blue-900 hover:text-gray-700 transition-colors duration-300">
        Welcome to
      </span>{" "}
      <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
        UnibaStack
      </span>
    </motion.h1>

    {/* Subtext */}
    <motion.p
      className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-500 hover:text-blue-800"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7 }}
    >
      A learning platform built by a Computer Science undergraduate to help
      you learn React through hands-on examples and simplified theory.
    </motion.p>
  </div>

  {/* Bottom Wave Divider */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg
      className="w-full h-24 text-blue-200"
      preserveAspectRatio="none"
      viewBox="0 0 1440 320"
    >
      <path
        fill="currentColor"
        d="M0,224L60,202.7C120,181,240,139,360,117.3C480,96,600,96,720,122.7C840,149,960,203,1080,224C1200,245,1320,235,1380,229.3L1440,224V320H0Z"
      ></path>
    </svg>
  </div>
</motion.section>

      {/* Theory + Practice Section */}
      <section className="mt-24 text-center">
        <h2 className="text-4xl font-extrabold mb-10">
          <span className="mr-2"></span>
          <span
            className="text-blue-900"
          >
            Learn React the Smart Way
          </span>
        </h2>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-6xl mx-auto px-4">
        <div className="bg-white/90 shadow-xl p-8 rounded-3xl border-2 border-blue-100 hover:shadow-blue-200 hover:bg-blue-50 transition-all duration-300">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">📘 React Theory</h2>
          <p className="text-gray-700 leading-relaxed">
            All concepts are explained with beginner-friendly comments inside the code — like a personal mentor guiding you line by line.
          </p>
        </div>
        <div className="bg-white/90 shadow-xl p-8 rounded-3xl border-2 border-blue-100 hover:shadow-blue-200 hover:bg-blue-50 transition-all duration-300">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">⚙️ Practical Components</h2>
          <p className="text-gray-700 leading-relaxed">
            Real, working React components that demonstrate theory in action. Ready to run, tweak, and learn by doing.
          </p>
        </div>
      </section>
      {/* Features Section */}
     <section className="mt-24 max-w-5xl mx-auto">
  <h2 className="text-3xl font-extrabold text-purple-800 text-center mb-12">
     Why Learn with UnibaStack?
  </h2>

  <div className="space-y-10">
    {[
      {
        icon: "✨",
        title: "Simplified Learning",
        desc: "No jargon — just clear explanations with real-life coding examples.",
      },
      {
        icon: "💻",
        title: "Live Code Editor",
        desc: "Write, test, and reset code instantly while reading the theory.",
      },
      {
        icon: "🎯",
        title: "Interview Ready",
        desc: "Quick review notes & code snippets designed for interview prep.",
      },
    ].map((feature, i) => (
      <motion.div
        key={i}
        className="flex flex-col md:flex-row items-center gap-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: i * 0.5 }}
        viewport={{ once: true }}
      >
        {/* Emoji Circle */}
        <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-full bg-purple-100 text-3xl shadow-md">
          {feature.icon}
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl text-blue-700 mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

          {/* Demo Section */}
      <section className="mt-24">
        <h2 className="text-3xl font-extrabold text-blue-800 mb-6 text-center"> 🖼️ See It in Action </h2>
        <div className="bg-white rounded-2xl shadow-xl max-w-4xl mx-auto p-6 border">
          <LiveProvider code={`function App() {\n  return <h1>Welcome To UnibaStack 🌍</h1>\n}`}>
            <EditorHeader />
            <div className="bg-gray-900 rounded-b-lg shadow-lg overflow-hidden text-left">
              <LiveEditor
                className="font-mono text-sm leading-6 px-4 py-3"
                style={{
                  fontFamily: "Fira Code, monospace",
                  backgroundColor: "transparent",
                  color: "#f8f8f2",
                  minHeight: "180px",
                }}
              />
            </div>
            <LiveError className="text-red-500 font-mono mt-2 px-2 text-left" />
            <div className="mt-4 bg-gray-50 p-4 rounded-xl shadow-md border border-gray-200 text-left">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">🔍 Output</h3>
              <LivePreview className="p-3 border rounded-lg bg-white" />
            </div>
          </LiveProvider>
          <p className="mt-4 text-gray-600 text-center">
            Edit the code → see instant results. Learn React by doing, not just by reading.
          </p>
        </div>
      </section>

      {/* Learning Path Section */}

      

<section className="mt-24 text-center max-w-5xl mx-auto">
  <motion.h2
    className="text-3xl font-extrabold text-purple-800 mb-10"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", duration: 0.8 }}
    viewport={{ once: true }}
  >
    📈 Your Learning Path
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        title: "Beginner",
        desc: "JSX, Components, Props, State",
        gradient: "from-blue-100 to-purple-100",
      },
      {
        title: "Intermediate",
        desc: "Hooks, Events, API Integration",
        gradient: "from-purple-100 to-blue-100",
      },
      {
        title: "Advanced",
        desc: "Projects, Optimization, Interview Prep",
        gradient: "from-blue-100 to-purple-100",
      },
    ].map((stage, i) => (
      <motion.div
        key={i}
        className={`bg-gradient-to-r ${stage.gradient} p-6 rounded-xl shadow-md`}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          duration: 0.8,
          bounce: 0.3,
          delay: i * 0.3,
        }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.05, rotate: i === 1 ? 1 : -1 }}
      >
        <h3 className="font-bold text-xl text-blue-800 mb-2">{stage.title}</h3>
        <p className="text-gray-700">{stage.desc}</p>
      </motion.div>
    ))}
  </div>
</section>

      {/* What You'll Learn Section */}
      <section id="topics" className="mt-24 text-center max-w-4xl mx-auto pb-6">
        <h2 className="text-3xl font-extrabold text-blue-800 mb-6">🔍 What You'll Learn</h2>
        <ul className="text-gray-700 space-y-3 text-lg mb-6">
          <li className="hover:text-blue-800 transition">✔️ JSX & Components</li>
          <li className="hover:text-blue-800 transition">✔️ Props & State</li>
          <li className="hover:text-blue-800 transition">✔️ Event Handling</li>
          <li className="hover:text-blue-800 transition">✔️ React Hooks</li>
          <li className="hover:text-blue-800 transition">✔️ React Routing</li>
          <li className="hover:text-blue-800 transition">✔️ Mapping</li>
          <li className="hover:text-blue-800 transition">✔️ API Integration</li>
          <li className="hover:text-blue-800 transition">✔️ Project Building</li>
        </ul>
      </section>

      {/* Final Call to Action */}
<section className="relative py-20 bg-gradient-to-r from-blue-200 to-purple-300 text-gray-900 overflow-hidden">
  {/* Decorative Shape (curved top & bottom) */}
  <div className="absolute inset-0">
    <svg
      className="absolute top-0 w-full h-20 text-blue-200"
      preserveAspectRatio="none"
      viewBox="0 0 1440 320"
    >
      <path
        fill="currentColor"
        d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,133.3C672,107,768,85,864,106.7C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160V0H0Z"
      ></path>
    </svg>
    <svg
      className="absolute bottom-0 w-full h-20 text-purple-300"
      preserveAspectRatio="none"
      viewBox="0 0 1440 320"
    >
      <path
        fill="currentColor"
        d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,154.7C960,160,1056,160,1152,176C1248,192,1344,224,1392,240L1440,256V320H0Z"
      ></path>
    </svg>
  </div>

  <div className="relative max-w-2xl mx-auto text-center px-6">
    <h2 className="text-3xl font-extrabold mb-4 text-blue-900">
      Start Your React Journey Today!
    </h2>
    <p className="text-lg mb-6 text-gray-700">
      Learn React with hands-on coding, interactive previews, and simplified theory — everything you need in one place.
    </p>
    <Link
  to="/guide"
  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full shadow-md font-semibold 
    transition-all duration-500 ease-in-out 
    hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 
    hover:scale-110 hover:shadow-xl"
>
  Start Learning Now
</Link>
  </div>
</section>
    </div>
  );
}



