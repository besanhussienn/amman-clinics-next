"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import LoginModal from "./LoginModal";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-cream-200/95 backdrop-blur-md text-soft-taupe px-8 py-4 flex items-center justify-between shadow-md border-b border-soft-taupe/15 transition-all">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <span className="text-3xl font-extrabold tracking-tight text-stone-800">
          Amman<span className="text-emerald-700">.</span>Clinics
        </span>
      </div>

      {/* Links & Navigation Actions */}
      <div className="flex items-center gap-8">
        <a
          href="#Contactus"
          className="text-stone-700 hover:text-stone-900 font-semibold text-base transition-colors"
        >
          Contact us
        </a>

        {/* Language Switcher */}
        <div className="flex items-center bg-stone-200/60 p-1 rounded-xl border border-stone-300/50">
          <button
            type="button"
            className="px-3 py-1 rounded-lg text-xs font-bold bg-white text-stone-900 shadow-sm transition"
          >
            AR
          </button>
          <button
            type="button"
            className="px-3 py-1 rounded-lg text-xs font-medium text-stone-600 hover:text-stone-900 transition"
          >
            EN
          </button>
        </div>

        {/* Login Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="bg-stone-800 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-sm hover:bg-stone-900 hover:shadow-md transition-all active:scale-95"
        >
          Login
        </button>
      </div>

      {/* Modal (rendered outside the nav using a portal) */}
      {isOpen &&
        createPortal(
          <LoginModal onClose={() => setIsOpen(false)} />,
          document.body
        )}
    </nav>
  );
}

export default Navbar;