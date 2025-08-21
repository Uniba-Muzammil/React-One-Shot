import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import topicsData from "../data/topicsData";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { motion } from "framer-motion";
import { RotateCcw, Play } from "lucide-react";

export default function TopicDetail() {
  const { id } = useParams();
  const topic = topicsData.find((t) => t.id === id);

  const [code, setCode] = useState(topic.code);
  const [runCode, setRunCode] = useState(topic.code);

  useEffect(() => {
    setCode(topic.code);
    setRunCode(topic.code);
  }, [topic]);

  const handleReset = () => {
    setCode(topic.code);
    setRunCode(topic.code);
  };

  const handleRun = () => setRunCode(code);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-50 p-8">
      {/* Hero Heading with rocket emoji bounce */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-3xl font-extrabold text-center mb-10"
      >
        <motion.span
          className="text-4xl md:text-3xl inline-block"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          🚀
        </motion.span>{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600">
          Dive into {topic.title}
        </span>
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Enhanced Theory Section with dynamic height */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 p-6 bg-gradient-to-br from-purple-50 via-white to-indigo-50 shadow-2xl rounded-3xl border border-purple-300/60 relative overflow-hidden transform transition hover:-translate-y-2 hover:shadow-3xl"
        >
          {/* Heading with static book emoji and unique gradient */}
          <h2 className="text-xl md:text-3xl font-extrabold mb-6 flex items-center gap-3">
            <span className="text-xl md:text-3xl">📖</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-indigo-300 to-cyan-500">
              Theory
            </span>
          </h2>

          {/* Bullet-style theory points: split by ". " or ": " */}
          <ul className="space-y-4 text-gray-700 leading-relaxed list-disc list-inside">
            {topic.theory
              .split(/\. |: /) // split by ". " or ": "
              .filter(Boolean)
              .map((point, index) => (
                <li key={index} className="text-gray-700">
                  {point.trim()}
                </li>
              ))}
          </ul>
        </motion.div>

        {/* Code Editor Section (unchanged) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 p-6 bg-white shadow-2xl rounded-2xl border border-blue-300/60 relative overflow-hidden"
        >
          <LiveProvider code={runCode} scope={{ React }} noInline>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">💻 Live Code Editor</h3>
            <LiveEditor
              value={code}
              onChange={(newCode) => setCode(newCode)}
              className="border p-3 bg-gray-900 text-green-400 rounded-lg text-sm font-mono shadow-inner min-h-[200px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition-all duration-300 animate-pulse-border"
            />

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-medium rounded-xl shadow hover:bg-purple-700 transition"
              >
                <RotateCcw size={18} /> Reset
              </button>
              <button
                onClick={handleRun}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition"
              >
                <Play size={18} /> Run
              </button>
            </div>

            <LiveError className="text-red-600 mt-3 font-semibold" />

            <h3 className="text-lg font-semibold text-blue-600 mt-6 mb-2">⚡ Live Output</h3>
            <div className="p-4 border rounded-lg bg-gray-50 shadow-inner min-h-[100px]">
              <LivePreview />
            </div>
          </LiveProvider>
        </motion.div>
      </div>
    </div>
  );
}








