"use client";

import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <section className="flex justify-center items-center min-h-screen px-4 my-8">
      <div className="w-full max-w-md bg-white">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
          <p className="text-gray-600">
            Enter your account and start your journey with us
          </p>
        </div>

        {/* Social Login */}
        <div className="flex flex-col gap-3 mb-6">
          <button className="flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition-colors">
            <FcGoogle className="text-2xl" />
            <span className="text-gray-700 font-medium">
              Continue with Google
            </span>
          </button>

          <button className="flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition-colors">
            <BsFacebook className="text-xl text-blue-600" />
            <span className="text-gray-700 font-medium">
              Continue with Facebook
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-500 text-sm">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Login Form */}
        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
            />
          </div>

          <div className="text-right">
            <Link
              href="#"
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>

        {/* Sign Up Prompt */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
