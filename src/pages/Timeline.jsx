export default function Timeline() {
  const milestones = [
    {
      year: "2022",
      title: "Getting Started 🚀",
      details: [
        "Learned HTML, CSS, and JavaScript basics",
        "Built first static pages and small practice projects",
        "Discovered love for clean UI",
      ],
    },
    {
      year: "2023",
      title: "Exploring Frontend 🌐",
      details: [
        "Started working with React.js and Tailwind CSS",
        "Built apps like a weather app and portfolio site",
        "Learned component reusability and responsive design",
      ],
    },
    {
      year: "2024",
      title: "Projects & Experiments 💡",
      details: [
        "Created structured projects with API integration",
        "Learned React Router, Axios, and animation libraries",
        "Focused on UI/UX and writing clean, maintainable code",
      ],
    },
    {
      year: "2025",
      title: "Building UnibaStack 💻",
      details: [
        "Designed React learning hub to share guides & projects",
        "Combined frontend coding with teaching",
        "Enhanced skills with real-world project structures",
      ],
    },
    {
      year: "Future",
      title: "Beyond & Ahead ✨",
      details: [
        "Expanding into Full Stack (Node.js, MongoDB, etc.)",
        "Exploring AI + Web integration for modern apps",
        "Aiming to create impactful projects & help more learners",
      ],
    },
  ];

  return (
    <section
      id="timeline"
      className="bg-gradient-to-b from-indigo-100 via-purple-50 to-blue-100 py-24 px-4 sm:px-8 lg:px-16 min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-extrabold text-blue-800 text-center mb-12 transition-all duration-300 hover:scale-105">
          My Journey
        </h2>

        <div className="relative border-l-4 border-blue-400 ml-6">
          {milestones.map((item, index) => (
            <div key={index} className="mb-12 ml-6">
              {/* Dot */}
              <div className="absolute -left-3.5 w-7 h-7 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>

              {/* Card */}
              <div className="bg-white/90 rounded-2xl border-2 border-blue-100 shadow-xl p-6 hover:shadow-blue-300 transition-all duration-500 hover:bg-blue-50 hover:border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900">
                  {item.year} – {item.title}
                </h3>
                <ul className="list-disc list-inside text-gray-800 mt-3 space-y-2">
                  {item.details.map((point, i) => (
                    <li key={i} className="transition-colors duration-300 hover:text-blue-600">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
