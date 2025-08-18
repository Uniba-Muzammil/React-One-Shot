export default function Resources() {
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

  return (
    <section
      id="resources"
      className="bg-gradient-to-b from-blue-100 via-white to-blue-50 py-24 px-4 sm:px-8 lg:px-16 min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-5xl font-extrabold text-blue-800 mb-12 transition-all duration-300 hover:scale-105">
          Resources
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((res, index) => (
            <a
              key={index}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 rounded-3xl border-2 border-blue-100 shadow-xl p-8 text-left hover:shadow-blue-300 transition-all duration-500 hover:bg-blue-50 hover:border-blue-200"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{res.title}</h3>
              <p className="text-gray-800 leading-relaxed">{res.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
