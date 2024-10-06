// pages/login.js
export default function Login() {
  return (
    <div className="flex h-screen">
      {/* Left Side - Login Form */}
      <div className="flex flex-col justify-center w-1/2 px-8 bg-gray-50">
        <h2 className="text-center text-xl text-gray-600 mb-2">
          Welcome back!
        </h2>
        <h1 className="text-center text-2xl font-bold text-black mb-6">
          Log in as accountant
        </h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="john.doe@company.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
            >
              Log in
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
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
