import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/jobs", label: "Jobs" },
  { to: "/companies", label: "Companies" },
];

const linkClasses = ({ isActive }) =>
  [
    "text-lg font-medium flex justify-center items-center border px-5 py-2 rounded-xl transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2",
    isActive
      ? "text-gray-900 border-red-300 bg-red-50/50"
      : "text-gray-700 border-transparent hover:text-gray-900 hover:border-red-300",
  ].join(" ");

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between lg:grid lg:grid-cols-3">
        {/* Logo */}
        <NavLink
          to="/"
          className="justify-self-start text-4xl font-bold tracking-wide text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-lg"
          onClick={() => setOpen(false)}
        >
          JobSync<span className="text-red-500">:</span>
        </NavLink>

        {/* Desktop links — dead center of the full bar */}
        <div className="hidden lg:flex justify-self-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop buttons */}
        <div className="hidden lg:flex justify-self-end gap-5 items-center">
          <NavLink
            to="/login"
            className="px-8 py-3 rounded-xl border border-gray-200 hover:border-gray-400 text-sm font-medium text-gray-900 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
          >
            Log In
          </NavLink>
          <NavLink
            to="/register"
            className="px-8 py-3 rounded-xl bg-gray-900 text-sm font-semibold text-white hover:bg-gray-800 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          >
            Sign Up
          </NavLink>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-lg"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-gray-100 px-6 py-6 flex flex-col gap-4"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClasses}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <NavLink
              to="/login"
              className="px-8 py-3 rounded-xl border border-gray-200 hover:border-gray-400 text-sm font-medium text-gray-900 text-center transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              Log In
            </NavLink>
            <NavLink
              to="/register"
              className="px-8 py-3 rounded-xl bg-gray-900 text-sm font-semibold text-white hover:bg-gray-800 text-center transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
