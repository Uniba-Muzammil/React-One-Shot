import React from "react";
import { BookOpen, Code, MousePointer, Rocket } from "lucide-react";

const AboutWebsite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 animate-gradient-x py-12 px-6 relative overflow-hidden">
      {/* Decorative Background Animation */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-10 border border-gray-200 transition-transform duration-500 hover:scale-[1.02] hover:shadow-3xl">
        {/* Page Heading (fade-in only here) */}
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 flex items-center gap-3 animate-fadeIn">
          <BookOpen className="w-9 h-9 text-indigo-500" />
          Getting Started 
        </h1>

        <p className="text-gray-600 mb-10">
          Welcome! 🎉 This page will help you understand how to navigate the website and
          make the most out of the{" "}
          <span className="font-semibold text-indigo-600">Live Code Editor</span> feature.
        </p>

        {/* Steps Section */}
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex gap-4 items-start group">
            <MousePointer className="w-7 h-7 text-pink-500 mt-1 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                1. Navigating the Website
              </h2>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>
                  Use the <span className="font-medium text-indigo-600">Navbar</span> to move between sections like Home, About, Timeline, and Resources.
                </li>
                <li>
                  Click on <span className="font-medium text-indigo-600">Learn React</span> to explore different coding topics.
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4 items-start group">
            <Code className="w-7 h-7 text-green-500 mt-1 group-hover:rotate-12 transition-transform duration-300" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                2. Using the Live Code Editor
              </h2>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Theory appears on the <span className="font-medium">left</span> side to explain the concept.</li>
                <li>Code editor is on the <span className="font-medium">right</span> where you can type and edit code.</li>
                <li>Click the <span className="font-medium text-green-600">Run ▶</span> button to see output instantly below the editor.</li>
                <li>💡 Read comments inside the code editor for better understanding.</li>
                <li>🔄 Use the <span className="font-medium text-indigo-600">Reset</span> button to restore the default code.</li>
                <li>📘 Revisit comments for a quick review before interviews.</li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4 items-start group">
            <Rocket className="w-7 h-7 text-purple-500 mt-1 group-hover:scale-125 transition-transform duration-300" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                3. Tips for Best Learning
              </h2>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Experiment with the code — change values, functions, and see results live 🚀.</li>
                <li>Revisit the <span className="font-medium">Timeline</span> to track your learning progress.</li>
                <li>Use the <span className="font-medium">Resources</span> page for extra reading and practice links.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ending Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 font-medium text-lg">
            🌟 Start exploring, coding, and learning — you’ve got this!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutWebsite;




