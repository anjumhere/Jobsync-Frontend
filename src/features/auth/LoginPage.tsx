import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Enter your email and password to continue.");
      return;
    }

    setSubmitting(true);
    try {
      // TODO: wire up to your auth endpoint
      // await login(form);
    } catch (err) {
      setError("That email and password didn't match. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link to="/" className="text-4xl font-bold tracking-wide text-gray-900">
            JobSync<span className="text-red-500">:</span>
          </Link>
          <p className="mt-3 text-gray-600">Log in to keep track of your applications.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          {error && (
            <div
              role="alert"
              className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
            >
              {error}
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:border-red-300 transition-all duration-300"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium text-gray-900">
                Password
              </label>
              <Link to="/forgot-password" className="text-sm font-medium text-red-500 hover:text-red-600">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:border-red-300 transition-all duration-300"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 px-8 py-3 rounded-xl bg-gray-900 text-sm font-semibold text-white hover:bg-gray-800 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Logging in…" : "Log In"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="font-medium text-red-500 hover:text-red-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
