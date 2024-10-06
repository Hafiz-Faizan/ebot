"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../components/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "sonner";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      console.log("created");
      toast.success("Sign Up Successfully")
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          firstName: firstName,
          lastName: lastName,
          email: user.email,  // Use the email from the authenticated user
          company: company,
          createdAt: new Date(), // Optionally add a timestamp for account creation
        });
      }

      router.push("/dashboard"); // redirect after signup
    } catch (err) {
      setError(err.message); // Display detailed Firebase error message
      toast.error(err.message)
      console.log(err); // Log error in console for debugging

    } finally {
      setLoading(false);
      console.log("in finalyy ")

    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Sign Up Form */}
      <div className="flex flex-col justify-center w-1/2 px-8 bg-gray-50">
        <h2 className="text-center text-xl text-gray-600 mb-2">Create new account!</h2>
        <h1 className="text-center text-2xl font-bold text-black mb-6">Sign up as accountant</h1>
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Company: John Doe Tax & Accounting"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="john.doe@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Set a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>
          </div>
        </form>
        {error && <p className="mt-4 text-center text-sm text-red-600">{error}</p>}
        <p className="mt-4 text-center text-sm">
          Already have an account? <a href="#" className="text-blue-600 hover:underline">Log in</a>
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <img
          src="/logo.jpg"
          alt="Sign Up Image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
