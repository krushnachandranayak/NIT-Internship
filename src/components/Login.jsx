import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-blue-200">
      <div className="flex flex-col items-start justify-between w-0.5/3 h-screen max-w-screen-lg bg-gradient-to-b from-green-100 to-blue-200 shadow-lg p-8">
        <aside className="w-64 bg-gray-900 text-white p-5 h-screen">
          <h2 className="text-2xl font-bold mb-8">🎬 Movie Library</h2>
          <nav className="space-y-4 text-center font-extrabold">
            <Link to="/dashboard" className="block hover:text-yellow-400">Dashboard</Link>
            <Link to="*" className="block hover:text-yellow-400">Profile</Link>
            <Link to="/movies" className="block hover:text-yellow-400">Movies</Link>
            <Link to="*" className="block hover:text-yellow-400">Notifications</Link>
            <div className="mt-8">
              <Link to="/login" className="block text-sm hover:text-yellow-400 my-6">Login</Link>
              <Link to="/signup" className="block text-sm hover:text-yellow-400">Sign Up</Link>
            </div>
          </nav>
        </aside>
      </div>
      <div className="items-center justify-center flex-1 flex flex-col p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Login</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition hover:cursor-pointer"
          >
            Log In
          </button>
        </form>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 underline hover:underline-offset-2">
            Sign Up
          </Link>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Login;