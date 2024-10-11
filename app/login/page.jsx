"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";
import { toast } from "sonner";

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
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Login Form - Full width on mobile, half width on larger screens */}
      <div className="flex flex-col justify-center w-full px-4 sm:px-6 md:px-8 lg:w-1/2 bg-gray-50">
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
          Dont have an account?{" "}
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

      {/* Image - Hidden on mobile, visible on larger screens */}
      <div className="hidden lg:block w-1/2 bg-gradient-to-r from-blue-500 to-purple-600">
        <img
          src="/logo.jpg"
          alt="Login Image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}