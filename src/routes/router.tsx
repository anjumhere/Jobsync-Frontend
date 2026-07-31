import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-3 items-center">
        {/* Logo — pinned to its column's start */}
        <Link
          to="/"
          className="justify-self-start text-4xl font-bold tracking-wide text-gray-900"
        >
          JobSync<span className="text-red-500">:</span>
        </Link>

        {/* Links — dead center of the FULL bar, independent of logo/button width */}
        <div className="justify-self-center flex gap-8">
          <Link
            to="/jobs"
            className="text-lg font-medium text-gray-700 flex justify-center items-center border border-transparent px-5 py-2 rounded-xl hover:text-gray-900 hover:border-red-300 transition-all duration-300"
          >
            Jobs
          </Link>
          <Link
            to="/companies"
            className="text-lg font-medium text-gray-700 flex justify-center items-center border border-transparent px-5 py-2 rounded-xl hover:text-gray-900 hover:border-red-300 transition-all duration-300"
          >
            Companies
          </Link>
        </div>

        {/* Buttons — pinned to its column's end */}
        <div className="justify-self-end flex gap-5 items-center">
          <Link
            to="/login"
            className="px-8 py-3 cursor-pointer rounded-xl border border-gray-200 hover:border-gray-400 text-sm font-medium text-gray-900 transition-all duration-300"
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="px-8 py-3 rounded-xl cursor-pointer bg-gray-900 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
