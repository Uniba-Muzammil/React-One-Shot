import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100
                    backdrop-blur-lg shadow-md sticky top-0 z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
       <Link 
  to="/" 
  onClick={() => setIsDropdownOpen(false)}
  className="text-3xl font-extrabold hover:scale-110 transition-transform duration-300"
>
  <span className=" text-indigo-700 ">
    Uniba
  </span>
  <span className=" text-indigo-500">
    Stack
  </span>
</Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8 text-gray-700 font-medium">

          <Link 
            to="/" 
            onClick={() => setIsDropdownOpen(false)}
            className="relative hover:text-purple-600 transition duration-300 
                       after:content-[''] after:block after:w-0 after:h-[2px] 
                       after:bg-purple-600 after:transition-all after:duration-300 
                       hover:after:w-full"
          >
            Home
          </Link>

          <Link 
            to="/guide" 
            onClick={() => setIsDropdownOpen(false)}
            className="relative hover:text-purple-600 transition duration-300 
                       after:content-[''] after:block after:w-0 after:h-[2px] 
                       after:bg-purple-600 after:transition-all after:duration-300 
                       hover:after:w-full"
          >
            About
          </Link>

          <Link 
            to="/aboutwebsite" 
            onClick={() => setIsDropdownOpen(false)}
            className="relative hover:text-purple-600 transition duration-300 
                       after:content-[''] after:block after:w-0 after:h-[2px] 
                       after:bg-purple-600 after:transition-all after:duration-300 
                       hover:after:w-full"
          >
            Guide
          </Link>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={toggleDropdown} 
              className="hover:text-purple-600 transition flex items-center gap-1"
            >
              Learn React
              <span 
                className={`text-sm transform transition-transform duration-300 
                           ${isDropdownOpen ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>

            <div
              className={`absolute left-0 mt-3 w-56 
                          bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 
                          shadow-xl rounded-xl border border-purple-200/30 
                          transition-all duration-300 origin-top
                          ${isDropdownOpen 
                            ? "opacity-100 scale-100 translate-y-0 visible" 
                            : "opacity-0 scale-95 -translate-y-2 invisible"
                          }`}
            >
              <div className="py-3">
                {[
                  { path: "jsx-components", label: "JSX & Components" },
                  { path: "props-state", label: "Props & State" },
                  { path: "event-handling", label: "Event Handling" },
                  { path: "react-hooks", label: "React Hooks" },
                  { path: "api-integration", label: "API Integration" },
                  { path: "project-building-tips", label: "Project Tips" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={`/topics/${item.path}`}
                    className="block px-5 py-2 text-gray-700 hover:bg-gradient-to-r 
                               hover:from-purple-500 hover:to-blue-500 hover:text-white 
                               rounded-lg transition-all duration-300"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link 
            to="/timeline" 
            onClick={() => setIsDropdownOpen(false)}
            className="relative hover:text-purple-600 transition duration-300 
                       after:content-[''] after:block after:w-0 after:h-[2px] 
                       after:bg-purple-600 after:transition-all after:duration-300 
                       hover:after:w-full"
          >
            Timeline
          </Link>
          
          <Link 
            to="/resources" 
            onClick={() => setIsDropdownOpen(false)}
            className="relative hover:text-purple-600 transition duration-300 
                       after:content-[''] after:block after:w-0 after:h-[2px] 
                       after:bg-purple-600 after:transition-all after:duration-300 
                       hover:after:w-full"
          >
            Resources
          </Link>
          
          <Link 
            to="/review" 
            onClick={() => setIsDropdownOpen(false)}
            className="relative hover:text-purple-600 transition duration-300 
                       after:content-[''] after:block after:w-0 after:h-[2px] 
                       after:bg-purple-600 after:transition-all after:duration-300 
                       hover:after:w-full"
          >
            Review
          </Link>

          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
