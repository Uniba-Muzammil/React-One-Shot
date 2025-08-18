import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 300) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 300) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-r from-purple-100 via-[#e0f2fe] to-[#f0fdf4] text-gray-800 px-6 pt-10 pb-6 transition-all duration-500 ease-in-out">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left">
  <h2 className="text-2xl font-extrabold tracking-wide">
    <span className="text-indigo-700">Uniba</span>
    <span className="text-indigo-500">Stack</span>
  </h2>
  <p className="text-sm mt-2 text-gray-600">
    Created by Uniba Muzammil — CS Student & React Enthusiast.
  </p>
</div>



        {/* Right Icons */}
        <div className="flex gap-4 text-gray-600">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 hover:scale-110 transition-transform duration-300">
            <FaGithub size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:scale-110 transition-transform duration-300">
            <FaLinkedin size={22} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 hover:scale-110 transition-transform duration-300">
            <FaTwitter size={22} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-300 pt-4">
        Made with <span className="text-pink-400">❤️</span> using <span className="font-semibold text-indigo-700">React.js</span> | &copy; {new Date().getFullYear()} <span className="font-semibold">UnibaStack</span>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 bg-white text-indigo-500 p-3 rounded-full shadow-md hover:bg-indigo-100 hover:text-indigo-700 transition duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
