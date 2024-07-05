import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 bg-gradient-to-r from-emerald-100 via-white to-olive-200">
      <div className="container flex items-center justify-between px-4 mx-auto md:px-8">
        <div className="w-32 md:w-40">
          <img src="src/assets/Logo.png" alt="Logo" />
        </div>
        <nav className="hidden gap-5 md:flex">
          {["Home", "Contact", "About"].map((item, index) => (
            <button
              key={index}
              className="px-3 py-2 text-white rounded-md bg-slate-700 active:bg-slate-300 active:text-black"
              aria-label={item}
            >
              {item}
            </button>
          ))}
        </nav>
        <nav className="hidden gap-5 md:flex">
          {["Login", "Sign Up"].map((item, index) => (
            <button
              key={index}
              className="px-3 py-2 font-bold text-white bg-green-600 rounded-md active:bg-slate-300 active:text-black"
              aria-label={item}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            className="text-gray-700"
            aria-label="Open Menu"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-center gap-5 py-4 md:hidden">
          {["Home", "Contact", "About"].map((item, index) => (
            <button
              key={index}
              className="px-3 py-2 text-white rounded-md bg-slate-700 active:bg-slate-300 active:text-black"
              aria-label={item}
            >
              {item}
            </button>
          ))}
          {["Login", "Sign Up"].map((item, index) => (
            <button
              key={index}
              className="px-3 py-2 font-bold text-white bg-green-600 rounded-md active:bg-slate-300 active:text-black"
              aria-label={item}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
