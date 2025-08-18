export default function Home(){
  return (
    <div className="pt-24 px-4 bg-gradient-to-b from-blue-50 via-purple-50 to-blue-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200 text-center py-16 px-4 rounded-xl shadow-xl transition-all duration-500 hover:from-blue-200 hover:to-purple-200">
<h1 className="text-4xl font-bold mb-4 transition-all duration-500 hover:scale-105">
  <span className="text-blue-900 hover:text-gray-700 transition-colors duration-300">
    Welcome to
  </span>
  {" "}
  <span className="text-purple-700 hover:text-pink-500 transition-colors duration-300">
    UnibaStack
  </span>
</h1>
<p className="text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-500 hover:text-blue-800">
  A learning platform built by a Computer Science undergraduate to help you learn React 
  through hands-on examples and simplified theory.
</p>
       <a
  href="#topics"
  className="mt-8 inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg font-semibold 
             transition-all duration-500 ease-in-out hover:from-purple-600 hover:to-blue-600 hover:scale-105"
>
  Start Learning
</a> 
      </section>

      {/* Theory + Practice Section */}
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

      {/* What You'll Learn Section */}
      <section id="topics" className="mt-24 text-center max-w-4xl mx-auto  pb-6
    ">
        <h2 className="text-3xl font-extrabold text-blue-800 mb-6 ">🔍 What You'll Learn</h2>
        <ul className="text-gray-700 space-y-3 text-lg mb-6">
          <li className="hover:text-blue-800 transition">✔️ JSX & Components</li>
          <li className="hover:text-blue-800 transition">✔️ Props & State</li>
          <li className="hover:text-blue-800 transition">✔️ Event Handling</li>
          <li className="hover:text-blue-800 transition">✔️ React Hooks</li>
          <li className="hover:text-blue-800 transition">✔️ API Integration</li>
          <li className="hover:text-blue-800 transition">✔️ Project Building</li>
        </ul>
      </section>

     
 </div>
  );
};

