// pages/signup.js
export default function Signup() {
    return (
      <div className="flex h-screen">
        {/* Left Side - Sign Up Form */}
        <div className="flex flex-col justify-center w-1/2 px-8 bg-gray-50">
          <h2 className="text-center text-xl text-gray-600 mb-2">Create new account!</h2>
          <h1 className="text-center text-2xl font-bold text-black mb-6">Sign up as accountant</h1>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Company: John Doe Tax & Accounting"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="john.doe@company.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Set a strong password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
              >
                Sign up
              </button>
            </div>
          </form>
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
  