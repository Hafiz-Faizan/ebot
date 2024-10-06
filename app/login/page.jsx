// pages/login.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase"; // Import the auth object from firebase setup
import { toast } from "sonner"; // Optional for displaying success/error messages

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Sign in the user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!"); // Optional: Success notification
      router.push("/dashboard"); // Redirect to dashboard after successful login
    } catch (err) {
      setError(err.message); // Set error if login fails
      toast.error(err.message); // Optional: Display error message
      console.log(err); // Log error for debugging
    } finally {
      setLoading(false); // Set loading to false regardless of success or error
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Login Form */}
      <div className="flex flex-col justify-center w-1/2 px-8 bg-gray-50">
        <h2 className="text-center text-xl text-gray-600 mb-2">Welcome back!</h2>
        <h1 className="text-center text-2xl font-bold text-black mb-6">
          Log in as accountant
        </h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="john.doe@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </div>
        </form>
        {error && <p className="mt-4 text-center text-sm text-red-600">{error}</p>}
        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
        <a
          href="#"
          className="mt-2 block text-sm text-center text-blue-600 hover:underline"
        >
          Recover account
        </a>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <img
          src="/logo.jpg"
          alt="Login Image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
